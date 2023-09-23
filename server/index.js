const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
mongoose
  .connect("mongodb://127.0.0.1:27017/book_db")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });
const bookRoute = require("./routes/book.routes");
const tutorialRoute = require("./routes/tutorial.routes");
const userRoute = require("./routes/user.routes");
const userAccountRoute = require("./routes/useraccount.routes");
const todoRoute = require("./routes/todo.routes");
const employeeRoute = require("./routes/employee.route");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
// Static directory path
app.use(
  express.static(path.join(__dirname, "dist/angular-mean-crud-tutorial"))
);
// API root
app.use("/api/books", bookRoute);
app.use("/api/tutorials", tutorialRoute);
app.use("/api/users", userRoute);
app.use("/api/account", userAccountRoute);
app.use("/api/todos", todoRoute);
app.use("/api/employee", employeeRoute);
// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});
// Base Route
app.get("/", (req, res) => {
  res.send("invaild endpoint");
});
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "dist/angular-mean-crud-tutorial/index.html")
  );
});
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
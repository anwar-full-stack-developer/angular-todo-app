const express = require("express");
const app = express();
const todoRoute = express.Router();
let Todo = require("../model/Todo");

// CREATE
todoRoute.route("/").post(async (req, res, next) => {
  console.log(req.body);
  await Todo.create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Todo created successfully!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// GET ALL
todoRoute.route("/").get(async (req, res, next) => {
  await Todo.find()
    .then((result) => {
      res.status(200).json(result);

      // res.json({
      //   data: result,
      //   message: "All items successfully fetched.",
      //   status: 200,
      // });
    })
    .catch((err) => {
      return next(err);
    });
});



// // GET SIGNLE
todoRoute.route("/:id").get(async (req, res, next) => {
  await Todo.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);

      // res.json({
      //   data: result,
      //   message: "Data successfully fetched.",
      //   status: 200,
      // });
    })
    .catch((err) => {
      return next(err);
    });
});

// // UPDATE
todoRoute.route("/:id").put(async (req, res, next) => {
  await Todo.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  })
    .then((result) => {
      res.status(200).json(result);

      // res.json({
      //   data: result,
      //   msg: "Data successfully updated.",
      // });
    })
    .catch((err) => {
      console.log(err);
    });
});
// // DELETE
todoRoute.route("/:id").delete(async (req, res, next) => {
  await Todo.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        msg: "Data successfully deleted.",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
// DELETE
// todoRoute.route("/").delete(async (req, res, next) => {
//   await Todo.deleteMany({})
//     .then(() => {
//       res.json({
//         msg: "Data successfully deleted.",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
module.exports = todoRoute;
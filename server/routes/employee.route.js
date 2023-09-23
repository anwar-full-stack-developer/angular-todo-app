const express = require("express");
const app = express();
const employeeRoute = express.Router();
let Employee = require("../model/Employee");

// CREATE
employeeRoute.route("/").post(async (req, res, next) => {
  console.log(req.body);
  await Employee.create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Employee created successfully!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// GET ALL
employeeRoute.route("/").get(async (req, res, next) => {
    console.log("console log list");
  await Employee.find()
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
employeeRoute.route("/:id").get(async (req, res, next) => {
  await Employee.findById(req.params.id)
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
employeeRoute.route("/:id").put(async (req, res, next) => {
  await Employee.findByIdAndUpdate(req.params.id, {
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
employeeRoute.route("/:id").delete(async (req, res, next) => {
  await Employee.findByIdAndRemove(req.params.id)
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
// employeeRoute.route("/").delete(async (req, res, next) => {
//   await Employee.deleteMany({})
//     .then(() => {
//       res.json({
//         msg: "Data successfully deleted.",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
module.exports = employeeRoute;
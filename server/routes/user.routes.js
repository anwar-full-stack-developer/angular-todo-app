const express = require("express");
const app = express();
const userRoute = express.Router();
let User = require("../model/User");

// CREATE
userRoute.route("/").post(async (req, res, next) => {
  await User.create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Account created successfully!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});
// GET ALL
userRoute.route("/").get(async (req, res, next) => {
  await User.find()
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
userRoute.route("/:id").get(async (req, res, next) => {
  await User.findById(req.params.id)
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
userRoute.route("/:id").put(async (req, res, next) => {
  await User.findByIdAndUpdate(req.params.id, {
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
userRoute.route("/:id").delete(async (req, res, next) => {
  await User.findByIdAndRemove(req.params.id)
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
// userRoute.route("/").delete(async (req, res, next) => {
//   await User.deleteMany({})
//     .then(() => {
//       res.json({
//         msg: "Data successfully deleted.",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
module.exports = userRoute;
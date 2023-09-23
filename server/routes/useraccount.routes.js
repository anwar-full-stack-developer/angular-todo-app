const express = require("express");
const app = express();
const userAccountRoute = express.Router();
let User = require("../model/User");

// CREATE
userAccountRoute.route("/register").post(async (req, res, next) => {
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


// login  //Athunticate
userAccountRoute.route("/login").post(async (req, res, next) => {
  let username = req.body.username || '';
  let password = req.body.password || '';

  console.log(username, password);

  await User.findOne({
    "username": username 
  })
    .then((result) => {
      if (result.password == password){
        res.status(200).json(result);
      }
      else {
        return res.status(401).json({'err': "User not valid"});;
      }

      // res.json({
      //   data: result,
      //   message: "User athunticated successfully!",
      //   status: 200,
      // });
    })
    .catch((err) => {
      return next(err);
    });
});



// // GET ALL
// tutorialRoute.route("/").get(async (req, res, next) => {
//   await Tutorial.find()
//     .then((result) => {
//       res.status(200).json(result);

//       // res.json({
//       //   data: result,
//       //   message: "All items successfully fetched.",
//       //   status: 200,
//       // });
//     })
//     .catch((err) => {
//       return next(err);
//     });
// });


// // GET ALL
// tutorialRoute.route("/find-by-title/:title").get(async (req, res, next) => {
//   // req.query.params.title;
//   await Tutorial.find({
//     "title": { "$regex": req.params.title, "$options": "i" } 
//   })
//     .then((result) => {
      
//       res.status(200).json(result);

//       // res.json({
//       //   data: result,
//       //   message: "All items successfully fetched.",
//       //   status: 200,
//       // });
//     })
//     .catch((err) => {
//       return next(err);
//     });
// });


// // GET SIGNLE
// tutorialRoute.route("/read-tutorial/:id").get(async (req, res, next) => {
//   await Tutorial.findById(req.params.id)
//     .then((result) => {
//       res.status(200).json(result);

//       // res.json({
//       //   data: result,
//       //   message: "Data successfully fetched.",
//       //   status: 200,
//       // });
//     })
//     .catch((err) => {
//       return next(err);
//     });
// });
// // UPDATE
// tutorialRoute.route("/update-tutorial/:id").put(async (req, res, next) => {
//   await Tutorial.findByIdAndUpdate(req.params.id, {
//     $set: req.body,
//   })
//     .then((result) => {
//       res.status(200).json(result);

//       // res.json({
//       //   data: result,
//       //   msg: "Data successfully updated.",
//       // });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// // DELETE
// tutorialRoute.route("/delete-tutorial/:id").delete(async (req, res, next) => {
//   await Tutorial.findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.json({
//         msg: "Data successfully deleted.",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// // DELETE
// tutorialRoute.route("/").delete(async (req, res, next) => {
//   await Tutorial.deleteMany({})
//     .then(() => {
//       res.json({
//         msg: "Data successfully deleted.",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
module.exports = userAccountRoute;
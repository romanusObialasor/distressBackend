const express = require("express");
const myRoter = express.Router();
const {
  createUser,
  getAllUser,
  getUser,
  deleteSingleUser,
  updateSingleUser,
  signInUser,
  sendText,
} = require("../controller/userController");

myRoter.route("/register").post(createUser);
myRoter.route("/user").get(getAllUser);
myRoter
  .route("/user/:id")
  .get(getUser)
  .patch(updateSingleUser)
  .delete(deleteSingleUser);
myRoter.route("/sign").post(signInUser);

myRoter.route("/message").post(sendText);

module.exports = myRoter;

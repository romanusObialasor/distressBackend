const express = require("express");
const myRoter = express.Router();
const {
  createUser,
  getAllUser,
  getUser,
  deleteSingleUser,
  getSingleUser,
  updateSingleUser,
  signInUser,
  sendDistress,
} = require("../controller/userController");

myRoter.route("/register").post(createUser);
myRoter.route("/sendMail").post(sendDistress);

myRoter.route("/user").get(getAllUser);
myRoter
  .route("/user/:id")
  .get(getSingleUser)
  .patch(updateSingleUser)
  .delete(deleteSingleUser);
myRoter.route("/sign").post(signInUser);

module.exports = myRoter;

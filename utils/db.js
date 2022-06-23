const mongoose = require("mongoose");
require("dotenv").config();
const url = "mongodb://localhost/Distress";

mongoose.connect(url).then(() => {
  console.log("database is now connected...!");
});

module.exports = mongoose;

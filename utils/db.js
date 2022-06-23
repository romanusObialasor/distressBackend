const mongoose = require("mongoose");
const url = "mongodb://localhost/Distress";
const url1 =
  "mongodb+srv://wrsMKqHXcLIdob5I:wrsMKqHXcLIdob5I@cluster0.vxqcy.mongodb.net/distressDB?retryWrites=true&w=majority";

mongoose.connect(url1).then(() => {
  console.log("database is now connected...!");
});

module.exports = mongoose;

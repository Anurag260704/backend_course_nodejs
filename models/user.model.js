//Import Mongoose
const mongoose = require("mongoose");

//Using mongoose to create a schema for the User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model("User", userSchema);
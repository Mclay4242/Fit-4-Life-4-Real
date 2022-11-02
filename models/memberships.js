const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  password2: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Users", userSchema);

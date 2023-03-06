const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  name: String,
  email: String,
  password: String,
  mobile: {
    type: Number,
    maxLength: 10,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };

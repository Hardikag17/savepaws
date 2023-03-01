const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  posts: {
    type: [String],
    default: undefined,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };

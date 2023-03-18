const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({ username: String, content: String });

const socialSchema = new Schema({
  /*
  unique Id of the pet
  */
  petID: String,
  photos: [String],
  likes: [String],
  comments: {
    type: [commentSchema],
  },
});

const Social = mongoose.model("Social", socialSchema);

module.exports = { Social };

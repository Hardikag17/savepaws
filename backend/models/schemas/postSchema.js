const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({ username: String, content: String });

const postSchema = new Schema({
  postID: String,
  username: String,
  img: {
    data: Buffer,
    contentType: String,
  },
  content: String,
  mobile: Number,
  city: String,
  vac: {
    type: Boolean,
    default: false,
  },
  postedOn: Date,
  updatedOn: Date,
  age: { type: Number, min: 0, max: 20 },
  likes: [String],
  comments: {
    type: [CommentSchema],
  },
});

const Post = mongoose.model("User", postSchema);

module.exports = { Post };

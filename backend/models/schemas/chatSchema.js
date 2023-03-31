const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    // unique id
    RoomId: {
      type: String,
      required: true,
    },
    // From & To are userId's
    SenderId: {
      type: String,
      required: true,
    },
    RecevierId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("chat", ChatSchema);

module.exports = { Chat };

const { ChatList } = require("../../models/schemas/chatSchema");
const addChatList = async (req, res) => {
  const UserId = req.body.UserId;
  const ConnectionId = req.body.ConnectionId;
  try {
    let response = await ChatList.findOneAndUpdate(
      { UserId: UserId },
      { $push: { Connections: ConnectionId } },
      { upsert: true }
    );

    console.log(response);

    res.status(200).send("Successfully saved");
  } catch (err) {
    res.status(400).send(err);
  }
};

const getChatList = async (req, res) => {
  const UserId = req.body.UserId;
  try {
    let response = await ChatList.find({ UserId: UserId });

    console.log(response);
    res.status(200).send({ ChatList: response[0].Connections });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { getChatList, addChatList };

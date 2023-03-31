const { CONNECTIONS_LIMIT } = require("./constants");
const { Chat } = require("../../models/schemas/chatSchema");

module.exports = (socket, io) => {
  let clientsConnected = [];

  if (io.engine.clientsCount > CONNECTIONS_LIMIT) {
    socket.emit("err", { message: "reach the limit of connections" });
    socket.disconnect();
    console.log("Disconnected...");
    return;
  }

  socket.on("connect", () => {
    console.log("User Connected", socket.id);
  });

  socket.emit("welcome", "Welcome to Paws Adoption Community Chat (MVC Phase)");

  socket.on("send_message", async (data) => {
    let new_Message = new Chat(data);
    try {
      socket.to(data.RoomId).emit("receive_message", data);
      await new_Message.save();
    } catch (err) {
      console.log(err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
    console.log(data);
  });
};

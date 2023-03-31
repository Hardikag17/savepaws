const { CONNECTIONS_LIMIT } = require("./constants");
module.exports = (io, socket) => {
  socket.emit("welcome", "Welcome to Paws Adoption Community Chat (MVC Phase)");

  socket.emit("disconnect", () => {});
  const connectRoom = () => {};
};

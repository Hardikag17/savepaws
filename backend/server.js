//jshint esversion:6
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Routes
const userRoutes = require("./routes/userRoutes");
const petRoutes = require("./routes/petRoutes");
const socialRoutes = require("./routes/socialRoutes");
const optionRoutes = require("./routes/optionRoutes");

// Chat
const Chat = require("./controllers/chat/chatController");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/pets", petRoutes);
app.use("/social", socialRoutes);
app.use("/options", optionRoutes);

//PORT
const PORT = 9000 || process.env.PORT;

//Mongoose connect
const { connectDB } = require("./connect");
connectDB();

// Server
const server = app.listen(PORT, function () {
  console.log(`Server is running on PORT = ${PORT}`);
});

// Socket
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const onConnection = (socket) => {
  console.log(`Socket started`);
  Chat(socket, io);
};

io.on("connection", onConnection);

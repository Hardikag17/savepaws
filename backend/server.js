//jshint esversion:6
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/user", userRoutes);

//PORT
const PORT = 9000 || process.env.PORT;

//Mongoose connect
const { connectDB } = require("./connect");
connectDB();

app.listen(PORT, function () {
  console.log("Server is running");
});

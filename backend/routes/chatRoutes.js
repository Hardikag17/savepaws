const express = require("express");
const routes = express.Router();

const { getRoom } = require("../controllers/chat/getRoom");

routes.post("/room", getRoom);

module.exports = routes;

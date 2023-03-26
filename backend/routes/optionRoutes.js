const express = require("express");
const routes = express.Router();

const { getBreeds } = require("../controllers/optionController");

routes.get("/breeds", getBreeds);

module.exports = routes;

const express = require("express");
const { body, query } = require("express-validator");

const { getPets } = require("../controllers/petController");

const routes = express.Router();

// Pet

routes.get("/", getPets);

module.exports = routes;

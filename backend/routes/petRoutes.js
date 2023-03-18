const express = require("express");
const { body, query } = require("express-validator");

const { getPets, addPet } = require("../controllers/petController");
const { uploadImages } = require("../controllers/fileUpload");

const routes = express.Router();

// Pet
routes.get("/", getPets);
routes.post("/upload", uploadImages);
routes.post("/addpet", addPet);

module.exports = routes;

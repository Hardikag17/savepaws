const express = require("express");
const { body, query } = require("express-validator");
const multer = require("multer");
const { getPets, addPet, viewPet } = require("../controllers/petController");
const { uploadImages } = require("../controllers/fileUpload");

const routes = express.Router();

// upload images to memoryStorage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Pet
routes.get("/", getPets);
routes.post("/addpet", addPet);

// AWS
routes.post("/upload", upload.array("files"), uploadImages);

module.exports = routes;

const express = require("express");
const { body, query } = require("express-validator");
const multer = require("multer");
const { getPets, addPet } = require("../controllers/petController");
const { uploadImages } = require("../controllers/fileUpload");

const routes = express.Router();

// upload images to diskStorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
});
var upload = multer({ storage: storage });

// Pet
routes.get("/", getPets);
routes.post("/upload", upload.array("files"), uploadImages);
routes.post("/addpet", addPet);

module.exports = routes;

const express = require("express");
const { body, query } = require("express-validator");
const { Register, Login } = require("../controllers/userRegister");
const multer = require("multer");

const routes = express.Router();

// upload Images to diskStorage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
// });
// var upload = multer({ storage: storage });

// Register & Login
routes.post("/login", Login);
routes.post("/register", Register);
routes.get("/:email/forgetpassword");

module.exports = routes;

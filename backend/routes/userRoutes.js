const express = require("express");
const { body } = require("express-validator");
const { Register, Login, Info } = require("../controllers/userRegister");
const auth = require("../middleware/auth");

const routes = express.Router();

// Register & Login
routes.post(
  "/login",
  body("email").isString().not().isEmpty(),
  body("password").isString().not().isEmpty(),
  Login
);
routes.post(
  "/register",
  body("name").isString().not().isEmpty(),
  body("email").isString().not().isEmpty(),
  body("password").isString().not().isEmpty(),
  Register
);
routes.get("/info", auth, Info);
routes.get("/:email/forgetpassword");

module.exports = routes;

const express = require("express");
const { body, query } = require("express-validator");
const { Register, Login } = require("../controllers/userRegister");

const routes = express.Router();

// Register & Login
routes.post("/login", Login);
routes.post("/register", Register);
routes.get("/:email/forgetpassword");

module.exports = routes;

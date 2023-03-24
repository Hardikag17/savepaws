const express = require("express");
const { body, query } = require("express-validator");
const routes = require("./petRoutes");
const {
  get,
  updateLikes,
  updateComments,
} = require("../controllers/socialController");

routes.get("/", get);
routes.post("/:petID/like", updateLikes);
routes.post("/:petID/comment", updateComments);
// const express = require("express");
// const { body, query } = require("express-validator");
// const routes = express.Router();

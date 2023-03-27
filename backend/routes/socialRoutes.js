const express = require("express");
const { body, query } = require("express-validator");
const routes = express.Router();
const {
  get,
  updateLikes,
  updateComments,
  updateSocial,
} = require("../controllers/socialController");

routes.get("/", get);
routes.post("/:PetID/like", updateLikes);
routes.post("/:PetID/comment", updateComments);
routes.post("/:PetID/social", updateSocial);

module.exports = routes;

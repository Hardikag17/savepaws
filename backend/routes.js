import { Router } from "express";
import { body, query } from "express-validator";
import { Register } from "./controllers/userRegister";
import multer from "multer";

// upload Images to diskStorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
});
var upload = multer({ storage: storage });

const routes = Router();

// Register/ Login
routes.post("/login", Register);

const { User } = require("../models/schemas/userSchema");
const uniqid = require("uniqid");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const userId = uniqid();

  // Check if user already exists, else create a account

  const count = await User.countDocuments({ email: email });

  if (count == 0) {
    const newuser = new User({
      userId,
      name,
      email,
      password,
    });

    newuser
      .save()
      .then(() => {
        res.status(200).send("successfully created your account");
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } else res.status(400).send("Already, a linked account with these details");
};

const Login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check if exists, else send an error
  const count = await User.countDocuments({ email: email, password: password });

  if (count == 1) res.send(`Validated user ${email}`);
  else res.send("User not found");
};

module.exports = { Register, Login };

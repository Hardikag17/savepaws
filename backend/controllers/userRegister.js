const { User } = require("../models/schemas/userSchema");
const uniqid = require("uniqid");

const Register = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const userId = uniqid();

  // Check if user already exists, else create a account

  User.findOne({ email: email })
    //if yes
    .then((found) => {
      if (found.password === password) {
        res.send("Already, a linked account with these details");
      }
    })
    //if not
    .catch((err) => {
      const newuser = new User({
        userId,
        name,
        email,
        password,
      });

      newuser
        .save()
        .then(() => {
          res.send("successfully created your account");
        })
        .catch((err) => {
          res.send(err);
        });
    });
};

const Login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check if exists, else send an error
  User.findOne({ email: email, password: password })
    //if yes
    .then((found) => {
      console.log("a");
      res.send(`Validated user ${found}`);
    })
    //if not
    .catch((err) => {
      console.log("b");
      res.send("User not found");
    });
};

module.exports = { Register, Login };

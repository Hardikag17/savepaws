const { User } = require("../models/schemas/userSchema");

const Register = (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Check if user already exists, else create a account

  User.findOne({ username: username }, function (err, found) {
    //if not
    if (err) {
      const newuser = new User({
        name,
        username,
        email,
        password,
      });

      newuser.save(function (err) {
        if (!err) {
          res.send("successfully created your account");
        } else {
          res.send(err);
        }
      });
    }
    //if yes
    else {
      console.log("Already, a linked account with these details:");
      if (found.password === req.body.password) {
        res.send("Already, a linked account with these details:");
      }
    }
  });
};

module.exports = { Register };

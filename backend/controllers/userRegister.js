const { User } = require("../models/schemas/userSchema");
const uniqid = require("uniqid");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../utils/nodemailer/nodemailer");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");

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

    const salt = await bcrypt.genSalt(10);
    newuser.password = await bcrypt.hash(password, salt);

    newuser
      .save()
      .then(() => {
        sendMail(req.body.email, req.body.name);
        res.status(200).send("successfully created your account");
      })
      .catch((err) => {
        res.status(400).send(err);
      });

    //   const payload = {
    //     user: {
    //       id: newuser.userId,
    //       name: newuser.name,
    //       email: newuser.email,
    //     },
    //   };

    //   jwt.sign(
    //     payload,
    //     process.env.JWT_SECRET,
    //     { expiresIn: "7 days" },
    //     (err, token) => {
    //       if (err) throw err;
    //       res.json({
    //         token,
    //         userId: newuser.userId,
    //         name: newuser.name,
    //         email: newuser.email,
    //       });
    //     }
    //   );
    // } else res.status(400).send("Already, a linked account with these details");
  }
};

const Login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Check if exists, else send an error
  const count = await User.countDocuments({ email: email });

  if (count == 1) {
    let response = await User.find({ email: email });
    // console.log("Response...", typeof response[0].password);
    const isMatch = await bcrypt.compare(password, response[0].password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Email or password incorrect" });
    }

    // sendMail(response[0].email, response[0].name);

    const payload = {
      user: {
        id: response[0].userId,
        name: response[0].name,
        email: response[0].email,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "30 days" },
      (err, token) => {
        if (err) throw err;
        res
          .cookie("accesstoken", token, {
            // sameSite: "strict",
            // path: "http://localhost:3000/",
            // domain: "http://localhost:3000/login",
            httpOnly: true,
          })
          .json({
            userId: response[0].userId,
            name: response[0].name,
            email: response[0].email,
          });
      }
    );

    // res.status(200).send(response[0].userId);
  } else res.send("User not found");
};

const Info = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { Register, Login, Info };

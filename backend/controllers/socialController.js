const { Pet } = require("../models/schemas/petSchema");
const { Social } = require("../models/schemas/socialSchema");
const { User } = require("../models/schemas/userSchema");

const get = async (req, res) => {};

const updateLikes = async (req, res) => {};

const updateComments = async (req, res) => {};

const updateSocial = async (req, res) => {
  const pid = req.body.SocialData.PetID;
  var user = await User.findOne({ userId: req.body.SocialData.author });
  var pet = await Pet.findOne({ PetID: pid });
  const newSocial = await Social.find({ petId: pid });
  var newS = {};
  // console.log(newSocial.likes.length);
  if (!newSocial) {
    console.log("IN 1st");
    newS = {
      petId: pid,
      likes: [req.body.SocialData.author],
      comments: req.body.SocialData.comment,
      author: user._id,
    };
  } else {
    console.log("IN 2nd");
    newS = {
      petId: pid,
      comments: req.body.SocialData.comment,
      author: user._id,
      likes: [
        ...newSocial[newSocial.length - 1].likes,
        req.body.SocialData.author,
      ],
    };
  }
  // console.log(newS.likes.length);
  // newSocial.likes.push(req.body.SocialData.author);
  const Activity = new Social(newS);
  pet.social.push(Activity);
  await Activity.save();
  await pet.save();
};

module.exports = { get, updateLikes, updateComments, updateSocial };

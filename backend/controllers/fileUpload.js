// Upload a bunch of images with a folder name to aws-s3
const AWS = require("aws-sdk");
const uniqid = require("uniqid");

const s3 = new AWS.S3({
  signatureVersion: "v4",
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: process.env.AWS_S3_REGION,
});

const uploadImages = async (req, res) => {
  let files = req.files;
  let petID = uniqid();
  console.log("files:", files);

  res.status(200).send(petID);
};

module.exports = { uploadImages };

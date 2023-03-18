// Upload a bunch of images with a folder name to aws-s3
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const uniqid = require("uniqid");

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

const uploadImages = async (req, res) => {
  let files = req.files;
  let petID = uniqid();

  for (var i = 0; i < files.length; i++) {
    let contentType = files[0].mimetype;

    if (contentType == "image/jpeg") extension = ".jpeg";
    if (contentType == "image/webp") extension = ".webp";
    if (contentType == "image/svg") extension = ".svg";
    if (contentType == "image/jpg") extension = ".jpg";
    if (contentType == "image/png") extension = ".png";

    const uploadCommand = new PutObjectCommand({
      Bucket: bucket,
      Key: `${petID}-${i}${extension}`,
      ContentType: contentType,
    });

    response = await s3Client.send(uploadCommand);
  }

  //  Public url to access aws-s3 uploads - aws-s3 Image url - s3.amazonaws.com/[BUCKET-NAME]/[FILE-NAME].[FILE-TYPE]

  res.status(200).send(petID);
};

module.exports = { uploadImages };

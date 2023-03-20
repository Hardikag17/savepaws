// Upload a bunch of images with a folder name to aws-s3
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
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
  let bucket = "paws-adoption";
  let contentType;
  if (files) {
    contentType = files[0].mimetype;
  }

  let buffers = [...files].map((element) => element.buffer);

  if (contentType == "image/jpeg") extension = ".jpeg";
  if (contentType == "image/webp") extension = ".webp";
  if (contentType == "image/svg") extension = ".svg";
  if (contentType == "image/jpg") extension = ".jpg";
  if (contentType == "image/png") extension = ".png";

  for (var i = 0; i < buffers.length; i++) {
    var response = await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: `${petID}-${i}${extension}`,
        Body: buffers[i],
        ContentType: contentType,
      })
    );
  }

  //  Public url to access aws-s3 uploads - aws-s3 Image url - s3.amazonaws.com/[BUCKET-NAME]/[FILE-NAME].[FILE-TYPE]

  res.status(200).send(petID);
};

module.exports = { uploadImages };

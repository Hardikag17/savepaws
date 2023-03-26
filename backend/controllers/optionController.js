const breedLabels = require("../dataset/breed_labels.json");

const getBreeds = async (req, res) => {
  res.send(breedLabels);
};

module.exports = { getBreeds };

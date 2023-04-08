const { Pet } = require("../models/schemas/petSchema");
//const testdata = require("../dataset/test.json");
const MiniSearch = require("minisearch");
const mongoose = require("mongoose");

const filterPets = async (pets, filterOptions) => {
  let res = pets;

  if (filterOptions.point) {
    const userlocation = {
      type: "Point",
      coordinates: [
        parseFloat(filterOptions.point.lat),
        parseFloat(filterOptions.point.long),
      ],
    };

    try {
      const result = await Pet.aggregate([
        {
          $geoNear: {
            near: userlocation,
            distanceField: "distance",
            maxDistance: 10000,
            spherical: true,
          },
        },
        {
          $sort: {
            distance: 1,
          },
        },
      ]);

      res = result;
    } catch (error) {
      console.log(error);
    }
  }

  if (filterOptions.minAge) {
    let minAge = filterOptions.minAge;
    res = res.filter((x) => x.Age > minAge);
  }

  if (filterOptions.maxAge) {
    let maxAge = filterOptions.maxAge;
    res = res.filter((x) => x.Age < maxAge);
  }

  if (filterOptions.gender) {
    let gender = filterOptions.gender;
    res = res.filter((x) => x.Gender === gender);
  }

  if (filterOptions.health) {
    let health = filterOptions.health;
    res = res.filter((x) => x.Health === health);
  }

  if (filterOptions.breed) {
    let breed = filterOptions.breed;
    res = res.filter((x) => x.Breed1.includes(breed));
  }

  return res;
};

const search = async (searchText, filterOptions, page, limit) => {
  let res;
  let skip = page * limit - limit;

  console.log(filterOptions);

  let Options = {
    Gender: filterOptions.gender,
    Health: filterOptions.health,
    Breed1: filterOptions.breed,
  };

  console.log("filterOptions:", Options);

  Object.keys(Options).forEach(
    (key) => Options[key] === null && delete Options[key]
  );

  console.log("filterOptions:", Options);

  if (searchText == "") {
    res = await Pet.find({
      ...Options,
    })
      .skip(skip)
      .limit(limit);
  } else {
    res = await Pet.find({
      $and: [
        { $text: { $search: searchText } },
        { Age: { $gte: filterOptions.minAge } },
        { Age: { $lte: filterOptions.maxAge } },
        { ...Options },
      ],
    })
      .skip(skip)
      .limit(limit);
  }
  return res;
};

module.exports = { search, filterPets };

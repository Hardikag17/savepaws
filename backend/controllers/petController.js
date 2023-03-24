const { Pet } = require("../models/schemas/petSchema");
const { Social } = require("../models/schemas/socialSchema");
const { filterPets, search } = require("../utils/search");

/**
 * Get all Pets along with their socials OR Get specific pet along with their social, includes filterOptions in request
 * @param search: string
 * @param filterOptions: FilterOptions
 * FilterOptions - [minAge, maxAge, gender, health, breed]
 */
const getPets = async (req, res) => {
  let searchText = req.query.searchText;
  let filterOptions = {
    minAge: null,
    maxAge: null,
    gender: null,
    health: null,
    breed: null,
  };

  if (req.query.minAge) {
    try {
      let age;
      age = parseInt(req.query.minAge);
      if (Number(age)) filterOptions.minAge = age;
    } catch (err) {
      console.log(err);
    }
  }
  if (req.query.maxAge) {
    try {
      let age;
      age = parseInt(req.query.maxAge);
      if (Number(age)) filterOptions.maxAge = age;
    } catch (err) {
      console.log(err);
    }
  }
  if (req.query.gender) {
    let gender;
    gender = req.query.gender;
    gender = gender.toUpperCase();

    if (gender === "MALE") gender = 1;
    else if (gender === "FEMALE") gender = 2;
    else gender = 3;

    filterOptions.gender = gender;
  }
  if (req.query.health) {
    let health;
    health = req.query.health;
    health = health.toUpperCase();

    console.log(health);

    if (health === "HEALTHY") health = 1;
    else if (health === "MINOR INJURY") health = 2;
    else if (health === "SERIOUS INJURY") health = 3;
    else health = 4;

    filterOptions.health = health;
  }
  if (req.query.breed) {
    let breed;
    breed = req.query.breed;
    breed = breed.toUpperCase();

    if (breed === "HUSKY") breed = 1;
    else breed = 2;

    filterOptions.breed = breed;
  }

  let response;
  if (searchText && searchText.trim() !== "") {
    response = await search(searchText, filterOptions);
  } else {
    response = await search("", filterOptions);
  }

  // Pagination
  let limit = parseInt(req.query.limit);
  if (!limit) {
    limit = 12;
  }

  let page = parseInt(req.query.page);
  if (!page) {
    page = 1;
  }

  const pageCount = Math.ceil(response.length / limit);

  if (page > pageCount) {
    page = pageCount;
  }

  response = response.slice(page * limit - limit, page * limit);

  console.log("response", response);

  return res.json({
    response: response,
  });
};

// Add Pet
const addPet = async (req, res) => {
  // console.log(req.body.data.name);
  const PetData = req.body.data;
  const name = PetData.name;
  const petID = PetData.petID;
  const rescuerID = PetData.rescuerID;
  const type = PetData.type;
  const age = PetData.age;
  const breed1 = PetData.breed;
  const gender = PetData.gender;
  const vaccinated = PetData.vaccinated;
  const sterilized = PetData.sterilized;
  const health = PetData.health;
  const state = PetData.state;
  const city = PetData.city;
  const pincode = PetData.pincode;
  const photoamt = PetData.photoamt;
  const descripton = PetData.descripton;
  const address = PetData.address;

  const newPet = new Pet({
    petID,
    rescuerID: "123",
    name,
    type,
    age,
    breed1,
    gender,
    vaccinated,
    sterilized,
    health,
    state,
    city,
    pincode,
    photoamt,
    descripton,
    address,
  });

  try {
    const response = await newPet.save();
    console.log(response);
  } catch (err) {
    res.send(err);
  }
};

const viewPet = async (req, res) => {
  const petId = req.params.petId;
  const pet = Pet.find({ petID: petId });
  console.log(pet);
};

// Update Pet
const updatePet = async (req, res) => {};

// Delete Pet
const deletePet = async (req, res) => {};

module.exports = { getPets, addPet, updatePet, deletePet, viewPet };

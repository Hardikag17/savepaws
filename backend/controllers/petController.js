const { Pet } = require("../models/schemas/petSchema");
const { Social } = require("../models/schemas/socialSchema");

const testdata = require("../dataset/test.json");

/**
 * Get all Pets along with their socials OR Get specific pet along with their social, includes filterOptions in request
 * @param search: string
 * @param filterOptions: FilterOptions
 * FilterOptions - []
 */
const getPets = async (req, res) => {};

// Add Pet
const addPet = async (req, res) => {};

// Update Pet
const updatePet = async (req, res) => {};

// Delete Pet
const deletePet = async (req, res) => {};

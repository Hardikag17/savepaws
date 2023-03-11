const testdata = require("../dataset/test.json");

const filterPets = async (filterOptions) => {};

const search = async (searchText, filterOptions) => {
  filterPets(filterOptions);

  // search logic
};

module.exports = { search, filterPets };

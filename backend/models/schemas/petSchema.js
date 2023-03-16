const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema({
  /*
  unique Id of the pet
  */
  petID: String,
  /*
  user Id of the rescuer
  */
  rescuerID: String,
  /*
  Can be left empty, If pet is not named
  */
  name: String,
  /*
  1 - Dog, 2- Cat, 3- Cow, 4- Others
  */
  type: {
    type: Number,
  },
  /*
  Age in months calcutated at the moment of pet enroll
  */
  age: Number,
  breed1: String,
  breed2: String,
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "NOT KNOWN"],
  },
  color1: String,
  color2: String,
  color3: String,
  vaccinated: {
    type: Number,
    enum: ["YES", "NO", "NOT SURE"],
    default: "NOT SURE",
  },
  sterilized: {
    type: Number,
    enum: ["YES", "NO", "NOT SURE"],
    default: "NOT SURE",
  },
  health: {
    type: String,
    enum: ["Healthy", "Minor Injury", "Serious Injury", "Not Specified"],
    default: "Not Specified",
  },
  state: String,
  city: String,
  descripton: {
    type: String,
    maxLength: 10000,
  },
  photoamt: {
    type: Number,
    max: 5,
    min: 1,
  },
  postedOn: Date,
  /*
  Adoption status
  */
  status: {
    type: Boolean,
    default: false,
  },
  //  purpose: "", Adoption OR Sell
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = { Pet };

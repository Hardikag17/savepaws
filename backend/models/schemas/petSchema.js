const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Social = require("./socialSchema");

const petSchema = new Schema(
  {
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
      enum: ["Male", "Female", "Not Known"],
    },
    color1: String,
    color2: String,
    color3: String,
    /**
     * 1 - YES, 2 - NO, 3 - NOT SURE
     */
    vaccinated: {
      type: Number,
    },
    sterilized: {
      type: Number,
    },
    health: {
      type: String,
      enum: ["Healthy", "Minor Injury", "Serious Injury", "Not Specified"],
      default: "Not Specified",
    },
    state: String,
    city: String,
    pincode: Number,
    descripton: {
      type: String,
      maxLength: 10000,
    },
    photoamt: {
      type: Number,
      max: 4,
      min: 1,
    },
    /*
  Adoption status
  */
    status: {
      type: Boolean,
      default: false,
    },

    social: [
      {
        type: Schema.Types.ObjectId,
        ref: "Social",
      },
    ],
    //  purpose: "", Adoption OR Sell
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = { Pet };

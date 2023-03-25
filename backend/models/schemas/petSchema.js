const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Social = require("./socialSchema");

const petSchema = new Schema(
  {
    /*
  unique Id of the pet
  */
    PetID: {
      type: String,
      required: true,
    },
    /*
  user Id of the rescuer
  */
    RescuerID: String,
    /*
  Can be left empty, If pet is not named
  */
    Name: String,
    /*
  1 - Dog, 2- Cat, 3- Cow, 4- Others
  */
    Type: {
      type: Number,
    },
    /*
  Age in months calcutated at the moment of pet enroll
  */
    Age: Number,
    Breed1: String,
    Breed2: String,
    Gender: {
      type: String,
      enum: ["Male", "Female", "Not Known"],
    },
    Color1: String,
    Color2: String,
    Color3: String,
    /**
     * 1 - YES, 2 - NO, 3 - NOT SURE
     */
    Vaccinated: {
      type: Number,
    },
    Sterilized: {
      type: Number,
    },
    Health: {
      type: String,
      enum: ["Healthy", "Minor Injury", "Serious Injury", "Not Specified"],
      default: "Not Specified",
    },
    State: String,
    City: String,
    Pincode: Number,
    Descripton: {
      type: String,
      maxLength: 10000,
    },
    PhotoAmt: {
      type: Number,
      max: 4,
      min: 1,
    },
    /*
  Adoption status
  */
    Status: {
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

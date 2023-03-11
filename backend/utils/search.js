const testdata = [
  {
    Type: 2,
    Name: "Dopey & Grey",
    Age: 8,
    Breed1: 266,
    Breed2: 266,
    Gender: 1,
    Color1: 2,
    Color2: 6,
    Color3: 7,
    Vaccinated: 1,
    Sterilized: 2,
    Health: 1,
    Fee: 0,
    State: 41326,
    RescuerID: "2ece3b2573dcdcebd774e635dca15fd9",
    Description:
      "Dopey Age: 8mths old Male One half of a pair, Dopey is the reserved one compared to his brother Grey. However, he loves to be petted and is active by nature. Loves to chase balls and plays with anything that is mobile. Favourite hobby: Watching TV near the TV screen. Grey Age: 8mths old Male The wonder twin - Grey and Dopey are very brotherly and protects each other. Grey is more dominant than Dopey as he is the elder one and he is very playful. Favourite hobby: Loves to sit by the door and look outside",
    PetID: "e2dfc2935",
    PhotoAmt: 2,
  },
  {
    Type: 2,
    Name: "Chi Chi",
    Age: 36,
    Breed1: 285,
    Breed2: 264,
    Gender: 2,
    Color1: 1,
    Color2: 4,
    Color3: 7,
    Vaccinated: 1,
    Sterilized: 1,
    Health: 2,
    Fee: 0,
    State: 41326,
    RescuerID: "2ece3b2573dcdcebd774e635dca15fd9",
    Description:
      "Please note that Chichi has been neutered, therefore cannot breed. ChiChi is a Persian with a difference : She is a silent cat. She loves to be petted but needs regular grooming and cleaning. She has a defective tearduct on the right eye that requires daily cleaning. She has been neutered and goes through vaccinated routine regularly. Favourite hobby: Loves to roam and enjoys outside scenery. Please email if interested, comments are harder to keep track of.",
    PetID: "f153b465f",
    PhotoAmt: 1,
  },
  {
    Type: 2,
    Name: "Sticky",
    Age: 2,
    Breed1: 265,
    Breed2: 0,
    Gender: 1,
    Color1: 6,
    Color2: 7,
    Color3: 0,
    Vaccinated: 1,
    Sterilized: 2,
    Health: 1,
    Fee: 200,
    State: 41326,
    RescuerID: "e59c106e9912fa30c898976278c2e834",
    Description:
      "Sticky, named such because of his tendency to stick to you for cuddles, was found with his two siblings on our campus. These cuties are looking for a nice home. The adoption fee is a deposit that we will hold onto until the kitty has been neutered. Alternatively, you could let us use the deposit to contact you and help you carry out the sterilization at the vet when it is time.. We are looking for cat loving and friendly adopters. If you're interested in this ball of fluff, please contact  +. Thank you. :)",
    PetID: "3c90f3f54",
    PhotoAmt: 4,
  },
  {
    Type: 1,
    Name: "Dannie & Kass [In Penang]",
    Age: 12,
    Breed1: 307,
    Breed2: 0,
    Gender: 2,
    Color1: 2,
    Color2: 5,
    Color3: 0,
    Vaccinated: 1,
    Sterilized: 1,
    Health: 1,
    Fee: 0,
    State: 41326,
    RescuerID: "e59c106e9912fa30c898976278c2e834",
    Description:
      "Dannie and Kass are mother and daughter. We encountered them a year ago at our campus where.. They made quite a lot of friends with the students. They are both extremely friendly Kass is the mother and is a very calm dog, whereas Dannie is a ball of energy.We know Dannie is about a year or so old. And Kass is 3-4 years old. After being on campus it was decided that these dogs were way too kind and nice to be strays. They will be very sweet pets for any lucky person who decides to adopt one or both of them.. They were placed in good care to be vaccinated, dewormed and sterilized, as well as be made % healthy so that they can be adopted into a good home. Now that time has come, to the dismay of those that have taken so good care of them. They will be missed. If you adopt these dogs, then prepare to keep us updated on their well-being for at least a little while so we know they are being looked after. Looking forward to hearing from any interested in adopting these beauties. You may contact me (Paul) for information. But the adoption is handled by Dulani and Vinuri if you are interested to adopt.",
    PetID: "e02abc8a3",
    PhotoAmt: 5,
  },
  {
    Type: 2,
    Name: "Cuddles",
    Age: 12,
    Breed1: 265,
    Breed2: 0,
    Gender: 1,
    Color1: 2,
    Color2: 3,
    Color3: 7,
    Vaccinated: 1,
    Sterilized: 1,
    Health: 1,
    Fee: 0,
    State: 41326,
    RescuerID: "e59c106e9912fa30c898976278c2e834",
    Description:
      "Extremely cuddly cat, hence the origin of his name. We found him very sick outside in Kajang and brought him to the vet.. Now that he is healthy, we want him to have a good home with a loving family. If you are interested in cuddles, please contact me.",
    PetID: "09f0df7d1",
    PhotoAmt: 5,
  },
  {
    Type: 2,
    Name: "Porridge",
    Age: 4,
    Breed1: 265,
    Breed2: 0,
    Gender: 1,
    Color1: 6,
    Color2: 7,
    Color3: 0,
    Vaccinated: 1,
    Sterilized: 2,
    Health: 1,
    Fee: 0,
    State: 41326,
    RescuerID: "e59c106e9912fa30c898976278c2e834",
    Description:
      "Porridge the cat is looking for a place to call home. He has a vast amount of affection that needs venting and returned.. If you want a cat to love while having the love returned, this is the cat you want. We will ask for a deposit to ensure you will complete certain procedures for Porridge.The money will be returned once completed.. If you're interested in adopting Porridge then please contact me on my number found on the profile to find out more information, or go directly to the one in charge of the adoption Dulani.",
    PetID: "0487529d4",
    PhotoAmt: 3,
  },
  {
    Type: 2,
    Name: "Sultan [In Shah Alam]",
    Age: 24,
    Breed1: 265,
    Breed2: 0,
    Gender: 1,
    Color1: 6,
    Color2: 7,
    Color3: 0,
    Vaccinated: 1,
    Sterilized: 1,
    Health: 1,
    Fee: 0,
    State: 41326,
    RescuerID: "e59c106e9912fa30c898976278c2e834",
    Description:
      "We first met Sultan on our campus hiding from everyone looking for scraps of food wherever he could find it. He was very shy., a.nd angry if you tried to approach.. However, he warmed up to people within just a couple of days of feeding him and giving him some long overdue affection.. He is now completely tame and loving.Sultan is a gorgeous and loving cat that has recently been rescued. He was taken to the veterinarian where he was diagnosed with FeLV ( Feline Leukemia Virus). A viral disease that makes him more susceptible to infections. Due to this, this man needs to be on a tight leash as infected sores and wounds could take longer to heal. It is not lethal by itself and cats with this condition are able to live healthy lives with. some extra care (mostly keeping him away from other cats who could potentially give him an infection). Sultan is a strong cat and is in a state of fast recovery. He is quite social that welcomes petting sessions. He has a big appetite and enjoys playing with headphone wires. If he becomes ill, because of his condition he will need antibiotics as he cannot fight infections well himself. If you are interested in adopting Sultan, contact Fatma at + , by whatsapp, call or message.",
    PetID: "bae7c4b1c",
    PhotoAmt: 2,
  },
  {
    Type: 2,
    Name: "The Four Musketeers (one)",
    Age: 1,
    Breed1: 265,
    Breed2: 0,
    Gender: 1,
    Color1: 1,
    Color2: 6,
    Color3: 7,
    Vaccinated: 2,
    Sterilized: 2,
    Health: 1,
    Fee: 0,
    State: 41326,
    RescuerID: "e59c106e9912fa30c898976278c2e834",
    Description:
      "These 4 darlings were found on our university campus, Selangor, Semenyih. The mother is a well-known cat that everyone looks after and she gave birth to 4 adorable and friendly balls of fluff. We want them to have good homes, and we prefer them to be sent out in pairs of 2 as they are very playful together. They are all male and very used to cuddles..... . If you choose to adopt, you are expected to have them vaccinated and sterilized when they are old enough. We do want updates every now and then to make sure they are being well cared for and that they're happy in their new home. At the moment they are being cared for by our animal welfare society and are being kept with their freelancing mother. But they need a home soon. You may contact  + or  + if you are interested to adopt. You may also contact  + or  + if you just want some more information. We look forward to hear from you. EDIT: 2 of them got adopted as a pair, there are 2 left. These 2 also would prefer to stay together. EDIT 3: PLEASE NOTE WE WILL BE ASKING FOR A DEPOSIT OF RM SO THAT WE CAN ENSURE THE CAT WILL BE VACCINATED AND NEUTERED WHEN IT IS DUE.",
    PetID: "548bcf206",
    PhotoAmt: 3,
  },
  {
    Type: 2,
    Name: "Timmy And Boboy",
    Age: 7,
    Breed1: 247,
    Breed2: 266,
    Gender: 3,
    Color1: 2,
    Color2: 4,
    Color3: 5,
    Vaccinated: 1,
    Sterilized: 1,
    Health: 1,
    Fee: 0,
    State: 41326,
    RescuerID: "df3f86a2d783512e0d863a47c55a86b7",
    Description:
      "Saya ada 2 ekor kitten untuk diberi secara PERCUMA. Semua kitten dah vaksin & deworm. Umur = 7 Bulan Jantan = 2 Ekor (Dah dimandulkan) Lokasi = Puchong Perdana Prefer untuk let go kedua2 sekali coz kitten2 nie tak pernah berpisah. Sesiapa yang berminat, boleh hubungi saya di talian 3 .",
    PetID: "0f82cea1e",
    PhotoAmt: 2,
  },
];

// var testdata = require("../dataset/test.json");
//var v = Object.entries(testdata);

const MiniSearch = require("minisearch");

let miniSearch = new MiniSearch({
  idField: "PetID",
  fields: ["Name"], // fields to index for full-text search
  storeFields: [
    "PetID",
    "Name",
    "Description",
    "Age",
    "Health",
    "RescuerID",
    "Gender",
    "Breed",
    "Color1",
  ], // fields to return with search results
  searchOptions: { prefix: true },
});
miniSearch.addAll(testdata);

const filterPets = async (pets, filterOptions) => {
  let res = pets;

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

const search = async (searchText, filterOptions) => {
  let res;
  if (searchText == "") res = testdata;
  else res = miniSearch.search(searchText);

  if (filterOptions) {
    res = filterPets(res, filterOptions);
  }
  return res;
};

module.exports = { search, filterPets };

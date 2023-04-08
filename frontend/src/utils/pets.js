import axios from "axios";
import { API_ROOT } from "../api-config";

export const getPetByPetID = async (PetID) => {
  try {
    let response = await axios.get(`${API_ROOT}/pets/pet/${PetID}`);
    response = await response.data.response;
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getPetByUserID = async (UserID) => {
  try {
    let res = await axios.get(`${API_ROOT}/pets/user/${UserID}`);
  } catch (err) {
    console.log(err);
  }
};

export const adoptPet = async (pet, UserID) => {
  const res = await axios.post(`${API_ROOT}/pets/adopt`, {
    PetID: pet.PetID,
    UserID: UserID,
    RescuerID: pet.RescuerID,
  });

  if (res.data.status === "failed") return false;
  else return true;
};

// export const getPets = async (options) => {
//   let filter = options.filter;
//   let page = options.page;

//   var url = `${API_ROOT}/pets?page=${page}&&minAge=${filter.minAge}&&maxAge=${filter.maxAge}`;
//   if (filter.gender > 0) {
//     url += `&&gender=${filter.gender}`;
//   }

//   if (filter.breed > 0) {
//     url += `&&breed=${filter.breed}`;
//   }

//   if (filter.health > 0) {
//     url += `&&health=${filter.health}`;
//   }

//   console.log("url:", url);

//   try {
//     let res = await axios.get(url);
//     return res.data.response;
//   } catch (err) {
//     console.log(err);
//   }
// };

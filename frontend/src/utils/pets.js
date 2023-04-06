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

export const getPets = async (page, url) => {
  console.log("getPets:", page, url);
  try {
    let res = await axios.get(`${API_ROOT}/pets?page=${page}${url}`);
    return res.data.response;
  } catch (err) {
    console.log(err);
  }
};

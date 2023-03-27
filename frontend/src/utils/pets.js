import axios from "axios";
import { API_ROOT } from "../api-config";

export const getPets = async (page) => {
  try {
    let res = await axios.get(`${API_ROOT}/pets?page=${page}`);
    return res.data.response;
  } catch (err) {
    console.log(err);
  }
};

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

export const adoptPet = async () => {};

import axios from "axios";
import { API_ROOT } from "../api-config";

// User requested pet
export const getRequestByUserID = async (UserID) => {
  let data;
  try {
    await axios
      .get(`${API_ROOT}/pets/requests/user/${UserID}`)
      .then(async (response) => {
        let res = await getRequestsByPetID(response.data.PetID);
        data = await res.data.Pet;
      });
    return { data };
  } catch (err) {
    console.log(err);
  }
};

const getRequestsByPetID = async (PetID) => {
  try {
    let res = await axios.get(`${API_ROOT}/pets/requests/pet/${PetID}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// // User rescued pet requests
// export const getRequestsByRescuerID = async (RescuerID) => {
//   try {
//     let res = await axios.get(`${API_ROOT}/pets/requests/rescuer/${RescuerID}`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const requestPet = async () => {};

// export const deleteRequest = async () => {};

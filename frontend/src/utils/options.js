import { API_ROOT } from "../api-config";
import axios from "axios";

export const getBreedOptions = async () => {
  try {
    let breedOptions = [];
    const res = await axios.get(`${API_ROOT}/options/breeds`);

    res.data.forEach((element) => {
      const obj = {};
      obj.label = element.BreedID;
      obj.value = element.BreedName;
      breedOptions.push(obj);
    });

    return breedOptions;
  } catch (err) {
    console.log(err);
  }
};

// export { getBreedOptions };

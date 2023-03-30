import axios from "axios";
import { API_ROOT } from "../api-config";

export const getSessionStotage = (key) => {
  let initialValue = {
    user: false,
    userID: "",
    email: "",
    name: "",
    token: false,
    overlay: false,
  };
  try {
    const value = sessionStorage.getItem(key);
    if (value) return JSON.parse(value);
    try {
      let res = axios.get(`${API_ROOT}/user/info`, { withCredentials: true });

      console.log("status:", res);
    } catch (err) {
      return initialValue;
    }
  } catch (e) {
    // if error, return initial structural value
    return initialValue;
  }
};

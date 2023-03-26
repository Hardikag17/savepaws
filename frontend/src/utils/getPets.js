import axios from "axios";

export const getPets = async (page) => {
  const res = await axios.get(`http://localhost:9000/pets?page=${page}`);
  return res.data.response;
};

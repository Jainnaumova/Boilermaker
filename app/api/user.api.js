import axios from "axios";

export const fetchAllUsers = () => {
  return axios.get("/api/users").then(res => res.data);
};

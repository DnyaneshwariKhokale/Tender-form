import axios from "axios";

const API = axios.create({
  baseURL: "https://tender-form-3.onrender.com/api",
});

export default API;

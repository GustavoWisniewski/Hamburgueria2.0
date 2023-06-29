import axios from "axios";
const baseURL = "https://hamburgueria-kenzie-v2.herokuapp.com";
export const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

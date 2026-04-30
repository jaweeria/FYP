import axios from "axios";
import { endpoints } from "./endpoints";
export const api = axios.create({
  baseURL: endpoints.baseURL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

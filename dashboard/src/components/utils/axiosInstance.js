import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3002/dashboard",
  withCredentials: true,
});

export const axiosAuthInstance = axios.create({
  baseURL: "http://localhost:3002/auth",
  withCredentials: true,
});

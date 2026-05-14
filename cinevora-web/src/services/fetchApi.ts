import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchApi = axios.create({
  baseURL: API_URL,
});

fetchApi.interceptors.request.use((config) => {
  if (typeof window === "undefined") return config;

  const adminStorage = localStorage.getItem("admin-storage");

  if (adminStorage) {
    const parsed = JSON.parse(adminStorage);
    const token = parsed?.state?.adminAuthentication?.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

fetchApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 400) {
      return Promise.reject(error);
    }

    if (status === 401) {
      return Promise.reject(new Error("Unauthorized"));
    }

    if (status === 500) {
      return Promise.reject(new Error("Server error"));
    }

    return Promise.reject(error);
  },
);

export default fetchApi;
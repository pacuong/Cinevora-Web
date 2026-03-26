import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchApi = axios.create({
  baseURL: API_URL,
});
fetchApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 400) {
      return Promise.reject(new Error("Bad request"));
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

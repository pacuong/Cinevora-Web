import axios from "axios";
import { useAuthSlice } from "../stores/useAuth";
import { useAdminAuthSlice } from "../stores/useAdminAuth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

fetchApi.interceptors.request.use((config) => {
  const token =
    useAdminAuthSlice.getState().adminAuthentication?.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

fetchApi.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await fetchApi.post(
          "/auth/refresh",
          {},
          { withCredentials: true },
        );

        const newAccessToken = response.data.accessToken;

        useAuthSlice.getState().setAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return fetchApi(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    if (status === 500) {
      return Promise.reject(new Error("Server error"));
    }

    return Promise.reject(error);
  },
);

export default fetchApi;

import axios from "axios";
import { API_BASE_URL } from "@/constants/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network errors are expected when the backend is not running yet — don't spam the console.
    const isNetworkError =
      error.code === "ERR_NETWORK" ||
      error.message === "Network Error" ||
      !error.response;

    if (!isNetworkError && process.env.NODE_ENV === "development") {
      console.warn("API Error:", error.response?.data || error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;

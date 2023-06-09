import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authToken = JSON.parse(localStorage.getItem("auth")!);    
    const newConfig = config;
    if (authToken) {
      newConfig.headers!.Authorization = `Bearer ${authToken}`;
    }
    return newConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const setAuthToken = (token: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default api;

import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

export const authApi = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

const token = localStorage.getItem('token');

const addToken = (config: AxiosRequestConfig) => {
    if (config.headers) {
        config.headers.Authorization = `${token}`;
    } else {
        config.headers = { Authorization: `${token}` };
    }
};

authApi.interceptors.request.use(
    (config) => {
      if (token) {
        addToken(config);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

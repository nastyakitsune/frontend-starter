import axios from "axios";
import { apiHeaders, apiUrl } from "../config/api";

const api = axios.create({
  baseURL: apiUrl,
  headers: apiHeaders,
  timeout: 30000
});

const authApi = axios.create({
  baseURL: apiUrl,
  headers: apiHeaders,
  timeout: 30000
});

api.interceptors.request.use(
  async request => {
    // getting token from local storage
    let token = "";
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
      return request;
    } else {
      throw new Error("no token");
    }
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  async error => {
    if (
      error.response &&
      error.response.data.errors.code === "AuthenticationError"
    ) {
      const request = error.config;
      try {
        // getting refresh token from local storage
        const refresh = "";
        if (!refresh) {
          throw new Error("no refresh token");
        }
        const {
          data: { jwt, refresh_token }
        } = await api.post("/auth/refresh_token", {
          refresh_token: refresh
        });
        if (jwt) {
          // set jwt token to local storage
        }
        if (refresh_token) {
          // set refresh token to local storage
        }
        request.headers.Authorization = `Bearer ${jwt}`;

        return api(request);
      } catch (e) {
        return Promise.reject(e);
      }
    }
    return Promise.reject(error);
  }
);

export { api, authApi };

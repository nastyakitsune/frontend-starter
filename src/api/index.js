import { api, authApi } from "./instances";

export default {
  login: payload => authApi.post(`/auth/login`, payload),
  logout: () => api.delete(`/auth/logout`),
  getData: () => api.get(`/data`),
  getDataByQuery: ({ query }) => api.get(`/data?query=${query}`),
  updateData: payload => api.post(`/data`, payload),
  patchData: payload => api.patch(`/data`, payload),
  patchDataById: ({ data, id }) => api.patch(`/data?id=${id}`, data)
};

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const privateInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

privateInstance.interceptors.request.use(
  (config) => {
    // const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }

    return config;
  },
  async (error) => Promise.reject(error)
);

privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // const originalReq = error.config;
    // if (error.response.status === 401) {
    //   const { data } = await privateInstance.get('/auth/refresh-token');
    //   localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
    //   return privateInstance(originalReq);
    // }

    return Promise.reject(error);
  }
);

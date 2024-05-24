// src/api/config.js
import axios from 'axios';
import store from '../redux/store';
import { apiLoading, logAPIError } from '../redux/reducers/commonSlice';

const axiosInstance = axios.create({
  baseURL: '',
});

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(apiLoading(true));
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    store.dispatch(logAPIError(`Request error: ${error.message}`));
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(apiLoading(false));
    return response;
  },
  (error) => {
    store.dispatch(apiLoading(false));
    // Handle common errors
    if (error.response.status === 401) {
      // Redirect to login or do something else
    }

    store.dispatch(logAPIError(`Response error: ${error.message}`));
    return Promise.reject(error.message);
  },
);

export default axiosInstance;

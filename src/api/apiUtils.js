import axiosInstance from './axiosInstance'; // Ensure axiosInstance is correctly configured

export const getData = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const postData = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const patchData = async (url, data) => {
  try {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

import axios from 'axios'
import authHeader from './authHeader';
export const getApi = async (url, auth) => {
  try {
    const response = await axios.get(url, auth ? authHeader() : {});
    return response.data;
  } catch (error) {
    return error;

  }
}

export const postApi = async (url, data, auth = false) => {
  try {
    const response = await axios.post(url, data, auth ? authHeader() : {});
    return response.data;
  } catch (error) {
    return error;
  }
}
export const deleteApi = async (url, auth = false) => {
  try {
    const response = await axios.delete(url, auth ? authHeader() : {});
    return response.data;
  } catch (error) {
    return error;

  }
}

const showError = error => {
  console.log(error);
}
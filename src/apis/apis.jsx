import axios from 'axios'
import basicAuth from './basicAuth';
export const getApi = async (url, auth) => {
  try {
    const response = await axios.get(url, {
      auth: {
        username: 'devs.creativecode',
        password: 'vTJD FJqB DtME 9QqQ sV9K XSsV'
      }
    });
    return response.data;
  } catch (error) {
    return error;

  }
}

export const postApi = async (url, data) => {

  let wpData = {
    acf: data,
    title: data.name,
    status: 'publish',
    visibility: 'private'
  }

  try {
    const response = await axios.post(url, wpData, {
      auth: {
        username: 'devs.creativecode',
        password: 'vTJD FJqB DtME 9QqQ sV9K XSsV'
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
export const deleteApi = async (url) => {
  try {
    const response = await axios.delete(url, {
      auth: {
        username: 'devs.creativecode',
        password: 'vTJD FJqB DtME 9QqQ sV9K XSsV'
      }
    });
    return response.data;
  } catch (error) {
    return error;

  }
}

const showError = error => {
  console.log(error);
}
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

export const postApi = async (url, data, file) => {

  let wpData = {
    acf: data,
    title: data.name,
    status: 'publish',
    visibility: 'private'
  }

  let formData = new FormData();
  let driveFile = data.driveFile;
  formData.append( 'file', file );
  formData.append( 'title', `Arquivo ${data.name}` );
  formData.append( 'caption', `Arquivo ${data.name}` );

  try {

    const responseMedia = await axios.post('https://agavecasa.com.br/wp-json/wp/v2/media/', formData, {

      auth: {
        username: 'devs.creativecode',
        password: 'vTJD FJqB DtME 9QqQ sV9K XSsV'
      },

      headers: {
        'Content-Type': 'multipart/form-data'
      }
      
    });

    // Associa o id do arquivo (upload via rest api) com o campo "driveFile" da inscrição
    wpData.acf['driveFile'] = responseMedia.data.id;

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
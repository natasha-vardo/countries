import axios from 'axios';
import api from '../config/api';

/**
 * Request Wrapper with default success/error action-creators
 */
export const request = (options, withAuth = false) => {
  const onSuccess = response => {
    // checkAuthPayload(response);

    return response.data;
  };

  const onError = error => {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    throw error.response || new Error(error.message);
  };

  // Create an Axios Client with defaults
  const client = axios.create({
    baseURL: api.url,
  });

  return client({
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
    .then(onSuccess)
    .catch(onError);
};

export default {
  request,
};

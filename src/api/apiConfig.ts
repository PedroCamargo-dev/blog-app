import axios from 'axios';

const apiConfig = {
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(apiConfig);

export default instance;
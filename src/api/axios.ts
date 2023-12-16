import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API;

const baseConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosFn = axios.create(baseConfig);

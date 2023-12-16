import axios from 'axios';

const baseConfig = {
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosFn = axios.create(baseConfig);

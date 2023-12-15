import axios from 'axios';

import.meta.env.VITE_API_LOCALHOST;
import.meta.env.VITE_API_PROD;

const BASE_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_PROD
  : import.meta.env.VITE_API_LOCALHOST;

const baseConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosFn = axios.create(baseConfig);

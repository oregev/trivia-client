import axios from 'axios';

const BASE_URL = 'https://trivia-api-nine.vercel.app/';

const baseConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosFn = axios.create(baseConfig);

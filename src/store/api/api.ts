import axios from 'axios';

const API = axios.create({
  baseURL: 'https://sua-url-base.com/api',
});

export default API;
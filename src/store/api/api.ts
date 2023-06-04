import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api-login.up.railway.app/',
});

export default API;
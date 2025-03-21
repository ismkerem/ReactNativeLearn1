import axios from 'axios';

export const apiGet = axios.create({
  method: 'get',
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});

export const apiPost = axios.create({
  method: 'post',
  baseURL: 'https://some-domain.com/api/',
  timeout: 5000,
});

import axios from 'axios';

const baseURL = 'http://localhost:7000/'|| import.meta.env.VITE_API_URL;
console.log(baseURL)
const $host = axios.create({
  baseURL,
});

const $authHost = axios.create({
  baseURL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
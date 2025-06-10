import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

// Add interceptor to attach JWT token
// api.interceptors.request.use(
//   async (config) => {
//     return null
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api;

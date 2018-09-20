import axios from 'axios';

// Add authorization token if present, to every request
axios.interceptors.request.use(config => {
  let token = localStorage['authToken'];
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
});

export default axios;

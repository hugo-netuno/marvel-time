const axios = require('axios');

// const API_URL = 'http://localhost:3001';

function apiLogin(
  displayName,
  password,
  ) {
  return axios
    .post(`${API_URL}/login`, {
      displayName,
      password,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
export {
  apiLogin,
};
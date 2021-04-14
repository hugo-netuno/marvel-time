const axios = require('axios');

const API_URL = 'https://marvel-time.herokuapp.com';

function apiLogin(
  displayName,
  password,
  ) {
    console.log(displayName);
    console.log(password);
  return axios
    .post(`${API_URL}/login`, {
      displayName,
      password,
    })
    .then((res) => res.data)
    .catch((err) => console.log('bad?', err));
}
export {
  apiLogin,
};
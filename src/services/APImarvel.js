const axios = require('axios');
const md5 = require('md5');
const dotenv = require('dotenv').config();

const API_URL = 'http://gateway.marvel.com/v1/public';
const API_PUBLIC_KEY = 'cb183e45d5e03ab355243cad123f6443';

const displayFunction = (myObj) => {
  console.log(myObj);
}

function apiGetComics() {
  const ts = Date.now().toString();
  
  console.log('ts', ts);
  console.log('key', process.env.API_PRIVATE_KEY);
  console.log('env', process.env);
  console.log('r', dotenv);

  return axios
  .post(`${API_URL}/comics`, null, { params: {
      apikey: API_PUBLIC_KEY,
      ts: ts,
      hash: md5(ts + process.env.API_PRIVATE_KEY + API_PUBLIC_KEY),
      limit: 10,
      callback: displayFunction,
    }})
    .then((res) => res.data)
    .catch((error) => {
      if (error.response) {

        console.log(error.response);
        alert(error.response);

      } else if (error.request) {

        console.log(error.request);
        alert(error.request);

      } else if (error.message) {

        console.log(error.message);
        alert(error.message);

      }
    });
}

export {
  apiGetComics,
};

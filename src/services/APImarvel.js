const axios = require('axios');

const API_URL = 'https://marvel-time.herokuapp.com';

function apiLogin(
  displayName,
  password,
  ) {
    console.log(typeof displayName);
    console.log(password);
  return axios
    .post(`${API_URL}/login`, {
      displayName,
      password,
    })
    .then((res) => res.data)
    .catch((error) => {
      if (error.response){

        console.log(error.response);
        
        }else if(error.request){
        
          console.log(error.request);
        
        }else if(error.message){
        
          console.log(error.message);
        
        }
    });
}
export {
  apiLogin,
};
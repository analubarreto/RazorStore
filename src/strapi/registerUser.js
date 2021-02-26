import axios from 'axios';
import url from './URL';

async function registerUser({email, password, username}) {
  const response = await axios.post(`${url}/auth/local/register`, {
    username,
    email,
    password
  }).catch(err => {
    console.log(email, password, username)
    console.log(err);
  })
  if (response) {
    // setup user
  }
  return response;
}

export default registerUser
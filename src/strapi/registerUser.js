import axios from 'axios';
import url from './URL';
import setupUser from './setupUser';

async function registerUser({email, password, username}) {
  const response = await axios.post(`${url}/auth/local/register`, {
    username,
    email,
    password
  }).catch(err => {
    console.log(err);
  })
  if (response) {
    setupUser(response)
  }
  return response;
}

export default registerUser
import axios from 'axios';
import url from './URL';

async function submitOrder({ address, total, items, stripeTokenId, userToken }) {
  const response = await axios.post(`${url}/orders`, { address, total, items, stripeTokenId }, {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  }).catch(err => {
    console.log(err);
  })
  return response;
}

export default submitOrder;
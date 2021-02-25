import url from './URL';

export default async () => {
  const response = await fetch(`${url}/products`).catch(err => {
    console.log(err)
  });
  const products = await response.json();
  if (products.error) {
    return null
  }
  return products;
}
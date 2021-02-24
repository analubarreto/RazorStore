import { writable, derived } from 'svelte/store';
import localCart from '../localCart';

// cart
const cartStore = writable([...localCart]);

// cart total
export const storeTotal = derived(cartStore, ($cart) => {
  let total = $cart.reduce((acc, curr) => {
		return (acc += curr.amount * curr.price);
  }, 0);
  return total.toFixed(2);
});
// local functions
// global functions
// local storage

export default cartStore;
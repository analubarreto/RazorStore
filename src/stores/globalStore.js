import { writable } from 'svelte/store';

const sidebar = writable({
  sidebar: false,
  cart: true,
  alert: false
});

const globalStore = {
  subscribe: sidebar.subscribe,
  toggleItem: (item, value) => {
    sidebar.update(storeValues => {
      return {...storeValues, [item]:value}
    })
  }
}

export default globalStore;
import { writable } from 'svelte/store';

const store = writable({
  sidebar: false,
  cart: false,
  alert: false,
  alertText: 'default alert',
  alertDanger: false
});

const globalStore = {
  subscribe: store.subscribe,
  toggleItem: (item, value, alertText = 'default', alertDanger = false) => {
    if (item === 'alert') {
      store.update(storeValures => {
        return {...storeValures, [item]:value, alertText, alertDanger}
      })
    } else {
      store.update(storeValues => {
        return {...storeValues, [item]:value}
      })
    }
  }
}

export default globalStore;
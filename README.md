## Razor Store

This is an app made with [Svelte Tutorial and Projects Course](https://www.udemy.com/course/svelte-tutorial-and-projects-course/) by John Smilga.

Why am I doing another Svelte Course? To get the itty details about the framework I seem to have missed in the first course without having too much trouble.

Ps:. I didn't make the design, just toggled around a bit.

### What I learned with this project:

- How to properly use `<Svelte: something />` properties
- How to use derived stores
- How to set ES6 [dynamic properties](https://www.samanthaming.com/tidbits/37-dynamic-property-name-with-es6/#the-3-ways-to-access-the-object-value)
- How to make better reusable functions:

```
  toggleItem: (item, value) => {
    sidebar.update(storeValues => {
      return {...storeValues, [item]:value}
    })
  }
```

- How to implement Stripe payment method to Strapi
- How to properly use Svelte animations

### How to run

!!!
WARNINGS: <br>
1. For now most functionalities won't work because I don't have the strapi CMS in a internet Server and for security sake (even if this is a pet project) I'm not going to put the CMS code as open source.
2. If you want to test here the payment you'll need a stripe account to get your own API key. After getting one you should add a file named stripeKey.js in the constants folder and add your key to it as a default export.
!!!

1. Clone repo

```
git clone git@github.com:analubarreto/RazorStore.git
```

or, without an ssh-key

```
git clone https://github.com/analubarreto/RazorStore.git
```

2. Cd into folder
3. Install dependencies

```
npm i
```

4. Run project

```
npm run dev
```

5. Open browser in locahost:5000/

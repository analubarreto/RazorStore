## Razor Store

This is an app made with [Svelte Tutorial and Projects Course](https://www.udemy.com/course/svelte-tutorial-and-projects-course/) by John Smilga.

Why am I doing another Svelte Course? To get the itty details about the framework I seem to have missed in the first course without having too much trouble.

Ps:. I didn't make the design, so it's not pretty (not by my standards at least), but it works quite nicely.

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

1. Clone repo

```
git clone git@github.com:analubarreto/budget-calculator.git
```

or, without an ssh-key

```
git clone https://github.com/analubarreto/budget-calculator.git
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

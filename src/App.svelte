<script>
	// Imports - Pages
	import Home from './router/Home.svelte';
	import About from './router/About.svelte';
	import Checkout from './router/Checkout.svelte';
	import Login from './router/Login.svelte';
	import Products from './router/Products.svelte';
	import ProductTemplate from './router/ProductTemplate.svelte';

	// Imports - Router
	import { Router, Route, Link } from 'svelte-routing';
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/products">Products</Link>
	</nav>
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/login" component={Login} />
	<Route path="/products" component={Products} />
	<Route path="/products/:id" component={ProductTemplate} />
</Router>

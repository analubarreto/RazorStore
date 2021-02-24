<script>
	// Imports - Pages
	import Home from './router/Home.svelte';
	import About from './router/About.svelte';
	import Checkout from './router/Checkout.svelte';
	import Login from './router/Login.svelte';
	import Products from './router/Products.svelte';
	import ProductTemplate from './router/ProductTemplate.svelte';

	// Imports - Components
	import Navbar from './components/navbar/Navbar.svelte';
	import Sidebar from './components/navbar/Sidebar.svelte';
	import Cart from './components/cart/Cart.svelte';

	// Imports - Stores
	import globalStore from './stores/globalStore';

	// Imports - Router
	import { Router, Route } from 'svelte-routing';
</script>

<Router>
	<Navbar />
	{#if $globalStore.sidebar}
		<Sidebar />
	{/if}
	{#if $globalStore.cart}
		<Cart />
	{/if}
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/login" component={Login} />
	<Route path="/products" component={Products} />
	<Route path="/products/:id" component={ProductTemplate} />
</Router>

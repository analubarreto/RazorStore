<script>
	// cart button
	import CartButton from '../cart/CartButton.svelte';
	// global store
	import { Link } from 'svelte-routing';
</script>

<nav class="navbar">
	<div class="nav-center">
		<!-- sidebar toggle -->
		<button class="btn-sidebar-toggle">
			<i class="fas fa-bars" />
		</button>
		<!-- logo -->
		<Link to="/" class="nav-logo">
			<img src="/assets/images/logo.svg" class="logo" alt="razors logo" />
		</Link>
		<!-- cart button -->
		<CartButton />
	</div>
</nav>

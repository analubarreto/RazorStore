<script>
	// cart button
	import CartButton from '../cart/CartButton.svelte';
	// global store
	import { Link } from 'svelte-routing';
	import globalStore from '../../stores/globalStore';

	let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar">
	<div class="nav-center">
		<!-- sidebar toggle -->
		<button
			class="btn-sidebar-toggle"
			on:click={() => openSidebar('sidebar', true)}
		>
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

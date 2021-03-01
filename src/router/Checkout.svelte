<script>
	import { onMount } from 'svelte';
	import { navigate, Link } from 'svelte-routing';
	import user from '../stores/user';
	import { cartTotal } from '../stores/cartStore';

	onMount(() => {
		if (!$user.jwt) {
			navigate('/');
		}
	});
</script>

{#if $cartTotal > 0}
	<h1>form</h1>
{:else}
	<div class="checkout-empty">
		<h2>Your cart is empty</h2>
		<Link to="/products" class="btn btn-primary">Fill it</Link>
	</div>
{/if}

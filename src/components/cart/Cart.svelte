<script>
	import globalStore from '../../stores/globalStore';
	import { fly, fade, blur } from 'svelte/transition';
	import { Link } from 'svelte-routing';
	import ItemList from './ItemList.svelte';
	import user from '../../stores/user';

	// itemlist
	let closeCart = globalStore.toggleItem;
</script>

<div class="cart-overlay" transition:blur>
	<div class="cart-container" transition:fly={{ x: 100 }}>
		<div class="cart" transition:fade={{ delay: 400 }}>
			<!-- Cart header -->
			<div class="cart-header">
				<button class="btn-close" on:click={() => closeCart('cart', false)}
					><i class="fas fa-window-close" />
				</button>
				<h2 class="cart-title">Your Bag</h2>
			</div>
			<!-- End cart header -->
			<!-- Cart items -->
			<ItemList />
			<!-- End cart items -->
			<!-- Cart footer -->
			<div class="cart-footer">
				{#if $user.jwt}
					<Link
						to="/checkout"
						class="btn btn-primary btn-block"
						on:click={() => closeCart('cart', false)}>Checkout</Link
					>
				{:else}
					<p class="cart-login">
						in order to checkout, please
						<Link to="/login" on:click={() => closeCart('cart', false)}
							>Login</Link
						>
					</p>
				{/if}
			</div>
			<!-- End cart footer -->
		</div>
	</div>
</div>

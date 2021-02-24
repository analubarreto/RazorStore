<script>
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import cartStore, { storeTotal } from '../../stores/cartStore';
	import Item from './Item.svelte';
</script>

<section class="cart-items">
	<article>
		{#each $cartStore as cartItem, i (cartItem.id)}
			<div
				in:fly={{ delay: (i + 1) * 500, x: 100 }}
				out:fly={{ x: -100 }}
				animate:flip
			>
				<Item {...cartItem} />
			</div>
		{:else}
			<h2 class="empty-cart">...is currently empty</h2>
		{/each}
		<article class="cart-total">total: ${$storeTotal}</article>
	</article>
</section>

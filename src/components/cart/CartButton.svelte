<script>
	import globalStore from '../../stores/globalStore';
	import cartStore from '../../stores/cartStore';

	let openCart = globalStore.toggleItem;
	$: total = $cartStore.reduce((acc, curr) => {
		return (acc += curr.amount);
	}, 0);
</script>

<!-- Cart toggle -->
<div class="btn-cart-container">
	<button class="btn-cart-toggle" on:click={() => openCart('cart', true)}>
		<i class="fas fa-cart-plus" />
	</button>
	<span class="btn-cart-items">{total}</span>
</div>

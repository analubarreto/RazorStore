<script>
	export let id;
	export let image;
	export let title;
	export let price;
	export let amount;

	// import cart
</script>

<!-- cart item -->
<div class="cart-item">
	<img src={image} alt={title} />
	<div>
		<h4>{title}</h4>
		<h5>${price}</h5>
		<button
			class="cart-btn remove-btn"
			on:click={() => console.log('remove item')}>remove</button
		>
	</div>
	<div>
		<button class="cart-btn amount-btn" on:click={() => amount++}>
			<i class="fas fa-chevron-up" />
		</button>
		<p class="item-amount">{amount}</p>
		<button class="cart-btn amount-btn" on:click={() => amount--}
			><i class="fas fa-chevron-down" /></button
		>
	</div>
</div>

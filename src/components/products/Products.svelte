<script>
	import Product from './Product.svelte';
	import Loading from '../Loading.svelte';
	import products from '../../stores/products';

	export let title;
	// let productList = [];
	// let unsubscribe;

	// onMount(() => {
	// 	unsubscribe = products.subscribe((value) => {
	// 		productList = value;
	// 	});
	// });

	// onDestroy(() => {
	// 	unsubscribe();
	// });
</script>

<section class="section">
	<h2 class="section-title">{title}</h2>
	<div class="products-center">
		{#each $products as product}
			<Product {...product} />
		{:else}
			<Loading />
		{/each}
	</div>
</section>

<script>
	import Product from './Product.svelte';
	import Loading from '../Loading.svelte';
	import products, { featuredStore } from '../../stores/products';

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

{#if $featuredStore.length === 0}
	<Loading />
{:else}
	<section class="section">
		<h2 class="section-title">{title}</h2>
		<div class="products-center">
			{#each $featuredStore as product}
				<Product {...product} />
			{:else}
				<Loading />
			{/each}
		</div>
	</section>
{/if}

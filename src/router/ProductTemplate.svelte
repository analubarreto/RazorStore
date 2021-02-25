<script>
	import products from '../stores/products';
	import globalStore from '../stores/globalStore';
	import { addToCart } from '../stores/cartStore';
	import Loading from '../components/Loading.svelte';
	import { Link } from 'svelte-routing';

	export let id;
	export let location;

	let openCart = globalStore.toggleItem;

	$: product = $products.find((item) => item.id === parseInt(id));
</script>

<svelte:head>
	<title>{!product ? 'Single Product' : product.title}</title>
</svelte:head>
{#if !product}
	<Loading />
{:else}
	<section class="single-product">
		<!-- back to products -->
		<Link to="/products" class="btn btn-primary">back to products</Link>
		<!-- single product container -->
		<div class="single-product-container">
			<article class="single-product-image">
				<img src={product.image} alt={product.title} />
			</article>
			<article>
				<h1>{product.title}</h1>
				<h2>${product.price}</h2>
				<p>{product.description}</p>
				<button
					class="btn btn-primary btn-block"
					on:click={() => {
						addToCart(product);
						openCart('cart', true);
					}}>add to cart</button
				>
			</article>
		</div>
	</section>
{/if}

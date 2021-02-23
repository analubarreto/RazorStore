<script>
	import { Link } from 'svelte-routing';

	export let image;
	export let title;
	export let price;
	export let id;
</script>

<article class="product">
	<div class="img-container">
		<img src={image} alt={title} />
		<Link to={`/products/${id}`} class="btn btn-primary product-link">Details</Link>
	</div>
	<div class="product-footer">
		<p class="product-title">{title}</p>
		<p class="product-price">${price}</p>
	</div>
</article>

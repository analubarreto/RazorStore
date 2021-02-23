<script>
	import Hero from '../components/Hero.svelte';
	import { Link } from 'svelte-routing';
	import Featured from '../components/products/Featured.svelte';
</script>

<Hero>
	<Link to="/products" class="btn btn-primary btn-hero">Shop Now</Link>
</Hero>
<Featured title="Featured Products" />

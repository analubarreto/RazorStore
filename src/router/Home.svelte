<script>
	import Hero from '../components/Hero.svelte';
	import { Link } from 'svelte-routing';
</script>

<Hero>
	<Link to="/products" class="btn btn-primary btn-hero">Shop Now</Link>
</Hero>

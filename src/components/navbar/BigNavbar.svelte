<script>
	import CartButton from '../cart/CartButton.svelte';
	import navLinks from '../../constants/links';
	import { Link } from 'svelte-routing';
</script>

<nav class="navbar">
	<div class="nav-container">
		<div class="nav-center">
			<!-- nav links -->
			<ul class="nav-links">
				{#each navLinks as navLink}
					<li>
						<Link to={navLink.url}>{navLink.text}</Link>
					</li>
				{/each}
			</ul>
			<!-- nav logo -->
			<Link to="/" class="nav-logo big-logo">
				<img src="/assets/images/logo.svg" alt="razors logo" class="logo" />
			</Link>
			<!-- cart toggle -->
			<div class="nav-aside">
				<!-- login button -->
				<!-- cart button -->
				<CartButton />
			</div>
		</div>
	</div>
</nav>

<script>
	import navLinks from '../../constants/links';
	import { Link } from 'svelte-routing';
	import globalStore from '../../stores/globalStore';
	import { fly, fade } from 'svelte/transition';
	import LoginLink from '../LoginLink.svelte';

	let closeSidebar = globalStore.toggleItem;
</script>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>
	<div class="sidebar" transition:fade={{ delay: 400 }}>
		<!-- header -->
		<div class="sidebar-header">
			<button class="btn-close" on:click={() => closeSidebar('sidebar', false)}>
				<i class="fas fa-window-close" />
			</button>
		</div>
		<!-- site logo -->
		<img
			src="/assets/images/logo.svg"
			alt="razors logo"
			class="logo sidebar-logo"
		/>
		<!-- links -->
		<ul class="sidebar-links">
			{#each navLinks as sideLink}
				<li>
					<Link
						to={sideLink.url}
						on:click={() => closeSidebar('sidebar', false)}
						>{sideLink.text}</Link
					>
				</li>
			{/each}
			<li><LoginLink /></li>
		</ul>
	</div>
</div>

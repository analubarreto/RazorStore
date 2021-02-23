<script>
	import navLinks from '../../constants/links';
	import { Link } from 'svelte-routing';
	import globalStore from '../../stores/globalStore';

	let closeSidebar = globalStore.toggleItem;
</script>

<div class="sidebar-container">
	<div class="sidebar">
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
		</ul>
	</div>
</div>

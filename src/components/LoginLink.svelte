<script>
	import user from '../stores/user.js';
	import { Link } from 'svelte-routing';
	import globalStore from '../stores/globalStore';

	// logout func
</script>

{#if $user.jwt}
	<Link
		to="/"
		class="logout-btn"
		on:click={() => {
			globalStore.toggleItem('sidebar', false);
		}}>Logout</Link
	>
{:else}
	<Link
		to="/login"
		class="logout-btn"
		on:click={() => {
			globalStore.toggleItem('sidebar', false);
		}}>Login</Link
	>
{/if}

<script>
	import SmallNavbar from './SmallNavbar.svelte';
	import BigNavbar from './BigNavbar.svelte';

	let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth > 992}
	<BigNavbar />
{:else}
	<SmallNavbar />
{/if}

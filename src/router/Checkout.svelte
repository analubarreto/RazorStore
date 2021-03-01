<script>
	import { onMount } from 'svelte';
	import { navigate, Link } from 'svelte-routing';
	import user from '../stores/user';
	import { storeTotal } from '../stores/cartStore';

	let addressLineOne = '';
	let addressLineTwo = '';

	// Stripe vars
	let cardElement;
	let cardErrors;
	let card;
	let stripe;
	let elements;

	// is Empty
	$: isEmpty = !addressLineOne || !addressLineTwo;
	onMount(() => {
		if (!$user.jwt) {
			navigate('/');
		}
	});

	function handleSubmit() {
		console.log('form submited');
	}
</script>

{#if $storeTotal > 0}
	<section class="form">
		<h2 class="section-title">Checkout</h2>
		<form class="checkout-form" on:submit|preventDefault={handleSubmit}>
			<h3>order total: ${$storeTotal}</h3>
			<!-- inputs -->
			<div class="form-control">
				<label for="address-line-one">Address Line 1:</label>
				<input type="text" id="address-line-one" bind:value={addressLineOne} />
				<label for="address-line-two">Address Line 2:</label>
				<input type="text" id="address-line-two" bind:value={addressLineTwo} />
			</div>
			<!-- inputs -->
			<!-- stripe stuff -->
			<div class="stripe-input">
				<!-- info -->
				<label for="card-element">Credit or Debit Card</label>
				<p class="stripe-info">
					<span>4242 4242 4242 4242</span> <br />
					enter any 5 digits for the zip code
					<br />
					enter any 3 digits for the CVC
				</p>
				<div id="card-element" bind:this={cardElement}>
					<!-- stripe -->
				</div>
				<div id="card-errors" bind:this={cardErrors} role="alert">...</div>
			</div>
			<!-- end stripe stuff -->
			<!-- error message -->
			{#if isEmpty}
				<p class="form-empty">Please fill out address fields</p>
			{/if}
			<!-- end error message -->
			<!-- submit button -->
			<button
				class="btn btn-block btn-primary"
				disabled={isEmpty}
				on:click={handleSubmit}
				class:disabled={isEmpty}>Submit</button
			>
			<!-- end submit button -->
		</form>
	</section>
{:else}
	<div class="checkout-empty">
		<h2>Your cart is empty</h2>
		<Link to="/products" class="btn btn-primary">Fill it</Link>
	</div>
{/if}

<script>
	import { onMount } from 'svelte';
	import { navigate, Link } from 'svelte-routing';
	import user from '../stores/user';
	import cart, { storeTotal } from '../stores/cartStore';
	import stripeKey from '../constants/stripeKey';
	import submitOrder from '../strapi/submitOrder';

	let address;

	// Stripe vars
	let cardElement;
	let cardErrors;
	let card;
	let stripe;
	let elements;

	// is Empty
	$: isEmpty = !address;
	onMount(() => {
		if (!$user.jwt) {
			navigate('/');
		}
		if ($storeTotal > 0) {
			stripe = Stripe(stripeKey);
			elements = stripe.elements();
			card = elements.create('card');
			card.mount(cardElement);
			card.addEventListener('change', (e) => {
				if (e.error) {
					cardErrors.textContent = e.error.message;
				} else {
					cardErrors.textContent = '';
				}
			});
		}
	});
	async function handleSubmit() {
		let response = await stripe.createToken(card).catch((err) => {
			console.log(err);
		});
		const { token } = response;
		let order = setOrder(token);
		console.log(order);
	}

	async function setOrder(token) {
		if (token) {
			const { id } = token;
			let order = await submitOrder({
				address,
				total: $storeTotal,
				items: $cart,
				stripeTokenId: id,
				userToken: $user.jwt,
			});
			return order;
			// token.id
			// submit the order
		} else {
		}
		return order;
	}
</script>

{#if $storeTotal > 0}
	<section class="form">
		<h2 class="section-title">Checkout</h2>
		<form class="checkout-form" on:submit|preventDefault={handleSubmit}>
			<h3>order total: ${$storeTotal}</h3>
			<!-- inputs -->
			<div class="form-control">
				<label for="address-line-one">Address:</label>
				<input type="text" id="address-line-one" bind:value={address} />
			</div>
			<!-- inputs -->
			<!-- error message -->
			{#if isEmpty}
				<p class="form-empty">Please fill out address fields</p>
			{/if}
			<!-- end error message -->
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
					<!-- stripe stuff -->
				</div>
				<div id="card-errors" bind:this={cardErrors} role="alert">
					{cardErrors}
				</div>
			</div>
			<!-- end stripe stuff -->
			<!-- submit button -->
			<button
				type="submit"
				class="btn btn-block btn-primary"
				disabled={isEmpty}
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

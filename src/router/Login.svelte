<script>
	// Imports
	import { Link } from 'svelte-routing';
	import loginUser from '../strapi/loginUser';
	import registerUser from '../strapi/registerUser';

	// Variables
	let email = '';
	let password = '';
	let username = 'default username';
	let isMemeber = true;

	$: isEmpty = !email || !password || !username;

	// functions
	function toggleMember() {
		isMemeber = !isMemeber;
		if (!isMemeber) {
			username = '';
		} else {
			username = 'default username';
		}
	}
	async function handleSubmit() {
		let user;
		if (isMemeber) {
			loginUser();
		} else {
			user = await registerUser({ email, password, username });
		}
		console.log(user);
		if (user) {
		} else {
		}
	}
</script>

<section class="form">
	<h2 class="section-title">
		{#if isMemeber}
			Sign In
		{:else}
			Register
		{/if}
	</h2>
	<form class="login-form" on:submit|preventDefault={handleSubmit}>
		<!-- single input -->
		<div class="form-control">
			<label for="email">email</label>
			<input type="email" id="email" bind:value={email} />
		</div>
		<!-- end single input -->
		<!-- single input -->
		<div class="form-control">
			<label for="password">Password</label>
			<input type="password" id="password" bind:value={password} />
		</div>
		<!-- end single input -->
		<!-- single input -->
		{#if !isMemeber}
			<div class="form-control">
				<label for="username">username</label>
				<input type="text" id="username" bind:value={username} />
			</div>
		{/if}
		<!-- end single input -->
		{#if isEmpty}
			<p class="form-empty">please fill out all form fields.</p>
		{/if}
		<!-- submit button -->
		<button
			type="submit"
			class="btn btn-block btn-primary"
			disabled={isEmpty}
			class:disabled={isEmpty}
		>
			{#if isMemeber}
				Submit
			{:else}
				Register
			{/if}
		</button>
		<!-- end submit button -->
		{#if isMemeber}
			<p class="register-link">
				need to register?
				<button type="button" on:click={toggleMember}>Click here</button>
			</p>
		{/if}
	</form>
</section>

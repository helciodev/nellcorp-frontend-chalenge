<script>
	let amount = 0;
	let recipient = '';
	/**
	 * @type {string | null}
	 */
	let paymentStatus = null;

	async function makePayment() {
		try {
			// Send a request to your backend server to initiate the payment
			const response = await fetch('https://fake-user-nellcorp-challenge.vercel.app/user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ amount, recipient })
			});

			if (response.ok) {
				paymentStatus = 'Transferência bem sucedida!';
			} else {
				paymentStatus = 'A transferência falhou, por favor tente outra vez';
			}
		} catch (error) {
			console.error(error);
			paymentStatus = 'Ocorreu um erro ao processar o seu pagamento!';
		}
	}
</script>

<svelte:head>
	<title>transferîr</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section>
	<h1>Fazer transferênca</h1>
	<form on:submit|preventDefault={makePayment}>
		<div>
			<label for="amount"> Quantia: </label>
			<input name="amount" type="number" bind:value={amount} />
		</div>

		<div>
			<label for="amount"> Beneficiário: </label>
			<input name="amount" type="text" bind:value={recipient} />
		</div>

		<button type="submit">Fazer transferênca</button>
	</form>
	{#if paymentStatus !== null}
		<p>{paymentStatus}</p>
	{/if}
</section>

<style>
	section {
		margin-top: 100px;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	p {
		text-align: center;
		color: rgb(238, 61, 61);
	}

	div {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
	}

	button {
		margin-top: 24px;
		background-color: var(--color-bg-2);
		outline: none;
		border: none;
		color: #fff;
		padding: 16px 24px;
		text-align: center;
		border-radius: 5px;
		transition: all 0.3s ease-in;
	}

	label {
		margin-bottom: 0.4rem;
	}
	input {
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 10px 5px;
	}

	button:hover {
		background-color: var(--color-bg-1);
		color: var(--color-text);
		transform: translateY(-3px);
		cursor: pointer;
	}
</style>

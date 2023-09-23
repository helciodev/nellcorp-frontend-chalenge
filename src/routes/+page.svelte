<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import arrowUp from '$lib/images/arrow-up.svg';
	import arrowDown from '$lib/images/arrow-down.svg';
	import coin from '$lib/images/coin.png';
	import { json } from '@sveltejs/kit';

	/**
	 * @type {{ basicInfo: { firstName: any; profilePic: any; }; balance: any; transactions: any; }}
	 */
	let userData;
	let isLoading = false;
	let isShowBalance = false;
	let isError = '';

	onMount(async () => {
		try {
			isLoading = true;
			const res = await fetch('https://fake-user-nellcorp-challenge.vercel.app/user');

			if (!res.ok) {
				isLoading = false;
				throw new Error(
					'Ocorreu algum erro ao trazer os dados de usuário, por favor tente outra vez!'
				);
			}

			const data = await res.json();
			userData = data;
		} catch (error) {
			if (error instanceof Error) isError = error.message;
		} finally {
			isLoading = false;
		}
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if isLoading}
		<p>Carregando...</p>
	{/if}
	{#if userData}
		<div class="user-initial">
			<h1>Olá, {userData?.basicInfo.firstName}!</h1>

			<img src={userData?.basicInfo.profilePic} alt="user profile pic" />
			<button class="toggle-balance" on:click={() => (isShowBalance = !isShowBalance)}
				>{!isShowBalance ? 'Ver Saldo' : 'Esconder saldo'}</button
			>
			<div class="balance">
				{#if isShowBalance}
					<p transition:fade>{userData?.balance}</p>
				{/if}
			</div>

			<div>
				<h2>Transações recentes</h2>
			</div>
			<div class="transactions">
				{#each userData?.transactions as { id, type, evolvingParty, amount, balanceAfter, date } (id)}
					<div class="transaction">
						<div class="description">
							<img src={coin} alt="icone representando uma moeda" width="28" height="28" />
							<span>{evolvingParty}</span>
						</div>
						<div class="amount">
							<img
								src={type === 'positive' ? arrowUp : arrowDown}
								alt="seta indicando se gasto foi positivo negativo para o usúario"
							/><span>{amount}</span>
						</div>
						<div class="balance-before">
							{balanceAfter}
						</div>
						<div class="when">
							{date.split('-').join('/')}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{:else}
		<p>{isError}</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	h2 {
		font-size: 1.3rem;
		padding: 8px 0px;
	}

	iframe {
		border: none;
		outline: none;
	}
	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	p {
		text-align: center;
	}
	.balance p {
		transition: all 0.4s ease-in;
		opacity: 1;
	}
	.user-initial {
		display: grid;
		place-items: center;
		margin-top: 4rem;
	}
	.user-initial img {
		border-radius: 50%;
	}

	.toggle-balance {
		margin-top: 16px;
		background-color: var(--color-bg-2);
		outline: none;
		border: none;
		color: #fff;
		padding: 16px 24px;
		text-align: center;
		border-radius: 5px;
		transition: all 0.3s ease-in;
	}

	.toggle-balance:hover {
		background-color: var(--color-bg-1);
		color: var(--color-text);
		transform: translateY(-3px);
		cursor: pointer;
	}
	.transactions {
		background-color: var(--color-bg-3);
		padding: 5px 7px;
		border-radius: 5px;
	}
	.transaction {
		padding: 4px 3px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid var(--color-text);
		color: var(--color-text);
		margin-bottom: 0.3rem;
	}

	.transaction:hover {
		background-color: #473fa8;
		cursor: pointer;
	}

	.description,
	.amount,
	.balance-before {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-right: 1px solid #fff;
		padding: 5px;
	}
	.description {
		width: 33%;
	}

	.amount {
		width: 20%;
	}

	.balance-before {
		width: 12%;
	}

	.when {
		width: 20%;
	}

	@media (min-width: 720px) {
		.transactions {
			width: 150%;
		}
	}
</style>

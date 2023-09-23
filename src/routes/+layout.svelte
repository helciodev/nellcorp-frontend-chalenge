<script>
	import Header from './Header.svelte';

	import logo from '$lib/images/logo-crescente.svg';

	import './styles.css';

	const year = new Date().getFullYear();
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer-info">
			<div><a href="/"><img src={logo} alt="logo" /></a></div>
			<p>todos os direitos reservados, Crescente {year}</p>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: var(--color-bg-0);
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}
	.footer-info {
		display: grid;
		place-items: center;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

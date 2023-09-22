<script>
	import { page } from '$app/stores';

	import crescentLogo from '$lib/images/logo-crescente.svg';
	import hamburger from '$lib/images/align-justify.svg';
	import x from '$lib/images/x.svg';
	import home from '$lib/images/home.svg';
	import help from '$lib/images/help-circle.svg';
	import settings from '$lib/images/sliders.svg';
	import list from '$lib/images/list.svg';
	import transactions from '$lib/images/repeat.svg';

	let isMenuOpen = false;
</script>

<header>
	<div class="nav-container">
		<div class="logo">
			<a href="/"><img src={crescentLogo} width="168" height="90" alt="logo" /></a>
		</div>
		<button class="menu" on:click={() => (isMenuOpen = !isMenuOpen)}>
			<img src="{isMenuOpen ? x : hamburger} " alt="menu" />
		</button>
		<div
			on:click={() => (isMenuOpen = !isMenuOpen)}
			aria-roledescription="close menu"
			class="overlay {isMenuOpen ? '' : 'hidden'}"
		/>
		<nav class={isMenuOpen ? 'nav-transform-0' : 'nav-transform-1000'}>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<img src={home} alt="" /><a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
					<img src={list} alt="" /><a href="/">Contas</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
					<img src={transactions} alt="" /><a href="/transfer">Transferir</a>
				</li>
				<li aria-current={$page.url.pathname === '/help' ? 'page' : undefined}>
					<img src={help} alt="" /><a href="/help">Ajuda</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
					<img src={settings} alt="" /><a href="/">Configurações</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		position: relative;
	}

	.nav-container {
		display: flex;
		justify-content: space-between;
		position: fixed;
		width: 100%;
		background-color: var(--color-bg-0);
		border-bottom: 1px solid #5951b6;
	}
	nav {
		position: absolute;
		background-color: var(--color-bg-1);
		top: 0;
		height: 100vh;
		z-index: 6;
		width: 40vh;
	}

	.nav-transform-1000 {
		transform: translateX(-1000px);
		transition: all 0.5s ease-in;
	}

	.nav-transform-0 {
		transform: translateX(0);
		transition: all 0.5s ease-in;
	}

	ul {
		display: flex;
		flex-direction: column;
		justify-content: start;
		gap: 48px;
		justify-content: center;
		align-items: center;
		margin-top: 48px;
	}

	ul li {
		display: flex;
		width: 100%;
		gap: 6px;
		font-size: 20px;
	}

	li a {
		text-decoration: none;
		align-self: center;
	}
	.menu {
		background-color: transparent;
		outline: none;
		border: none;
		cursor: pointer;
		z-index: 6;
	}

	.overlay {
		position: absolute;
		height: 100vh;
		width: 100vh;
		background: rgba(000, 000, 000, 0.4);
		z-index: 4;
	}

	.hidden {
		display: none;
	}
</style>

<script>
	import { onMount } from 'svelte';
	import Counter from './Counter.svelte';

	let userData;
	let isLoading = false;

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

			const data = res.json();
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
	<h1>
		<span class="welcome">
			<!-- <picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture> -->
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
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
</style>

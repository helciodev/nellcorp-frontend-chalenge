<!-- Modal.svelte -->
<script lang="ts">
	export let isOpen = false;
	export let transactionData = {};
	function close() {
		isOpen = false;
	}

	import arrowUp from '$lib/images/arrow-up.svg';
	import arrowDown from '$lib/images/arrow-down.svg';
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal" on:click={() => (isOpen = false)}>
		<div class="modal-content">
			<span class="close" on:click={close}>&times;</span>
			<div>
				<div class="profit-loss">
					<p>{transactionData?.type === 'positive' ? 'Recebeu: ' : 'Gastou:'}</p>
					<p>{transactionData?.amount} kz</p>
				</div>
				<div class="evolving-pary">
					<p>{transactionData?.evolvingParty}</p>
				</div>
				<div class="balance-after">
					<p>Saldo após operação:</p>
					<p>{transactionData?.balanceAfter} kz</p>
				</div>
				<div class="when">
					<p>data</p>
					<p>{transactionData?.date}</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		display: block;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		overflow: hidden;
	}

	.modal-content {
		background-color: var(--color-bg-1);
		margin: 10% auto;
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
		max-width: 400px;
		position: relative;
	}

	.close {
		color: #aaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
		cursor: pointer;
	}

	p {
		font-size: 20px;
		font-weight: bold;
	}
	.close:hover {
		color: #000;
	}

	.balance-after,
	.profit-loss,
	.when {
		display: flex;
		gap: 8px;
	}
</style>

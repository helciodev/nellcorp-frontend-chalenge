<!-- Modal.svelte -->
<script lang="ts">
	export let isOpen = false;
	export let transactionData = {};
	function close() {
		isOpen = false;
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal" on:click={() => (isOpen = false)}>
		<div class="modal-content">
			<span class="close" on:click={close}>&times;</span>
			<div>
				<p>{transactionData?.type}</p>
				<p>{transactionData?.amount}</p>
				<p>{transactionData?.evolvingParty}</p>
				<p>{transactionData?.balanceAfter}</p>
				<p>{transactionData?.date}</p>
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
		background-color: #fff;
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

	.close:hover {
		color: #000;
	}
</style>

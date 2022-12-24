<script>
	import Modal from '$lib/Modal.svelte';
	let showModal = false;
	function closeModal() {
		showModal = false;
	}
	let showModal2 = false;
	function closeModal2() {
		showModal2 = false;
	}
	let showModal3 = false;
	function closeModal3() {
		showModal3 = false;
	}
</script>

<main>
	<button
		on:click={() => {
			showModal = true;
		}}>Show Modal</button
	>
	{#if showModal}
		<Modal on:click={closeModal}>
			<span slot="title">
				<p class="bg-green-300">Everything is 20% off today.</p>
			</span>
			<span slot="button" let:hover={hovering}>
				<button on:click={() => (showModal = false)}>
					{#if hovering}
						Are you sure you want to close?
					{:else}
						Close Me
					{/if}</button
				>
			</span>
		</Modal>
	{/if}
	<button
		on:click={() => {
			showModal2 = true;
		}}>Show Modal2</button
	>
	{#if showModal2}
		<Modal on:click={closeModal2} />
	{/if}
	<button
		on:click={() => {
			showModal3 = true;
		}}>Show Modal3</button
	>
	{#if showModal3}
		<Modal on:click={closeModal3}>
			<span slot="button">
				<button on:click={() => (showModal3 = false)}>Shut It</button>
			</span>
		</Modal>
	{/if}
	<h1>Slot Page</h1>
</main>

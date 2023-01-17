<script>
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	let hidden = false;
	function toggleSomeText() {
		hidden = !hidden;
	}

	let items = [
		{ name: 'a', qty: 3 },
		{ name: 'b', qty: 2 },
		{ name: 'c', qty: 3 }
	];
	function inc(i) {
		items[i].qty += 1;
		sortItems();
	}
	function dec(i) {
		items[i].qty -= 1;
		sortItems();
	}
	function sortItems() {
		items = items.sort((a, b) => (a.qty > b.qty ? -1 : 1));
	}
</script>

<div>
	<h1>Animation</h1>
	<button class="btn-hide" on:click={toggleSomeText}>Open Cart</button>
	{#if !hidden}
		<div transition:fade={{ delay: 500, duration: 500 }} class="popup">
			{#each items as item, i (item.name)}
				<div class="item" animate:flip>
					<span class="name">{item.name}</span>
					<button on:click={() => inc(i)}>+</button>
					{item.qty}
					<button on:click={() => dec(i)}>-</button>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.btn-hide {
		margin-bottom: 1rem;
	}
	.popup {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background: lightgray;
		height: 300px;
		width: 300px;
		align-items: center;
		justify-items: center;
	}
	.item {
		display: flex;
	}
	span {
		display: inline-block;
		width: 1.5rem;
		height: 1.52rem;
		background: white;
	}
</style>

<script>
	import { createEventDispatcher } from 'svelte';
	export let cartItems = [];

	const dispatch = createEventDispatcher();
	let item = {
		name: 'Birthday Card',
		cost: 1,
		quantity: 1
	};
	function incQty(i) {
		cartItems[i].quantity += 1;
	}
	function decQty(i) {
		cartItems[i].quantity -= 1;
	}
	function addNewItem() {
		dispatch('addItemToCart', { item });
	}
</script>

<div>
	<button on:click={addNewItem}>Add New Item</button>
	<button on:click>Close Cart</button>
	{#each cartItems as item, i}
		<div class="flex gap-2">
			{item.name} ${item.cost}
			<button on:click={() => incQty(i)}>+</button>
			{item.quantity}
			<button on:click={() => decQty(i)}>-</button>
		</div>
	{/each}
</div>

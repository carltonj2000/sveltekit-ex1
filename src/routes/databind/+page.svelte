<script>
	import GridTile from '$lib/GridTile.svelte';
	let src =
		'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405';

	let products = [
		{
			name: 'Mug',
			cost: '$10',
			src
		},
		{
			name: 'Shirt',
			cost: '$20',
			src
		}
	];
	function updateCost() {
		products = products.map((p) => ({ ...p, cost: '$12' }));
	}
</script>

<main>
	<button on:click={updateCost}>Update Cost</button>

	{#each products as product}
		<GridTile {product} />
	{/each}
</main>

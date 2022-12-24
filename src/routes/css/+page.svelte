<script>
	import GridTile from '$lib/GridTile.svelte';
	let src =
		'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405';
	let products = [
		{ name: 't-shirt', quantity: 10, src },
		{ name: 'mug', quantity: 30, src },
		{ name: 'sticker', quantity: 8, src },
		{ name: 'sweatshirt', quantity: 12, src }
	];
	function addProduct() {
		products = [{ name: 'cup', quantity: 4 }, ...products];
	}
</script>

<h1>Styling</h1>

<GridTile />

<h1>Products</h1>
<button on:click={addProduct}>Add Product</button>
{#each products as p, i (p.name)}
	<div>
		<h3>{i} {p.name}</h3>
		<h2 class="bg-blue-100">qty {p.quantity}</h2>
		<input type="checkbox" />
	</div>
{/each}

<style>
	div {
		background: orange;
	}
</style>

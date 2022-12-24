<script>
	import CartItemsStore from '../../store.js';
	import GridTile from '$lib/GridTile.svelte';

	let cartItems;
	CartItemsStore.subscribe((data) => {
		cartItems = data;
	});

	let newItems = [
		{
			name: 'T Shirt',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Front-NoModel_ec3be051-d579-4c03-b55b-64449d0b0445.png?v=1623255893',
			cost: '$60.00',
			quantity: 1
		},
		{
			name: 'Bomber Jacket',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/bomber-jacket-0.png?v=1622902777',
			cost: '$80.00',
			quantity: 2
		}
	];
	function addToCart() {
		CartItemsStore.update((items) => [...items, ...newItems]);
	}
</script>

<main>
	<h1>Store Page</h1>
	<button on:click={addToCart}>Add To Cart</button>
	{#each cartItems as product}
		<GridTile {product} />
	{/each}
</main>

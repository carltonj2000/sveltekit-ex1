<script>
	import { setContext } from 'svelte';
	import GridTile from '$lib/GridTile.svelte';
	import CollectionCard from '$lib/CollectionCard.svelte';

	let products = [
		{
			name: 'Cup',
			cost: '$10',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405'
		},
		{
			name: 'Shirt',
			cost: '$10',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/short-sleeve-t-shirt-0.png?v=1622902418'
		}
	];
	let newItems = [
		{
			name: 'T Shirt',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Front-NoModel_ec3be051-d579-4c03-b55b-64449d0b0445.png?v=1623255893',
			cost: '$60.00'
		},
		{
			name: 'Bomber Jacket',
			src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/bomber-jacket-0.png?v=1622902777',
			cost: '$80.00'
		}
	];
	setContext('newItemsContext', newItems);
</script>

<main>
	<CollectionCard />
	{#each products as product}
		<GridTile {product} />
	{/each}
</main>

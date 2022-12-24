<script>
	import '../app.css';
	import '../styles.css';

	import ShoppingCart from '$lib/ShoppingCart.svelte';

	let newItem = {
		name: 'Mug',
		cost: 10
	};

	let cartItems = [
		{
			name: 'Shirt',
			cost: 20,
			quantity: 2
		}
	];

	let cartCount = 0;
	let cartCost = 0;
	$: {
		cartCount = 0;
		cartCost = 0;
		cartItems.forEach((d) => {
			cartCount += d.quantity;
			cartCost += d.quantity * d.cost;
		});
	}
	function addToCart() {
		cartItems.push({ ...newItem, quantity: 1 });
		cartItems = cartItems;
	}
	function addItemToCart(value) {
		console.log(value.detail.item);
		cartItems.push(value.detail.item);
		cartItems = cartItems;
	}
	let showCart = true;
	function showCartToggle() {
		showCart = !showCart;
	}
</script>

<div class="flex gap-4">
	<button on:click={addToCart}>Add To Cart</button>
	<h2>Cart Items={cartCount} Cost={cartCost}</h2>
	<button on:click={showCartToggle}>Show Cart</button>
</div>
{#if showCart}
	<ShoppingCart bind:cartItems on:click={showCartToggle} on:addItemToCart={addItemToCart} />
{/if}
<slot />

<script>
	import CartItemsStore from '../../store.js';
	$: cartItems = $CartItemsStore; // short hand
	let cartCount = 0;
	$: {
		cartCount = 0;
		cartItems.forEach((d) => {
			cartCount += d.quantity;
		});
	}
</script>

<div>
	<h3>Quantity {cartCount}</h3>
	<slot />
</div>

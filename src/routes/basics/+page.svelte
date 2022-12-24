<script>
	let quantity = 0;
	function addToCart() {
		inventory = [...inventory, quantity];
		quantity = ++quantity;
		user.name = 'lee';
	}
	let inventory = [1, 2, 3];
	let user = { name: 'Steph' };
	$: remaining = 10 - quantity;
	let price = 5;
	$: totalCost = quantity * price;
	function increasePrice() {
		price = price + 2;
	}
	$: if (quantity > 10) {
		console.log('The quantity is ' + quantity);
	}

	function handleClick(string) {
		console.log(string);
	}

	let searchedValue = '';
	function setSearchedValue() {
		searchedValue = document.getElementById('myText').value;
	}
	let value = '';
	let checked = false;

	let product = {
		name: 't-shirt',
		quantity: 0
	};

	function increment() {
		product.quantity += 1;
	}

	let products = [
		{ name: 't-shirt', quantity: 10 },
		{ name: 'mug', quantity: 30 },
		{ name: 'sticker', quantity: 8 },
		{ name: 'sweatshirt', quantity: 12 }
	];
	function addProduct() {
		products = [{ name: 'cup', quantity: 4 }, ...products];
	}
</script>

<h1>Your shopping cart has {quantity} items.</h1>
<button on:click={addToCart}>Add To Cart</button>
<h2>{inventory}</h2>
<h3>{user.name}</h3>
<div>Remaining Inverntory: {remaining}</div>
<div>Item Price: {price}</div>
<button on:click={increasePrice}>Increase Price</button>
<div>Total Cost: {totalCost}</div>

<button on:click={() => handleClick('Click has been handled')}>Click Me!</button>

<button on:mousemove|self={(e) => handleClick(e)} style="background: greenyellow; padding: 20px">
	You can click the green.
	<button style="background: OrangeRed; padding: 20px">You can't click the red</button>
</button>

<h3>Searched: {searchedValue}</h3>
<input on:keyup={setSearchedValue} type="text" id="myText" />

<h3>Searched2: {value}</h3>
<input bind:value type="text" id="myText" />

<h3>Checked: {checked}</h3>
<input bind:checked type="checkbox" />

{#if product.quantity > 2}
	<div style="background: LightGreen; padding: 4px;">The product is in stock</div>
{:else if product.quantity === 0}
	<div style="background: LightGreen; padding: 4px;">The product is out of stock</div>
{:else}
	<div style="background: LightGreen; padding: 4px;">Only a few products in stock</div>
{/if}
<h1>Current {product.name} Quantity: {product.quantity}</h1>
<button on:click={increment}>increment</button>

<h1>Products</h1>
<button on:click={addProduct}>Add Product</button>
{#each products as p, i (p.name)}
	<input type="checkbox" />
	<h3>{i} {p.name} #{p.quantity}</h3>
{/each}

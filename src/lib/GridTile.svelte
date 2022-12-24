<script>
	export let product = {
		name: 'No product',
		cost: '$0'
	};
</script>

<div class="flex bg-indigo-600">
	<div class="relative flex items-center justify-center">
		<img src={product.src} class="w-[150px] flex-none transition duration-300 ease-in-out" alt="" />
		<div class="text-white">
			<div class="bg-black p-3 text-2xl  font-medium">{product.name}</div>
			<div class="bg-black p-3 text-sm">{product.cost} USD</div>
		</div>
	</div>
</div>

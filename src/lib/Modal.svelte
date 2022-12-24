<script>
	let hover = false;
</script>

<div
	on:keyup
	on:click|self
	class="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30"
>
	<div class="rounded-md bg-white p-8">
		{#if $$slots.title}
			<slot name="title" />
		{:else}
			<div class="bg-pink-100">
				<slot name="title">
					<p>No Content Provided</p>
				</slot>
			</div>
		{/if}
		<div
			on:mouseenter={() => {
				hover = true;
			}}
			on:mouseleave={() => {
				hover = false;
			}}
		>
			{#if $$slots.button}
				<slot name="button" {hover} />
			{:else}
				<button on:click>Close Modal</button>
			{/if}
		</div>
	</div>
</div>

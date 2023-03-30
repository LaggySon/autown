<script lang="ts">
	export let name: string = 'Trip Name';
	export let description: string = 'Description';
</script>

<body>
	<div>
		<form style="text-align: center;" class="mx-10">
			<input
				class="w-5/6 text-3xl lg:text-5xl dark:text-white border-b mt-5 text-center bg-transparent"
				type="text"
				value={name}
			/>

			<h1 class="text-xl dark:text-white mt-5">Origin</h1>
			<input
				class="text-center  w-full max-w-4xl border-solid border-2"
				type="text"
				placeholder="[Home Address]"
			/>

			<h1 class="text-xl dark:text-white mt-5">Destination</h1>
			<input
				class="text-center  w-full max-w-4xl border-solid border-2"
				type="text"
				placeholder="[Work Address]"
			/>
			<br />
			<button
				class="bg-gray-300 hover:bg-gray-400 items-center p-2 w-48 mt-12 text-black font-bold py-2 px-5"
				>Save</button
			>
		</form>
	</div>
</body>

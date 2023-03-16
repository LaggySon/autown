<script lang="ts">
	export let name: string = 'Trip Name';
	export let description: string = 'Description';
</script>

<body style="background-color: white; height:100%;">
	<div>
		<form style="text-align: center;">
			<input
				class="w-5/6 text-7xl"
				style="margin-top:20px; text-align:center;"
				type="text"
				value={name}
			/>

			<h1 class="text-5xl" style="margin-top: 40px;">{description}</h1>
			<textarea
				placeholder="Enter trip description."
				class=" rounded w-2/6 border-solid border-2"
				style="margin-top: 25px; height:100px; padding:20px;"
				id="description"
			/>

			<h1 class="text-5xl" style="margin-top:20px">Origin</h1>
			<input
				class="rounded w-2/6 border-solid border-2"
				style="margin-top: 25px; padding-left:10px; height:40px; border-top:0px; border-left:0px; border-right: 0px; text-align:center;"
				type="text"
				placeholder="[Home Address]"
			/>

			<h1 class="text-5xl" style="margin-top:20px;">Destination</h1>
			<input
				class="rounded w-2/6 border-solid border-2"
				style="margin-top: 25px; padding-left:10px; height:40px; border-top:0px; border-left:0px; border-right: 0px; text-align:center;"
				type="text"
				placeholder="[Work Address]"
			/>
			<br />
			<button
				class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-1/6"
				style="margin-top:50px">Save</button
			>
		</form>
	</div>
</body>

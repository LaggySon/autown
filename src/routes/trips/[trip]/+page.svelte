<script lang="ts">
	import { goto } from '$app/navigation';
	import authStore from '../../../stores/authStore';
	export let data;

	let userTrip = { name: '', origin: '', destination: '' };
	if (!$authStore.initializing) {
		userTrip = data.docs.find((doc: any) => doc.email === $authStore.user.email).trips[data.tripId];
		// console.log(userTrip);
	}
</script>

<body>
	<div>
		<form method="POST" action="?/update" class="mx-10 text-center">
			{#if !$authStore.initializing}
				<input
					class="w-5/6 text-3xl lg:text-5xl dark:text-white border-b mt-5 text-center bg-transparent"
					type="text"
					value={userTrip.name}
					name="name"
					placeholder="[Trip Name]"
				/>

				<h1 class="text-xl dark:text-white mt-5">Origin</h1>
				<input
					class="text-center text-black w-full max-w-4xl border-solid border-2"
					type="text"
					placeholder="[Home Address]"
					name="origin"
					value={userTrip.origin}
				/>
				<h1 class="text-xl dark:text-white mt-5">Destination</h1>
				<input
					class="text-center text-black w-full max-w-4xl border-solid border-2"
					type="text"
					placeholder="[Work Address]"
					name="destination"
					value={userTrip.destination}
				/>
				<input type="hidden" name="email" value={$authStore.user.email} />
				<input type="hidden" name="index" value={data.tripId} />
				<br />

				<div class="mt-12">
					<input
						class="bg-gray-300 hover:bg-gray-400 items-center p-2 w-48 m-2 text-black font-bold py-2 px-5"
						type="submit"
						value="Save"
					/>
					<button
						class="bg-gray-300 hover:bg-red-800 hover:text-gray-300 items-center p-2 w-48 m-2 text-red-800 font-bold py-2 px-5"
						formaction="?/delete">Delete</button
					>
				</div>
			{/if}
		</form>
	</div>
</body>

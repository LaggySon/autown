<script lang="ts">
	import Plus from '$lib/plus.svelte';
	import Trip from './Trip.svelte';
	import authStore from '../../stores/authStore';

	export let data;

	const getTrips = (email: string) => {
		const userTrips = data.docs.find((doc: any) => doc.email === $authStore.user.email).trips;
		// console.log(userTrips);
		return userTrips;
	};
</script>

<div class="m-auto w-3/4 ">
	<h1 class="text-5xl text-center p-10  font-bold">My Trips</h1>
	<div class="flex flex-wrap justify-center items-center mx-auto gap-4">
		{#if $authStore.isLoggedIn}
			{#each getTrips($authStore.user.email) as trip, i}
				<a href="/trips/{i}"
					><Trip name={trip.name} origin={trip.origin} dest={trip.destination} /></a
				>
			{/each}
		{/if}
		<div class="w-full flex justify-center cursor-pointer  hover:scale-90 transition-all">
			<Plus />
		</div>
	</div>
</div>

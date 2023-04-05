<script lang="ts">
	/// <reference types="@types/google.maps" />
	import Plus from '$lib/plus.svelte';
	import Trip from './Trip.svelte';
	import authStore from '../../stores/authStore';

	export let data;

	async function determineQuickestMode(origin: string, destination: string): Promise<string> {
		var service = new google.maps.DistanceMatrixService();

		const viaDriving = await service.getDistanceMatrix({
			origins: [origin],
			destinations: [destination],
			travelMode: google.maps.TravelMode.DRIVING
		});
		const viaTransit = await service.getDistanceMatrix({
			origins: [origin],
			destinations: [destination],
			travelMode: google.maps.TravelMode.TRANSIT
		});

		if (viaDriving.rows[0].elements[0].status == "OK" && viaTransit.rows[0].elements[0].status == "OK") {
			var drivingTime = viaDriving.rows[0].elements[0].duration.value;
			var transitTime = viaTransit.rows[0].elements[0].duration.value;

			if (viaDriving < viaTransit) {
				return 'Driving';
			}
			if (viaTransit < viaDriving) {
				return 'Transit';
			}
			return 'Both!';
		} else {
			return "Error";
		}
	}

	const getTrips = (email: string) => {
		const userTrips = data.docs.find((doc: any) => doc.email === $authStore.user.email).trips;
		// console.log(userTrips);
		return userTrips;
	};
</script>

<svelte:head>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_xH2-aYVJmgkmo9BazIL8XQZzG39OBTc"
	></script>
</svelte:head>

<div class="m-auto w-3/4 ">
	<h1 class="text-5xl text-center p-10  font-bold">My Trips</h1>
	<div class="flex flex-wrap justify-center items-center mx-auto gap-4">
		{#if $authStore.isLoggedIn}
			{#each getTrips($authStore.user.email) as trip, i}
				{determineQuickestMode("Boston, MA", "New York City, New York")}	
				<a href="/trips/{i}"
					><Trip name={trip.name} origin={trip.origin} dest={trip.destination} /></a
				>
			{/each}

			<form
				class="w-full flex justify-center cursor-pointer  hover:scale-90 transition-all"
				method="POST"
				action="?/create"
			>
				<input type="hidden" name="email" value={$authStore.user.email} />
				<button formaction="?/create"><Plus /></button>
			</form>{/if}
	</div>
</div>

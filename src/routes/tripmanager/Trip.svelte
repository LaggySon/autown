<script lang="ts">
	export let name: string;
	export let origin: string;
	export let dest: string;
	import Train from '$lib/train.svelte';
	import Car from '$lib/car.svelte';
	import axios from 'axios';
	import {Client, TravelMode} from "@googlemaps/google-maps-services-js";

	// Make a request for a user with a given ID
	const tripOrigin = "555 Huntington Avenue, Boston MA"
	const tripDestination = "200 Commonwealth Ave, Boston MA"

	const client = new Client({});
	
	client
      .distancematrix({
        params: {
          key: '',
          origins: ['Greenwich, England'],
          destinations: ['Stockholm, Sweden'],
          mode: TravelMode.driving,
          // Feel free to set more params
        },

        timeout: 1000, // milliseconds
      })
      .then((r) => {
        console.log(r.data.rows[0]?.elements);
      })
      .catch((e) => {
        console.log(e.response.data.status);
      });
</script>

<div
	class="dark:bg-slate-500 bg-[#d9d9d9] text-center w-96 shadow-md   transition-all  cursor-pointer hover:scale-90"
>
	<h1 class="text-2xl  font-bold p-2">{name}</h1>
	<div class="border-y-2 border-black p-2">
		<p>Origin: {origin}</p>
		<p>Destination: {dest}</p>
	</div>
	<div class="flex justify-center items-center gap-4 font-bold text-lg p-2">
		<Car fill="red" /> VS <Train fill="green" />
	</div>
	<div><span class="uppercase font-bold">train</span> is faster today!</div>
</div>

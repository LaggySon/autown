<script>
	import Plus from '$lib/plus.svelte';
	import Trip from './Trip.svelte';

	export let data;
</script>

<div class="m-auto w-3/4 ">
	<h1 class="text-5xl text-center p-10  font-bold">My Trips</h1>
	<div class="flex flex-wrap justify-center items-center mx-auto gap-4">
		<Trip name="Morning Commute" origin="Home" dest="Work" />
		<Trip name="Work to Store" origin="Work" dest="Store" />
		<div class="w-full flex justify-center cursor-pointer  hover:scale-90 transition-all">
			<Plus />
		</div>
	</div>
</div>

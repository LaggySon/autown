<script lang="ts">
	import Profile from '$lib/profile.svelte';
	import Autown from '$lib/autown.png';
</script>

<body class="my-10">
	<div class="h-20 w-full flex justify-center"><img src={Autown} alt="" /></div>
	<h1 class="text-3xl  border-solid dark:text-white text-center transition-colors">Autown</h1>
	<div class="h-80 w-full flex flex-col items-center justify-center my-auto">
		<div class="pb-2 w-full flex flex-col items-center justify-center">
			<Profile />
		</div>
		<button
			class="bg-gray-300 hover:bg-gray-400 items-center p-2 w-48 text-black font-bold py-2 px-6"
		>
			Log In
		</button>
		<button
			class="bg-gray-300 hover:bg-gray-400 items-center p-2 w-48 mt-2 text-black font-bold py-2 px-5"
		>
			Sign Up
		</button>
	</div>
</body>

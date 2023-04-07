<script lang="ts">
	import Profile from '$lib/profile.svelte';
	import { initializeApp } from 'firebase/app';
	import { getAuth, signOut } from 'firebase/auth';
	import { firebaseConfig } from '../firebase-config';
	import authStore from '../stores/authStore';

	function navigateToRegister() {
		window.location.href = '/authentication-register';
	}
	function navigateToSignIn() {
		window.location.href = '/authentication-sign-in';
	}
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	function logOut() {
		signOut(auth);
		authStore.set({
			isLoggedIn: false,
			user: undefined,
			firebaseControlled: true
		});
	}
</script>

<body class="my-10">
	<h1 class="text-7xl  border-solid dark:text-white text-center transition-colors">Autown</h1>
	<div class="h-80 w-full flex flex-col items-center justify-center my-auto">
		<div class="pb-2 w-full flex flex-col items-center justify-center">
			<Profile />
		</div>

		{#if $authStore.isLoggedIn}
			<button
				class="bg-gray-300 hover:bg-gray-400 items-center p-2 w-48 text-black font-bold py-2 px-6"
				on:click={() => {
					logOut();
				}}>Sign Out</button
			>
		{:else}
			<button
				on:click={navigateToSignIn}
				class="bg-gray-300 hover:bg-gray-400 items-center p-2 w-48 text-black font-bold py-2 px-6"
			>
				Log In
			</button>
			<button
				on:click={navigateToRegister}
				class="bg-gray-300 hover:bg-gray-400 items-center p-2 w-48 mt-2 text-black font-bold py-2 px-5"
			>
				Sign Up
			</button>
		{/if}
	</div>
</body>

<script lang="ts">
	import { signOut } from 'firebase/auth';
	import authStore from '../stores/authStore';
	import { getAuth } from 'firebase/auth';
	import { firebaseConfig } from '../firebase-config';
	import { initializeApp } from 'firebase/app';
	import { goto } from '$app/navigation';
	import Auth from '$lib/components/auth.svelte';

	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	function logOut() {
		signOut(auth);
		authStore.set({
			isLoggedIn: false,
			user: null,
			firebaseControlled: true
		});
		goto('/');
	}
</script>

<Auth />

<nav>
	<ul class="flex justify-center gap-2">
		<li class="p-2 border hover:text-yellow-500 hover:border-yellow-500">
			<a href="/">Home</a>
		</li>
		{#if $authStore.isLoggedIn}
			<li class="p-2 border hover:text-yellow-500 hover:border-yellow-500">
				<a href="/tripmanager">Trip Manager</a>
			</li>
			<li class="p-2 border hover:text-yellow-500 hover:border-yellow-500">
				<button
					on:click={() => {
						logOut();
					}}>Sign Out</button
				>
			</li>
		{/if}
	</ul>
</nav>
<p class="text-center">
	{#if $authStore.isLoggedIn}
		<span>{$authStore.user.email}</span>
	{:else}
		<span>Not Logged In</span>
	{/if}
</p>

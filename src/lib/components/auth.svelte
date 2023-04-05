<script lang="ts">
	import { onMount } from 'svelte';
	import { initializeApp, getApps } from 'firebase/app';
	import { firebaseConfig } from '../../firebase-config';
	import { getAuth } from 'firebase/auth';
	import authStore from '../../stores/authStore';

	onMount(() => {
		if (!getApps().length) {
			initializeApp(firebaseConfig);
		}

		const auth = getAuth();

		auth.onAuthStateChanged((user: any) => {
			if (!user) {
				return;
			}

			// console.log('user meta data:');
			// console.log('user uid:', user.uid);
			// console.log('user display name:', user.displayName);
			// console.log('user email:', user.email);

			authStore.set({
				isLoggedIn: user !== null,
				user,
				firebaseControlled: true
			});
		});
	});
</script>

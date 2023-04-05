import { writable } from 'svelte/store';
import type firebase from 'firebase/app';

const authStore = writable<{
	isLoggedIn: boolean;
	user?: firebase.UserInfo;
	firebaseControlled: boolean;
	initializing: boolean;
}>({
	isLoggedIn: false,
	firebaseControlled: false,
	initializing: true
});

export default {
	subscribe: authStore.subscribe,
	set: authStore.set
};

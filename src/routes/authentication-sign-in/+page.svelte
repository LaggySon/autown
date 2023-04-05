<script lang="ts">
	// Import the functions you need from the SDKs you need
	import { firebaseConfig } from '../../firebase-config.js';
	import { initializeApp } from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
	import { goto } from '$app/navigation';

	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

	function validateForm(): Boolean {
		var email = (<HTMLInputElement>document.getElementById('username')).value;
		var password = (<HTMLInputElement>document.getElementById('password')).value;
		if (!validateEmail(email)) {
			return false;
		}
		if (password == '') {
			return false;
		}
		return true;
	}

	function validateEmail(email: string) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	function signUserIn() {
		let email = (<HTMLInputElement>document.getElementById('username')).value;
		let password = (<HTMLInputElement>document.getElementById('password')).value;

		if (!validateForm()) {
			alert('Please enter a valid email and password.');
			return;
		}

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// alert('Signed in User');
				// ...
				goto('/tripmanager');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert('Unable to sign in user: ' + errorMessage);
			});
	}

	function navigateToCreateAccount() {
		window.location.href = '/authentication-register';
	}
</script>

<br />
<h1 class="text-7xl  border-solid dark:text-white text-center transition-colors">Autown</h1>
<br />

<div class="w-full flex justify-center">
	<form class=" rounded px-8 pt-6 pb-8 mb-4" style="width: 500px;">
		<div class="mb-4">
			<label class="text-center block  text-sm font-bold mb-2" for="username"> Email </label>
			<input
				required
				class="text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username"
				type="email"
				placeholder="Email"
			/>
		</div>
		<div class="mb-6">
			<label class="block text-center text-sm font-bold mb-2" for="password"> Password </label>
			<input
				required
				class="text-center shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="password"
				placeholder="******************"
			/>
		</div>

		<div class="flex justify-center">
			<button
				on:click={signUserIn}
				class="bg-gray-300 hover:bg-gray-400 items-center p-2 w-48 text-black font-bold py-2 px-6"
				type="button"
			>
				Sign In
			</button>
		</div>
		<br />
		<div class="flex justify-center">
			<button
				on:click={navigateToCreateAccount}
				class="w-7/12 hover:text-gray-400  font-bold  px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
			>
				New User? Create Account.
			</button>
		</div>

		<br />

		<!-- <div class="text-red-500" on:click={() => signOut()}>SIGN OUT</div> -->
	</form>
</div>

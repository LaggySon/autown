<script lang="ts">
	// Import the functions you need from the SDKs you need
	import { firebaseConfig } from '../../firebase-config.js';
	import { initializeApp } from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
	import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
	import { getFirestore } from 'firebase/firestore';
	import { goto } from '$app/navigation';

	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const db = getFirestore(app);

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

	async function registerUser() {
		let email = (<HTMLInputElement>document.getElementById('username')).value;
		let password = (<HTMLInputElement>document.getElementById('password')).value;

		if (!validateForm()) {
			alert('Please enter a valid email and password.');
			return;
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(email);
				alert('Registered User');
				try {
					const docRef = doc(db, 'Users', String(email));
					const data = {
						email: email,
						trips: [{ name: 'Starter Trip', destination: 'Work', origin: 'Home' }]
					};
					setDoc(docRef, data)
						.then(() => {
							console.log('Document has been added Successfully!');
						})
						.catch((error) => console.log(error));
				} catch (e) {
					console.error('Error adding document: ', e);
				}
				goto('/tripmanager');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert('Unable to register user: ' + errorMessage);
			});
	}

	function navigateToSignIn() {
		window.location.href = '/authentication-sign-in';
	}
</script>

<br />
<h1 class="text-7xl  border-solid dark:text-white text-center transition-colors">Autown</h1>
<br />

<div class="w-full flex justify-center">
	<form name="registerUser" class=" px-8 pt-6 pb-8 mb-4" style="width: 500px;">
		<div class="mb-4">
			<label class="text-center block  text-sm font-bold mb-2" for="username"> Email </label>
			<input
				required
				class="text-center shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username"
				type="email"
				placeholder="Email"
			/>
		</div>
		<div class="mb-6">
			<label class="text-center block  text-sm font-bold mb-2" for="password"> Password </label>
			<input
				required
				class="text-center shadow appearance-none border  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="password"
				placeholder="******************"
			/>
		</div>

		<div class="flex justify-center">
			<button
				on:click={registerUser}
				class="bg-gray-300 hover:bg-gray-400 items-center p-2 w-48 text-black font-bold py-2 px-6"
				type="button"
			>
				Create Account
			</button>
		</div>
		<br />
		<div class="flex justify-center">
			<button
				on:click={navigateToSignIn}
				class="w-7/12 hover:text-gray-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
			>
				Existing User? Sign In.
			</button>
		</div>
	</form>
</div>

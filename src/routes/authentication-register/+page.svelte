<script lang="ts">
	// Import the functions you need from the SDKs you need
    import { firebaseConfig } from '../../firebase-config.js'
	import { initializeApp } from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

    // TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);

    function validateForm() : Boolean{
        var email = (<HTMLInputElement>document.getElementById('username')).value;
        var password = (<HTMLInputElement>document.getElementById('password')).value;
        if(!validateEmail(email)){
            return false;
        }
        if(password == ""){
            return false;
        }
        return true;
    }

    function validateEmail(email: string) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
  

	function registerUser() {
		let email = (<HTMLInputElement>document.getElementById('username')).value;
		let password = (<HTMLInputElement>document.getElementById('password')).value;

        if(!validateForm()){
            alert('Please enter a valid email and password.');
            return;
        }

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				alert('Registered User');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert('Unable to register user: ' + errorMessage);
			});
	}

    function navigateToSignIn(){
        window.location.href = "/authentication-sign-in";
    }
</script>

<br />
<h1 class="text-7xl  border-solid dark:text-white text-center transition-colors">Autown</h1>
<br />

<div class="w-full flex justify-center">
	<form name="registerUser" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style="width: 500px;">
		<div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Email </label>
			<input
				required
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="username"
				type="email"
				placeholder="Email"
			/>
		</div>
		<div class="mb-6">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
			<input
				required
				class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
				id="password"
				type="password"
				placeholder="******************"
			/>
			<p class="text-red-500 text-xs italic">Please choose a password.</p>
		</div>

		<div class="flex justify-center">
			<button
                on:click={registerUser}
				class="w-5/12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
			>
				Create Account
			</button>
		</div>
		<br />
		<div class="flex justify-center">
			<button
                on:click={navigateToSignIn}
				class="w-7/12 hover:text-blue-900 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="button"
			>
				Existing User? Sign In.
			</button>
		</div>
	</form>
</div>

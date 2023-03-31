import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import authStore from '../../stores/authStore';
import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
async function getTrips(email: string) {
	const docRef = doc(db, 'Users', String(email));
	const docSnap = await getDoc(docRef);
	const trips = docSnap.data()?.trips;
	return trips;
}

export const actions = {
	create: async ({ request }: any) => {
		const formData = await request.formData();
		const email = formData.get('email');

		const userTrips = await getTrips(email);

		const docRef = doc(db, 'Users', String(email));
		const data = {
			email: email,
			trips: [...userTrips, { name: 'New Trip', destination: '', origin: '' }]
		};
		setDoc(docRef, data)
			.then(() => {
				console.log('Document has been added Successfully!');
			})
			.catch((error) => console.log(error));

		throw redirect(303, `/trips/${userTrips.length}`);

		return {
			status: '200'
		};
	}
};

import { error, redirect } from '@sveltejs/kit';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../../firebase-config';
import authStore from '../../../stores/authStore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export const load = async ({ params }: any) => {
	if (!Number.isNaN(Number(params.trip))) {
		const docSnap = await getDocs(collection(db, 'Users'));
		let docs: any = [];
		docSnap.forEach((doc) => {
			docs.push(doc.data());
		});
		return {
			tripId: params.trip,
			docs
		};
	} else {
		throw error(404, 'Not found');
	}
};

export const actions = {
	update: async ({ request }: any) => {
		const data = await request.formData();

		const name: string = data.get('name');
		const origin: string = data.get('origin');
		const destination: string = data.get('destination');
		const index: number = data.get('index');
		const email: string = data.get('email');

		const docRef = doc(db, 'Users', String(email));
		const docSnap = await getDoc(docRef);
		const trips = docSnap.data()?.trips;
		trips[index] = { name, origin, destination };
		setDoc(docRef, { trips }, { merge: true });
		console.log(trips);

		throw redirect(303, '/tripmanager');

		return {
			status: '200'
		};
	}
};

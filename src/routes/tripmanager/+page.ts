import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import authStore from '../../stores/authStore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

let userstuff = {};

authStore.subscribe((value) => (userstuff = value));

export const load = async () => {
	const docSnap = await getDocs(collection(db, 'Users'));
	let docs: any = [];
	docSnap.forEach((doc) => {
		docs.push(doc.data());
	});
	console.log(docs);

	return { docs };
};

import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const docRef = doc(collection(db, 'Users'));
const docSnap = await getDoc(docRef);

export const load = async () => {
	const data = await docSnap.data();
	console.log(data);
	return { data };
};

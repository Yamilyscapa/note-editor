import { json } from '@sveltejs/kit';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: import.meta.env.FIREBASE_API_KEY,
	authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function GET(req, res) {
	const notesCollection = collection(db, 'notes');
	const notes = await getDocs(notesCollection);
	const notesList = notes.docs.map((doc) => doc.data());

	return json(notesList);
}

export function POST(req, res) {
	return json({});
}

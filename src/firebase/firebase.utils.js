import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBuspT9phjB6wObVGJdWnuuY8X3j3itBtc',
	authDomain: 'crwn-clothing-88da2.firebaseapp.com',
	databaseURL: 'https://crwn-clothing-88da2.firebaseio.com',
	projectId: 'crwn-clothing-88da2',
	storageBucket: 'crwn-clothing-88da2.appspot.com',
	messagingSenderId: '703987226688',
	appId: '1:703987226688:web:1df5f3118dc17368fd27a5',
	measurementId: 'G-J0YJ1S4FFG',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`user/${userAuth.uid}`);
	const snapShot = await userRef.get();
	console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

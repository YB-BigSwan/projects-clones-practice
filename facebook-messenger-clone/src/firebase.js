import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBD3KeYwpyO3iStevj3ZMRnlQbMxTJsYgA',
	authDomain: 'facebook-messenger-clone-d0539.firebaseapp.com',
	databaseURL:
		'https://facebook-messenger-clone-d0539-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'facebook-messenger-clone-d0539',
	storageBucket: 'facebook-messenger-clone-d0539.appspot.com',
	messagingSenderId: '1067363970952',
	appId: '1:1067363970952:web:fc03151c9f96b7d97a943d',
	measurementId: 'G-E3NBS5SN79',
});

const db = firebaseApp.firestore();

export default db;

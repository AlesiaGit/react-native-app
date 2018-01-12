import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCn_msRz_WUqj2-vmZ5wJw4ksv0QioEiK4",
	authDomain: "test-ee3e8.firebaseapp.com",
	databaseURL: "https://test-ee3e8.firebaseio.com",
	projectId: "test-ee3e8",
	storageBucket: "test-ee3e8.appspot.com",
	messagingSenderId: "609225780566"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBpcIa2jOtgiRjavW-SNBesC46BTJqoPw0",
    authDomain: "todoapplication-5c88f.firebaseapp.com",
    databaseURL: "https://todoapplication-5c88f.firebaseio.com",
    projectId: "todoapplication-5c88f",
    storageBucket: "todoapplication-5c88f.appspot.com",
    messagingSenderId: "893226932522",
    appId: "1:893226932522:web:1aa3d3adbf95255db22653"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db } ;
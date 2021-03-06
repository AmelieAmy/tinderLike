// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.10/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

// npm install -g firebase-tools
// ou
// npm i firebase 

// firebase login

// firebase init

// firebase deploy
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAbeMNHHFfWDZhqO3Y6VhJ4c_4oeaQt8b0",
    authDomain: "tinder-like-86524.firebaseapp.com",
    projectId: "tinder-like-86524",
    storageBucket: "tinder-like-86524.appspot.com",
    messagingSenderId: "570922168510",
    appId: "1:570922168510:web:d25ae7b9d56f285804aeef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

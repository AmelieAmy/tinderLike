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
    apiKey: "AIzaSyDLekRWawbODPPylevJaE9tGQzUioRPTWY",
    authDomain: "tinderlike-a2c64.firebaseapp.com",
    projectId: "tinderlike-a2c64",
    storageBucket: "tinderlike-a2c64.appspot.com",
    messagingSenderId: "64174600278",
    appId: "1:64174600278:web:1d7bf2498ac742f9640bf7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

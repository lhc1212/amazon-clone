import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAyL1bGMkuAGdc0et9PXV6CcdqnL-AUx1s",
    authDomain: "clone-80eea.firebaseapp.com",
    projectId: "clone-80eea",
    storageBucket: "clone-80eea.appspot.com",
    messagingSenderId: "735797971996",
    appId: "1:735797971996:web:54a857dae2e85a0c78e3d9"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();

export { db, auth };
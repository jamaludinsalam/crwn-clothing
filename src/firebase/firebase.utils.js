import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBPm0SKtC3UcVB9bnFhlWt-137Dc9p5-ps",
    authDomain: "crwn-db-5162e.firebaseapp.com",
    databaseURL: "https://crwn-db-5162e.firebaseio.com",
    projectId: "crwn-db-5162e",
    storageBucket: "crwn-db-5162e.appspot.com",
    messagingSenderId: "113205819790",
    appId: "1:113205819790:web:1edecee2b28d91a0378cdf",
    measurementId: "G-160WQ9WT66"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


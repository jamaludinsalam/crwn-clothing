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
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

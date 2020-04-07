import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvMKX4zucWc0V4DLNkvf9_TXv-h1fFlI8",
    authDomain: "ecommerce-clothing-c344f.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-c344f.firebaseio.com",
    projectId: "ecommerce-clothing-c344f",
    storageBucket: "ecommerce-clothing-c344f.appspot.com",
    messagingSenderId: "795869710920",
    appId: "1:795869710920:web:7d70c205532e358b11667d",
    measurementId: "G-8SVTLB85MT"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
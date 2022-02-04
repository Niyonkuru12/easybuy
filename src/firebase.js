import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs0-7ZfrhNeG2z4iAQNb8Trw1vzlnTEW4",
  authDomain: "easybuy-8cd36.firebaseapp.com",
  projectId: "easybuy-8cd36",
  storageBucket: "easybuy-8cd36.appspot.com",
  messagingSenderId: "328969164288",
  appId: "1:328969164288:web:e803f0ee1d8caf4d6caae5",
  measurementId: "G-QEGN1LVDE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

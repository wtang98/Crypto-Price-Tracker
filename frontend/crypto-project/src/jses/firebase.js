import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBl0Btm1sFCOeqDU-9cJ40sO7HFyoHvq6c",
  authDomain: "cryptophiles-315f6.firebaseapp.com",
  projectId: "cryptophiles-315f6",
  storageBucket: "cryptophiles-315f6.appspot.com",
  messagingSenderId: "595241964290",
  appId: "1:595241964290:web:866bcc2a390096f946281b",
  measurementId: "G-D3KN689BP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUBHPVNks5kIEkRzEJa423X5jpovzY2XQ",
  authDomain: "healthlineapp-17847.firebaseapp.com",
  projectId: "healthlineapp-17847",
  storageBucket: "healthlineapp-17847.appspot.com",
  messagingSenderId: "229389158100",
  appId: "1:229389158100:web:3691253559602a5bd49d41",
  measurementId: "G-4XC9K3M80V"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DATABASE = getFirestore(FIREBASE_APP);
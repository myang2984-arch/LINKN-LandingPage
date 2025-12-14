// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCBHDyFUO0renFkIPkVL9Dp4ALAdWAmQA",
  authDomain: "linkn-landing.firebaseapp.com",
  projectId: "linkn-landing",
  storageBucket: "linkn-landing.firebasestorage.app",
  messagingSenderId: "1093412348328",
  appId: "1:1093412348328:web:2b253e3e9f9995aafe3d9d",
  measurementId: "G-N5TCFGNC7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);
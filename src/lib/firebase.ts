// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCBHDyFUO0renFkIPkVL9Dp4ALAdWAmQA",
  authDomain: "linkn-landing.firebaseapp.com",
  projectId: "linkn-landing",
  storageBucket: "linkn-landing.firebasestorage.app",
  messagingSenderId: "1093412348328",
  appId: "1:1093412348328:web:2b253e3e9f9995aafe3d9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCggCLWEp8o4zXM3rNsbkcVBt9u4M2iHlY",
  authDomain: "house-marketplace-app-ab299.firebaseapp.com",
  projectId: "house-marketplace-app-ab299",
  storageBucket: "house-marketplace-app-ab299.appspot.com",
  messagingSenderId: "790092868987",
  appId: "1:790092868987:web:7a5e8aa389510f43ca21de"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
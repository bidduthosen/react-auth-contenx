// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNz5zDWCNB0rvPT5GvsnMWBmDG50pBqpA",
  authDomain: "react-auth-context-ccba4.firebaseapp.com",
  projectId: "react-auth-context-ccba4",
  storageBucket: "react-auth-context-ccba4.firebasestorage.app",
  messagingSenderId: "247553721663",
  appId: "1:247553721663:web:d6a214a62834039131ff8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
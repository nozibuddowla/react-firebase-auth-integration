// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB5XSSJH09yuwVvhjexLYsrDMTAzVP9Vg",
  authDomain: "react-firebase-auth-34009.firebaseapp.com",
  projectId: "react-firebase-auth-34009",
  storageBucket: "react-firebase-auth-34009.firebasestorage.app",
  messagingSenderId: "497101798538",
  appId: "1:497101798538:web:cf7e361a2674fe29878173",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

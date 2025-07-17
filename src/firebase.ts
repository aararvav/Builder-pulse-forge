// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ndMtn6NgX8bHNLPSboAsBjlVjHRmd1c",
  authDomain: "builder-pulse-forge.firebaseapp.com",
  projectId: "builder-pulse-forge",
  storageBucket: "builder-pulse-forge.firebasestorage.app",
  messagingSenderId: "380692177106",
  appId: "1:380692177106:web:0838019eedd75f2a9c4d0b",
  measurementId: "G-RLG3B8SBFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT1wzowG3OAiXwzYskYMq2xECTfoBzJkI",
  authDomain: "my-portfolio-reviews-1da94.firebaseapp.com",
  projectId: "my-portfolio-reviews-1da94",
  storageBucket: "my-portfolio-reviews-1da94.firebasestorage.app",
  messagingSenderId: "519431555510",
  appId: "1:519431555510:web:6afb5d21714de9c0c79917",
  measurementId: "G-9ZNGCESB62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
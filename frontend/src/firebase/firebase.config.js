
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "mern-book-inventory-b3eeb.firebaseapp.com",
  projectId: "mern-book-inventory-b3eeb",
  storageBucket: "mern-book-inventory-b3eeb.appspot.com",
  messagingSenderId: "765841978418",
  appId: import.meta.env.VITE_APIID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
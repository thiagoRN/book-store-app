// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcS4IaHDDy7L4uE95wAGB1vNte0_ma1iE",
  authDomain: "mern-book-inventory-b3eeb.firebaseapp.com",
  projectId: "mern-book-inventory-b3eeb",
  storageBucket: "mern-book-inventory-b3eeb.appspot.com",
  messagingSenderId: "765841978418",
  appId: "1:765841978418:web:48b77555c9250ea11c782b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
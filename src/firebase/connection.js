// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC95GfjP9e_aIEBEM0nicyfTF8sj2HfLlM",
  authDomain: "infocursos-5d1ec.firebaseapp.com",
  projectId: "infocursos-5d1ec",
  storageBucket: "infocursos-5d1ec.firebasestorage.app",
  messagingSenderId: "399539690268",
  appId: "1:399539690268:web:961e0009cdcd911502b8d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
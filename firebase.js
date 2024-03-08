// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfuTADfg7zaUbqXE8Y5WkGyP1fQq5MU2M",
  authDomain: "netflix-clone-b7148.firebaseapp.com",
  projectId: "netflix-clone-b7148",
  storageBucket: "netflix-clone-b7148.appspot.com",
  messagingSenderId: "201745259996",
  appId: "1:201745259996:web:b510218c3689234533c319",
  //your firebase api key
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

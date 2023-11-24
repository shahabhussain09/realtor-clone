// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7QquI-ePE9DnqkS6wuLbBe1Ro2bQlPAg",
  authDomain: "realtor-clone-f91b0.firebaseapp.com",
  projectId: "realtor-clone-f91b0",
  storageBucket: "realtor-clone-f91b0.appspot.com",
  messagingSenderId: "939471212867",
  appId: "1:939471212867:web:eaed785cad2f03da5edff6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore() 
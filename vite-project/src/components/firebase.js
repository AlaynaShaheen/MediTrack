// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAykn7hzoPTV9n0LbyaVjs0nRJPuxtjbY",
  authDomain: "meditrack-425a5.firebaseapp.com",
  projectId: "meditrack-425a5",
  storageBucket: "meditrack-425a5.appspot.com",
  messagingSenderId: "1060866451925",
  appId: "1:1060866451925:web:c04187a4b90a940c0f755c",
  measurementId: "G-JHRVWX8J59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;
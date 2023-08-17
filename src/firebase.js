// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiwl8hExFrMM1gDNZ-HqOAYi32Tjpt8cA",
  authDomain: "twitter-app-d8a77.firebaseapp.com",
  projectId: "twitter-app-d8a77",
  storageBucket: "twitter-app-d8a77.appspot.com",
  messagingSenderId: "247438204738",
  appId: "1:247438204738:web:9b2992b32ab3ca611672db",
  measurementId: "G-PE7EK0C1R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {app, db, auth, storage};
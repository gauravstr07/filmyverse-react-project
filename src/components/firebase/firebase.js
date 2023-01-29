// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkF9YewRYKvLqON1zaM3y-Wr9mdOzWFTU",
  authDomain: "filmyverse-49e33.firebaseapp.com",
  projectId: "filmyverse-49e33",
  storageBucket: "filmyverse-49e33.appspot.com",
  messagingSenderId: "459329962153",
  appId: "1:459329962153:web:45cfa7a0417273b22ea9b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnGIZMkyThdFf_yKRfWowpqbYjirwboyg",
  authDomain: "gamercommerce-seminara.firebaseapp.com",
  projectId: "gamercommerce-seminara",
  storageBucket: "gamercommerce-seminara.appspot.com",
  messagingSenderId: "16648804082",
  appId: "1:16648804082:web:2de0d01026a4b8306b226b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
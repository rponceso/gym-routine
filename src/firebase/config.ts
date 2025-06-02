// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdida48PrhOOMvaF_nzQIRfwoy8_tpBqU",
  authDomain: "gym-routine-73dc9.firebaseapp.com",
  projectId: "gym-routine-73dc9",
  storageBucket: "gym-routine-73dc9.firebasestorage.app",
  messagingSenderId: "423511526411",
  appId: "1:423511526411:web:a793cfe44e88c6d84ecb0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
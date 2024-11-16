// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-next-v3.firebaseapp.com",
  projectId: "insta-next-v3",
  storageBucket: "insta-next-v3.firebasestorage.app",
  messagingSenderId: "918493508999",
  appId: "1:918493508999:web:42867b648d446e41838f22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcsl2_qTWzqS8vTy1YBsFBxWVcllOAe5I",
  authDomain: "chatapp-79aa6.firebaseapp.com",
  projectId: "chatapp-79aa6",
  storageBucket: "chatapp-79aa6.appspot.com",
  messagingSenderId: "337309819866",
  appId: "1:337309819866:web:a699807755164c726216e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth=getAuth(app)
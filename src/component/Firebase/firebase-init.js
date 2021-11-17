import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config";

const firebaseInit =()=>{
   initializeApp(firebaseConfig);
}

// Initialize Firebase
export default firebaseInit;
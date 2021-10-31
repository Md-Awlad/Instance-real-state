import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config";

const firebaseInitApp =()=>{
    const app = initializeApp(firebaseConfig);
}
export default firebaseInitApp;



import firebaseInitApp from "../component/Firebase/firebaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInitApp();
const useFirebase = ()=>{
    const [error, setError] = useState('');
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    // google login
    const googleLOgin =()=> {
      return  signInWithPopup(auth,googleProvider)
       
    };
    // logout function 
    const logout =()=>{
        setLoading(true)
        signOut(auth)
        .then(result=>{
            setUser({});
        })
        .finally(()=>setLoading(false))
    }
    // get login user data 
    useEffect(()=>{
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            } 
            setLoading(false)
          });
         
    },[])
    // retun items 
return{
    googleLOgin,
    error,
    user,
    logout,
    setLoading,loading
}
}
export default useFirebase;
import firebaseInit from "../firebase/firebase-init";
import { getAuth, createUserWithEmailAndPassword,updateProfile,onAuthStateChanged,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInit();
const useFirebase=()=>{
    const [error,setError] = useState('');
    const [user,setUser] = useState({});
    const [isloading,setIsloading] = useState(true);
    const [isAdmin,setIsadmin] = useState(false);
    const auth = getAuth();

    const createUser=(email,password,username,history)=>{
      setIsloading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            updateUsername(username);
            saveUser(email,username)
            history.replace('/')
        })
        .catch(error=>{
            setError(error.code)
        })
        .finally(()=>setIsloading(false))
    }
    // update username 
    const updateUsername=(username)=>{
      setIsloading(true)
        updateProfile(auth.currentUser, {
            displayName: username
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            setError(error.code)
          })
          .finally(()=>setIsloading(false))
    }
    // signin user 
    const signinUser=(email,password,history,location)=>{
      setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || 'home';
    history.replace(destination)
  })
  .catch((error) => {
    setError(error.message)
  })
  .finally(()=>setIsloading(false))
    }
    // logout user 
    const logout=()=>{
      setIsloading(true)
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsloading(false))
    }
    // save db 
    const saveUser =(email,displayName)=>{
      const user = {email,displayName};
      fetch('http://localhost:5000/user',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
      })
    }
    // is admin check 
    useEffect(()=>{
      fetch(`http://localhost:5000/user/${user.email}`)
      .then(res=>res.json())
      .then(data=>{
        setIsadmin(data.admin)
      })
    },[user.email])
    // get updated user 
    useEffect(()=>{
      setIsloading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsloading(false)
          });
        
    },[])
return{
    createUser,
    error,
    user,
    signinUser,
    logout,
    isloading,
    isAdmin
}
}
export default useFirebase;
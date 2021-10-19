import { useState } from "react";
import firebaseInit from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut    } from "firebase/auth";
import { useEffect } from "react";

firebaseInit()
const useFirebase =()=>{
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth()
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLogin, setIslogin] = useState(false);
const [error, setError]= useState('');
const [user, setUser] =useState({});
const [isLoading, setIsloading] = useState(true)

// google login singup 
const googleLogin =()=>{
    setIsloading(true)
   return signInWithPopup(auth,googleProvider)
}
// login using email password 
const createUseremail =(e)=>{
    if(isLogin){
        createAccount();
    }else{
        loginAccount()
    }
    e.preventDefault();
}
// create account 
const createAccount=()=>{
    setIsloading(true)
   return createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
        updateProfileInfo()
})
.catch(error=>{
    setError(error.code)
})
.finally(()=> setIsloading(false))
}
// update profile 
const updateProfileInfo=()=>{
    updateProfile(auth.currentUser, {
        displayName:name
    })
}
// login account 
const loginAccount=()=>{
    setIsloading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{  
        console.log(result.user)
    })
    .catch(error=>{
        setError(error.code)
    })
    .finally(()=>setIsloading(false))
}
// logut system here 
const logOut =()=>{
    setIsloading(true)
    signOut(auth)
    .then(result=>{
        setUser({})
    })
    .catch(error=>{
        setError(error.code)
    })
    .finally(()=>setIsloading(false))
}
// Check login user 
useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser(user)
        }
        setIsloading(false)
    })
   
},[])
// get name value 
const getName =(e)=>{
setName(e.target.value)
}
// get email value 
const getEmail =(e)=>{
setEmail(e.target.value)
}
// get Pass value 
const getPass =(e)=>{
setPassword(e.target.value)
}
// const get login or not 
const getPosition =(e)=>{
    setIslogin(e.target.checked)
}
return{
    getName,
    getEmail,
    getPass,
    getPosition,
    createUseremail,
    googleLogin,
    error,
    setError,
    isLogin,
    user,
    logOut,
    createAccount,
    setIsloading,
    isLoading
}
}
export default useFirebase;
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const {googleLOgin,error,setLoading} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const currntLoation = location.state?.from || '/home'
      const handleGoogleLogin=()=>{
        setLoading(true)
        googleLOgin()
        .then(result=>{
            history.push(currntLoation)
        })
        .finally(()=>setLoading(false))
      }
   
    return (
        <div className='login-form'>
            <div className="container">
                <div className="form-body">
                <h1>Login Now</h1>
                
                <button onClick={handleGoogleLogin}><i className="fab fa-google"></i> Google Login</button>
                <p>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
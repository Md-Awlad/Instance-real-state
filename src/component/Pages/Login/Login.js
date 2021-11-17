import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const {signinUser,error}=useAuth();
    const location = useLocation()
    const history = useHistory()
    const [email,setEmail]= useState('');
    const [pass,setPass] =useState('');
    const getEmail=(e)=>{
        console.log(e.target.value)
        const email = e.target.value;
        setEmail(email);
    }
    const getPassword=(e)=>{
        console.log(e.target.value)
        const pass = e.target.value;
        setPass(pass);
    }
    // submit user 
    const submitUser=(event)=>{
        signinUser(email,pass,history,location);
    event.preventDefault();

    }
    return (
        <div className='section-container'>
        <div className='container'>
        <div className="from-inner">
            <p className='text-center text-danger'><b>{error}</b></p>
            <h1>Login</h1>
        <form onSubmit={submitUser}>
  <div class="mb-3">
    <input onBlur={getEmail} placeholder='Email Address' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <input onBlur={getPassword} placeholder='Password' type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
<br/>
<p>New Here? <Link to="/signup">Create Account</Link></p>
        </div>
        </div>
        </div>
    );
};

export default Login;
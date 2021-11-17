import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {
    const history = useHistory()
    const {createUser,error,user}= useAuth()
    const [username, setUsername] = useState('');
    const [email,setEmail]= useState('');
    const [pass,setPass] =useState('');
    const getUsername=(e)=>{
        console.log(e.target.value)
        const username = e.target.value;
        setUsername(username);
    }
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
        createUser(email,pass,username,history);
    event.preventDefault();

    }
    console.log(user)
    return (
        <div>
            <div className='section-container'>
        <div className='container'>
        <div className="from-inner">
            <h1>Create Account</h1>
        <form onSubmit={submitUser}>
  <div class="mb-3">
    <input onBlur={getUsername} placeholder='Username' type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <input onBlur={getEmail} placeholder='Email Address' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <input onBlur={getPassword} placeholder='Password' type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Create</button>
</form>
<br/>
<p>Already A Member? <Link to="/login">Login</Link></p>
<h1>{error}</h1>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Signup;
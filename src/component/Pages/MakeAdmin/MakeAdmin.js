import React, { useState } from 'react';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const [email,setEmail]= useState('');
    const getEmail=(e)=>{
        setEmail(e.target.value)
    }
    const makeAdmin=(e)=>{
        const user = {email};
        fetch('https://stormy-citadel-14201.herokuapp.com/user/admin',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert('Made Admin successfull')
            }
        });

        e.preventDefault()
    }
    return (
        <div className='section-container'>
            <div className="container">
                <h1 className='section-title'>Make An Admin</h1>
                <form className='make-admin mx-auto' action="">
            <div class="input-group mb-3">
            <input onBlur={getEmail} type="text" class="p-2 form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button onClick={makeAdmin} class="btn btn-info text-white" type="button" id="button-addon2">Submit</button>
            </div>
                </form>
            </div>
            
        </div>
    );
};

export default MakeAdmin;
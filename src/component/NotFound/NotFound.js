import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css'

const NotFound = () => {
    const history = useHistory();
    const backHomeHandle =()=>{
        history.push('/home')
    }
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h3>Page Not found</h3>
            <button onClick={backHomeHandle} className='header-button1'>Home Page</button>
        </div>
    );
};

export default NotFound;
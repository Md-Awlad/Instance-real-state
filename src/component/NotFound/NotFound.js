import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='text-center not-found'>
            <h1 className='mb-4'>404 Page Not Found</h1>
            <button className='button-top'><Link to='/home'>Back To home</Link></button>
        </div>
    );
};

export default NotFound;
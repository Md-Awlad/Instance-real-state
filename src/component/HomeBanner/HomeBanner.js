import React from 'react';
import {Button as button} from 'react-bootstrap';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className='banner'>
            <div className="containers"  style={{width: '65%', margin: 'auto'}}>
             <p className="header-text">START LEARNING FROM HOME
            </p>
            <h1>Connect With Our Expert And Start Learning Today</h1>
            <p className='header-button'>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
            <button className='header-button1'>Find Course</button>
            <button className='header-button2'>Explore More</button>
            </div>
            <div className="overly"></div>
            
        </div>
    );
};

export default HomeBanner;
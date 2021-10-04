import React from 'react';
import { useHistory } from 'react-router';
import './HomeBanner.css'

const HomeBanner = () => {
    const history = useHistory()
    const allCoursehandler =()=>{
        history.push('/services')
    }
    return (
        <div className='banner'>
            <div className="containers"  style={{width: '65%', margin: 'auto'}}>
             <p className="header-text">START LEARNING FROM HOME
            </p>
            <h1>Connect With Our Expert And Start Learning Today</h1>
            <p className='header-button'>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
            <button onClick={allCoursehandler} className='header-button1'>Find Course</button>
            <button className='header-button2'>Explore More</button>
            </div>
            <div className="overly"></div>
            
        </div>
    );
};

export default HomeBanner;
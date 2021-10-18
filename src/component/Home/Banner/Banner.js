import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
               <div className="row">
               <div className="banner-info col-md-9 col-sm-12">
               <p className='banner-bold'>Health Service</p>
                <h1>Your Health is Our Top Priority</h1>
                <p>We provides always our best services for our clients and  always <br /> try to achieve our client's trust and satisfaction.</p>
                <button className='button-top'>Make Appointment</button>
               </div>
               </div>
            </div>
        </div>
    );
};

export default Banner;
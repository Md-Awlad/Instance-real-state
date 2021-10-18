import React from 'react';
import './Doctor.css'
const Doctor = (props) => {
    const {img,name,specialist} = props.values
    return (
        <div className='single-doctor'>
             <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {specialist}
                </p>
                <p className='footer-social'><i className="fab fa-instagram"></i><i className="fab fa-twitter"></i><i className="fab fa-whatsapp"></i><i className="fab fa-youtube"></i></p>
            </div>
            </div>
        </div>
    );
};

export default Doctor;
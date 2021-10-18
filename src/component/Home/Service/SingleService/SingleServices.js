import React from 'react';
import './SingleService.css'
const SingleServices = (props) => {
    const {img,title,description} = props.values
    return (
        <div>
           <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button href="feg" className="button-top">Go somewhere</button>
            </div>
            </div>
        </div>
    );
};

export default SingleServices;
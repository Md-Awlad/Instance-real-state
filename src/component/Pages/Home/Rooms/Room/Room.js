import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css'
const Room = (props) => {
    const {name,img,description,_id}= props.values
    return (
        <div className='col'>
           <div className="card room-card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="separetor"></div>
                <p className="card-text">{description.slice(0,100)}</p>
                <Link to={`/place-order/${_id}`} className="btn button-use">BOOK NOW</Link>
            </div>
            </div> 
        </div>
    );
};

export default Room;
import React from 'react';
import { useHistory } from 'react-router';
import './SingleService.css'
const SingleServices = (props) => {
    const {img,title,description,id} = props.values
    const history = useHistory();
    const handleShowInfo =(e)=>{
        history.push(`/service-info/${e}`)
    }
    return (
        <div>
           <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button onClick={()=>handleShowInfo(id)} href="feg" className="button-top">More Info</button>
            </div>
            </div>
        </div>
    );
};

export default SingleServices;
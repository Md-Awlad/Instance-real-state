import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServiceInfo.css'

const ServiceInfo = () => {
    const {serviceid} = useParams();
    const {service} = useServices();
    const checkRelated = service?.find(item=> parseFloat(serviceid) === item.id);
    console.log(checkRelated)
    return (
        <div className='service-info '>
           <div className="container">
               <img src={checkRelated?.img} alt="" />
               <h1>{checkRelated?.title}</h1>
               <p>{checkRelated?.moreinfo}</p>
           </div>
        </div>
    );
};

export default ServiceInfo;
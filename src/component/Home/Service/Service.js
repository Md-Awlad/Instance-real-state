import React from 'react';
import useServices from '../../../hooks/useServices';
import './Services.css'
import SingleServices from './SingleService/SingleServices';
const Service = () => {
    const {service} = useServices()
    return (
        <div className='services'>
            <div className="container">
            <p className='section-p'>Services</p>
            <h2 className='section-h2'>Our Healthcare Services</h2>
            <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1  row-cols-lg-3 g-4">
        {
            service.map(item=><SingleServices key={item.id} values={item} ></SingleServices>)
        }
            </div>
            </div>
        </div>
    );
};

export default Service;
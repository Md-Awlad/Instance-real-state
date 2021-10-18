import React from 'react';
import useServices from '../../../hooks/useServices';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const {doctor} =useServices()
    return (
             <div className='doctors'>
            <div className="container">
            <p className='section-p'>Doctors</p>
            <h2 className='section-h2'>Meet Our Qualified Doctors</h2>
            <div className="row row-cols-md-2 row-cols-sm-1 row-cols-1  row-cols-lg-4 g-4">
        {
            doctor.map(item=><Doctor key={item.id} values={item} ></Doctor>)
        }
            </div>
            </div>
        </div>
    );
};

export default Doctors;
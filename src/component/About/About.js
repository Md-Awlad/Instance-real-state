import React from 'react';
import useServices from '../../hooks/useServices';
import img1 from '../../image/about1.png'
import Doctor from '../Home/Doctors/Doctor/Doctor';
import './About.css'

const About = () => {
    const {doctor} =useServices()
    return (
        <div class='about'>
            <div className="about-top">
            <div className="container">
                <h1 className='text-center fw-bold mb-5'>A Few Words About Our Clinic</h1>
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="about-text">
                        <h1>Who We Are</h1>
                        <p>We are a competent team of dentists who completely understand the importance of quality dental in a busy life. Our practice is based on high standards and new technologies which reflect on beautiful and healthy smiles of our clients.</p>
                        <button className='button-top'>Services</button>
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
            </div>
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
        </div>
    );
};

export default About;
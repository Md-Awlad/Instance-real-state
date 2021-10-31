import React from 'react';
import './Service.css'
const Service = () => {
    return (
        <div className='service-home'>
            <div className="container">
                <h2 className='section-title'>Services</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                <div className="card h-100">
                <i class="card-img-top fas fa-wifi"></i>
                <div className="card-body">
                    <h5 className="card-title">WIFI ENVIRONMENT</h5>
                    <div className="separetor"></div>
                    <p className="card-text">you will get 24/7 wifi serviced with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
                <div className="col">
                <div className="card h-100">
                <i class="card-img-top fas fa-gamepad"></i>
                <div className="card-body">
                    <h5 className="card-title">RELAXATION</h5>
                    <div className="separetor"></div>
                    <p className="card-text">you will get 24/7 wifi serviced with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
                <div className="col">
                <div className="card h-100">
                <i class="card-img-top fas fa-bahai"></i>
                <div className="card-body">
                    <h5 className="card-title">SMOOTH PARALLAX</h5>
                    <div className="separetor"></div>
                    <p className="card-text">you will get 24/7 wifi serviced with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
                <div className="col">
                <div className="card h-100">
                <i class="card-img-top fas fa-thermometer"></i>
                <div className="card-body">
                    <h5 className="card-title">CONFERENCE ROOMS</h5>
                    <div className="separetor"></div>
                    <p className="card-text">you will get 24/7 wifi serviced with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
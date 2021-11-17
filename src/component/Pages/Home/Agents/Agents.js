import React from 'react';
import agent1 from '../../../../image/agent1.jpg';
import agent2 from '../../../../image/agent2.jpg';
import agent3 from '../../../../image/agent3.jpg';
const Agents = () => {
    return (
        <div className='section-container'>
            <div className="container">
                <h1 className='section-title'>Real Estate Agents</h1>
                <div className="row row-cols-1 row-cols-md-4 row-cols-sm-1 g-4">
                        <div className="col">
                <div className="card">
                <img src={agent1} width='50px' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title card-name">Ashley Mason</h5>
                    <p className="card-text"><i class="fas fa-phone"></i> 1-800-7650-986</p>
                </div>
                </div>
            </div>
                        <div className="col">
                <div className="card">
                <img src={agent2} width='50px' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title card-name">Ashley Mason</h5>
                    <p className="card-text"><i class="fas fa-phone"></i> 1-800-7650-986</p>
                </div>
                </div>
            </div>
                        <div className="col">
                <div className="card">
                <img src={agent3} width='50px' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title card-name">Ashley Mason</h5>
                    <p className="card-text"><i class="fas fa-phone"></i> 1-800-7650-986</p>
                </div>
                </div>
            </div>
                        <div className="col">
                <div className="card">
                <img src={agent1} width='50px' className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title card-name">Ashley Mason</h5>
                    <p className="card-text"><i class="fas fa-phone"></i> 1-800-7650-986</p>
                </div>
                </div>
            </div>
                </div>
            </div>
            
        </div>
    );
};

export default Agents;
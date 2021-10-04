import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useLoadCourse from '../loadCourse/loadCourse';
import './AllServices.css'

const AllServices = () => {
    const [courses] = useLoadCourse();
    return (
        <div className='all-service'>
               <Container>
                   <div className="home-servic-text">
                  
                   <h1>Explore All Services</h1>
                   </div>
           <Row  xs={1} md={3} xl={3} className="g-4">
           { courses && 
            courses.map(item => <Course items={item} key={item.id}></Course>)
            }
            </Row>
            </Container>
           </div>
    );
};

export default AllServices;
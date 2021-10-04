import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useLoadCourse from '../loadCourse/loadCourse';

const AllServices = () => {
    const [courses] = useLoadCourse();
    console.log(courses)
    return (
        <div className='home-service'>
               <Container>
                   <div className="home-servic-text">
                   <p>Services</p>
                   <h1>Explore Popular Services</h1>
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
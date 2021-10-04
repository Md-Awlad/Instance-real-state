import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Course from '../Course/Course';
// import {Button} from 'react-bootstrap';
import HomeBanner from '../HomeBanner/HomeBanner';
import useLoadCourse from '../loadCourse/loadCourse';
import './Home.css'

const Home = () => {
    const [courses] = useLoadCourse();
    const history = useHistory();
    const allCoursehandler =()=>{
        history.push('/services')
    }
    return (
        <div className='home-main'>
           <div className='home-banner'>
               <HomeBanner></HomeBanner>
           </div>

           <div className='home-service'>
               <Container>
                   <div className="home-servic-text">
                   <p>Services</p>
                   <h1>Explore Popular Services</h1>
                   </div>
           <Row  xs={1} md={2} xl={2} className="g-5">
           { courses && 
            courses.slice(0,4).map(item => <Course items={item} key={item.id}></Course>)
            }
            </Row>
            <div style={{textAlign: 'center',marginTop: '60px'}} className="all-courses-button">
            <button onClick={allCoursehandler} className='header-button1'>All Services</button>
            </div>
            </Container>
            <div className="for-sapce"></div>
           </div>
           
        </div>
    );
};

export default Home;
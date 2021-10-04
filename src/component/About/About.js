import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
             <Container>
            <div className="about-us-text">
               
            <p style={{color: '#FF630E',fontWeight: '600'}}>WHO WE ARE</p>
            <h1>We Are Providing The Best Quality Online Courses. Our All Instructors Are High Expert</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
            </div>
            </Container>
            <div className="about-us-card">
                <Container>
                <p style={{color: '#FF630E',fontWeight: '600'}}>BEST LEARNING PLATFORM</p>
                <h1>Why We Are The Best</h1>
                <Row xs={1} md={3} xl={3} className="g-5">
                    <Col>
                    <Card className='about-card' border="primary" style={{ width: '' }}>
                    <Card.Body>
                        <p className='card-icon'><i className="fas fa-medal"></i></p>
                    <Card.Title className='card-title'><h2>High Quality Courses</h2></Card.Title>
                    <Card.Text className='card-dis'>
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                    </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
                    <Col>
                    <Card className='about-card' border="primary" style={{ width: '' }}>
                    <Card.Body>
                        <p className='card-icon'><i className="fas fa-user-alt"></i></p>
                    <Card.Title className='card-title'><h2>Expert Instructors</h2></Card.Title>
                    <Card.Text className='card-dis'>
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                    </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
                    <Col>
                    <Card className='about-card' border="primary" style={{ width: '' }}>
                    <Card.Body>
                        <p className='card-icon'><i className="fas fa-shield-alt"></i></p>
                    <Card.Title className='cards-title'><h2>Life Time Access</h2></Card.Title>
                    <Card.Text className='card-dis'>
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                    </Card.Text>
                    </Card.Body>
                </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import img from '../../image/logo-white-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, faLinkedin,faInstagram} from "@fortawesome/free-brands-svg-icons"




const Footer = () => {
    return (
        <div className='footer-area'>
            <Container>
            <Row>
            <Col xs={6} md={4} sm={12}>
           <img src={img} style={{width: '50%'}} alt="" />
           <p>We are providing high-quality online courses for about ten years. Our all instructors expert and highly experienced. We provide all kinds of course materials to our students</p>
           <b>Follow Us</b>
           <p className='footer-icon'>
               <FontAwesomeIcon className='' size='2x'  icon={faFacebook } />
               <FontAwesomeIcon className='' size='2x' icon={faTwitterSquare } />
               <FontAwesomeIcon className='' size='2x' icon={faLinkedin } />
               <FontAwesomeIcon className='' size='2x' icon={faInstagram } />
               </p>
            </Col>
            <Col xs={12} md={4} sm={12}>
            <h2>Categories</h2>
            <ul>
                <li>Photoshop</li>
                <li>Art</li>
                <li>Design</li>
                <li>Editing</li>
                <li>Course</li>
            </ul>
            </Col>
            <Col xs={6} md={4} sm={12}>
           <h2>Contact Us</h2>
           <p>250/A Oval Street, Mount View, London, United Kingdom</p>
           <p>support@example.com</p>
           <p>+98 12345 67890</p>
            </Col>
        </Row>
            </Container>
        </div>
    );
};

export default Footer;
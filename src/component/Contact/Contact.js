import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-us'>
            <Container>
                <h1>Contact us</h1>
            <Row>
            <Col xs={12} md={12} sm={12}>
           <div className="form-styler">
                    <Form className='from-bgs'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>
           </div>
            </Col>

        </Row>
            </Container>
        </div>
    );
};

export default Contact;
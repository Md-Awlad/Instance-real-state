import React from 'react';
import { Container, Form, FormControl, Nav, Navbar,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../image/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div>
           <Navbar bg="" expand="lg">
  <Container>
    <Navbar.Brand href="#"><img src={img} style={{width: '50%'}} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="ms-auto my-2 my-lg-0 header-link"
        style={{padding: '10px 0px' }} navbarScroll >
        <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
        <Nav.Link><Link to='/services'>Service</Link></Nav.Link>
        <Nav.Link ><Link to='/about'>About</Link></Nav.Link>
        <Nav.Link href="#action4">Info</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success header-button1">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> 
        </div>
    );
};

export default Header;
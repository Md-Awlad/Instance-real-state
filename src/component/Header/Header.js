import React from 'react';
import img from '../../image/logo.png'
import './Header.css'

const Header = () => {
    return (
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="grg">
        <img src={img} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="frf">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="g">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="g">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="g">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import img from '../../image/logo.png'
import './Header.css'

const Header = () => {
  const {user,logOut} = useFirebase();
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
          <NavLink className='nav-link'  aria-current="page" to='/home'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/login'>About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/login'>About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/login'>
          {user?.email ? <a href onClick={logOut}>Logout</a> : "Login"}
          </NavLink>
        </li>
      </ul>
      <span id="icon-header" class="navbar-text">
      {user?.email && `| Username: ${user?.displayName}`  }
      </span>
    </div>
  </div>
</nav> 
    );
};

export default Header;
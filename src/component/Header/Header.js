import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../image/logo.png'
import './Header.css'

const Header = () => {
  const {user,logOut} = useAuth();
  console.log(user)
    return (
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
   
      <Link to="/home" className="navbar-brand">
      <img src={img} alt="" />
      </Link>
        
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className='nav-link'  aria-current="page" to='/home'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/about'>About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/login'>
          {user?.email ? <a href className='logout-button button-top' onClick={logOut}>Logout</a> : "Login"}
          </NavLink>
        </li>
      </ul>
      <span id="icon-header" className="navbar-text">
      {user?.photoURL ? (<img src={user?.photoURL} alt=".."/>) :  (<div className=" text-info p-1" style={{borderRadius:'50px'}}>{user?.displayName?.slice(0,5)}</div>)}
      </span>
    </div>
  </div>
</nav> 
    );
};

export default Header;
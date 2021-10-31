import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../image/logo.png'
import './Header.css'

const Header = () => {
  const {user,logout} = useAuth();
  console.log(user)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href=" "><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        {user?.email && 
        <li className="nav-item">
        <NavLink to="/my-order" className="nav-link">My orders</NavLink>
        </li>}
        {user?.email && 
        <li className="nav-item">
        <NavLink to="/manage-order" className="nav-link">Manage order</NavLink>
        </li>
            }
        {user?.email && 
        <li className="nav-item">
        <NavLink to="/add-service" className="nav-link">Add Service</NavLink>
        </li>
            }
        <li className="nav-item">
        <NavLink to="/login" className="nav-link">{user.email ? <button onClick={logout}>Logout</button> : "Login"}</NavLink>
        </li>
      </ul>
      <span className="navbar-text">
      <b className='header-name'> {user?.displayName}</b>
      </span>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;
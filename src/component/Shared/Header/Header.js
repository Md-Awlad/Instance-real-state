import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../../image/logo.png'
import './Header.css'
import { isAdmin } from '@firebase/util';
const Header = () => {
  const {user,logout,isAdmin}=useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          
          <Link to='/' className='navbar-brand'><img src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink to='/home' className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/explore' className="nav-link">Explore</NavLink>
              </li>
              <li class="nav-item dropdown">
          {user.email && <a class="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dashboard
          </a>}
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {
              isAdmin ? 
              <div>
              <li><NavLink to='/make-admin' className="dropdown-item">Make Admin</NavLink></li> 
              <li><NavLink to='/add-product' className="dropdown-item">Add Product</NavLink></li> 
              <li><NavLink to='/manage-products' className="dropdown-item">Manage Products</NavLink></li> 
              </div>
              :
              <div>
              <li><NavLink to='/my-order' className="dropdown-item">MY Order</NavLink></li>
              <li><NavLink to='/user-review' className="dropdown-item">Review</NavLink></li>
              <li><NavLink to='/payment' className="dropdown-item">Payment</NavLink></li>
             </div>
            }
         
          </ul>
        </li>
             {!user.email ? <li className="nav-item">
                <NavLink to='/login' className="nav-link">Login</NavLink>
              </li> : <button className='my-button' onClick={logout}>Logout</button>}
            </ul>
            <span class="navbar-text ms-3">
       <b className='text-info'>{user?.displayName?.slice(0,11)}</b>
      </span>
          </div>
        </div>
      </nav>
    );
};

export default Header;
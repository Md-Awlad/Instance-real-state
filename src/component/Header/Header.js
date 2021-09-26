import React from 'react';
import logo from '../../photos/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <h1 className='budget'>Find Perfect Insta Influencers</h1>
            <hr />
            <p>We have a new Brand which we want to promote through Instagram influencer</p>
            <h1>Total Budget: 150M</h1>
           
        </header>
    );
};

export default Header;
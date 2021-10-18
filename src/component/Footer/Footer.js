import React from 'react';
import './Footer.css'
import img from '../../image/logo-white.png'
import img1 from '../../image/1.jpg'
import img2 from '../../image/2 (1).jpg'
import img3 from '../../image/2.jpg'
import img4 from '../../image/3.jpg'
import img5 from '../../image/first.jpg'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-12 col-12 ">
                <img src={img} alt="" />
                <p>203, Envato Labs, Behind Alis Steet, Melbourne, Australia.</p>
                <p><i className="fas fa-phone"></i> 123-456-789</p>
                <p><i className="fas fa-envelope"></i> contact@yourdomain.com</p>
                <p><i className="fas fa-globe-americas"></i> www.yourdomain.com</p>
                <p className='footer-social'><i className="fab fa-facebook-f"></i><i className="fab fa-instagram"></i><i className="fab fa-twitter"></i><i className="fab fa-whatsapp"></i><i className="fab fa-youtube"></i></p>
            </div>
            <div className="col-md-4 col-sm-12 col-12 footer-links">
           <h3>Useful Links</h3>
           <p>Home</p>
           <p>About</p>
           <p>Service</p>
           <p>Campagin</p>
            </div>
            <div className="col-md-4 col-sm-12 col-12 footer-insta">
                <h3>Instagram</h3>
                <div className="row row-cols-2 row-cols-md-3 row-cols-sm-2 g-3">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2021 Imros. All Rights Reserved by WebbyImros</p>
            </div>
        </footer>
    );
};

export default Footer;
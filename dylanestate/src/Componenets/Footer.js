import React from 'react';
import logo from "../Assets/logo.png";
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-content">
                <div className="footer-logo">
                    <h2 className="footer-title">
                        <img src={logo} alt="Logo" className='logo-image' />
                        Dylan Estate
                    </h2>
                </div>
                <div className="footer-links">
                    <div>
                        <ul>
                            <li><a href="#" className="footer-link">Home</a></li>
                            <li><a href="#" className="footer-link">Properties</a></li>
                            <li><a href="#" className="footer-link">List Your Property</a></li>
                            <li><a href="#" className="footer-link">Saved Searches</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#" className="footer-link">About Mira Road</a></li>
                            <li><a href="#" className="footer-link">Emi Calculator</a></li>
                            <li><a href="#" className="footer-link">Testimonials</a></li>
                            <li><a href="#" className="footer-link">Explore Neighborhood</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#" className="footer-link">About us</a></li>
                            <li><a href="#" className="footer-link">Contact Us</a></li>
                            <li><a href="#" className="footer-link">FAQs</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-contact">
                    <div className='contact-item'>
                        <h2 className='contact-title'>CONTACT US</h2>
                        <p className='contact-address'>B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti</p>
                    </div>
                    <div className='contact-item'>
                        <h2 className='contact-title'>OFFICE HOURS</h2>
                        <p className='contact-address'>B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div>
                    <p>© 2024 Dylan Estates. All rights reserved. Dylan Estates - Your Neighborhood Experts</p>
                    <div className="footer-bottom-links">
                        <a href="#" className="footer-bottom-link">Privacy Policy</a> | 
                        <a href="#" className="footer-bottom-link"> Terms & Conditions</a>
                    </div>
                </div>
                <div className="footer-bottom-options">
                    <div className="language-option">
                        <span className="option-title">Language:</span>
                        <a href="#" className="option-link">English (IN)</a>
                    </div>
                    <div className="currency-option">
                        <span className="option-title">Currency:</span>
                        <a href="#" className="option-link">₹ INR</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

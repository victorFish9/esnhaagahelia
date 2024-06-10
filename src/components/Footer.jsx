import React from 'react';
// Import Instagram icon from react-icons library
import './css/Footer.css'

function Footer() {
    return (
        <footer className="footer-container">
            <div className="social-icons">
                {/* Instagram icon */}
                <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
                    ESN HH INSTA
                </a>
            </div>
            <div className="address">
                {/* Address */}
                <p>Ratapihantie 13</p>
            </div>
        </footer>
    );
};

export default Footer;

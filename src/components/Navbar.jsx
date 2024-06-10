import React, { useState } from 'react';
// import './css/Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src='src/photo/ESN-logo-full-colour-safe-space-rgb.png' className="navbar-logo" />
                </div>
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    <span className="navbar-toggle-icon">&#9776;</span>
                </button>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

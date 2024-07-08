import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../logo_name.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                
                <div className="navbar-buttons">
                <Link to="/about" className="nav-links">
                        About
                    </Link>
                    <Link to="/contact" className="contact-button">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import './Contact.css';
import logo from '../../logo_no_name.svg'; // Adjust the path to your logo

import { FaGithub, FaLinkedin, FaInstagram, FaGoodreads, FaDeviantart, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <img src={logo} alt="Logo" className="contact-logo" />
        <h1 className="contact-name">Say Hello!</h1>
        <div className="contact-info">
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a href="https://github.com/rashmisudarshan" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a href="https://www.linkedin.com/in/rashmi-sudarshan-654b87157" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </div>
          <div className="contact-item">
            <FaInstagram className="contact-icon" />
            <a href="https://www.instagram.com/rashmi_sudarshan/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="contact-item">
            <FaGoodreads className="contact-icon" />
            <a href="https://www.goodreads.com/user/show/116946246-rashmi-sudarshan" target="_blank" rel="noopener noreferrer">Goodreads</a>
          </div>
          <div className="contact-item">
            <FaDeviantart className="contact-icon" />
            <a href="https://www.deviantart.com/rashmisudarshan" target="_blank" rel="noopener noreferrer">DeviantArt</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:rashmisudarshan01@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
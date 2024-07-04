import React from 'react';
import './App.css';
import reviews from './reviews.svg';
import gallery from './gallery.svg';
import projects from './projects.svg';
import logo from './logo.png';

function App() {
  return (
    <div className="desktop">
      <div className="overlap-group">
        <div className="cards">
          <div className="element-card">
            <img className="graphic" alt="Graphic" src={reviews} />
            <div className="copy">
              <div className="text-wrapper">BOOK REVIEWS</div>
              <div className="div">ANALYSES &amp; OPINIONS</div>
            </div>
          </div>
          <div className="element-card-2">
            <img className="graphic" alt="Graphic" src={gallery} />
            <div className="copy">
              <div className="text-wrapper">ART GALLERY</div>
              <div className="div">ORIGINAL ARTWORK</div>
            </div>
          </div>
          <div className="element-card-3">
            <img className="graphic" alt="Graphic" src={projects} />
            <div className="copy">
              <div className="text-wrapper">PROJECTS</div>
              <div className="div">CODING APPLICATIONS</div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="element-secondary-button">
            <div className="text-wrapper-2">CONTACT</div>
          </div>
          <div className="text-wrapper-3">ABOUT</div>
          <div className="logo-and-font">
            <div className="text-wrapper-4">RASHMI</div>
            <div className="text-wrapper-5">SUDARSHAN</div>
            <img className="logo-and-font-for" alt="Logo and font for" src={logo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

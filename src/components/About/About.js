import React from 'react';
import './About.css';
import profileImage from './Profile_Picture.svg';

const About = () => {
  return (
    <div className="desktop">
    <div className="overlap-group">
    <img src={profileImage} alt="Profile" className="profile-image" />
    <div className="text-container">
    
      <h1 className="heading">Hey There!</h1>
      <p className="paragraph">I’m Rashmi, Nice to meet you! I’m currently a graduate student at Penn State studying to get a Master’s in Software Engineering. I’m also an artist, book worm and lover of all things nerdy. I love learning new things so check out my homepage to see what new rabbit hole I’m currently exploring and feel free to contact me if anything piques your interest!</p>
    
    </div>
    </div>
    </div>
  );
};

export default About;

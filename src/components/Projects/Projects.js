import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Personal Website to document all the things that I do.",
    technologies: "React, Javascript, HTML, CSS, Figma, Git",
    comingSoon: false
    
  },

  {
    id: 4,
    title: "Cyber Security Self Audit",
    description: "Checking my entire digital footprint to make sure I'm following cyber security best practices.",
    technologies: "SQL, Python, Linux, Shell Scripts",
    comingSoon:true
  },


  {
    id: 2,
    title: "Effects of Climate change on Biodiversity",
    description: "Project for my Data Visualization class",
    technologies: "Tableau",
    comingSoon: true
    
  },
  {
    id: 3,
    title: "CoinTrack",
    description: "Project for my Mobile Technologies class",
    technologies: "Java, Android",
    comingSoon: true
    
  },
  
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1 className="heading">My Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
            <h2>{project.title}</h2>
            {project.comingSoon && <span className="coming-soon">Coming Soon</span>}
            <p className="technologies"> {project.technologies}</p>
            <p className="description">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

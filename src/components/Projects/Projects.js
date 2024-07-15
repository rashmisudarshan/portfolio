import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Website Portfolio",
    description: "Description of project 1"
  },
  {
    id: 2,
    title: "Effects of Climate change on Biodiversity",
    description: "Description of project 2"
  },
  {
    id: 3,
    title: "CoinTrack",
    description: "Description of project 3"
  },
  {
    id: 4,
    title: "Cyber Security Self Audit",
    description: "Description of project 4"
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
            <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

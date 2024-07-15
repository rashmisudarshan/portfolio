import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const projects = [
  { id: 1, title: 'Project One', description: 'Detailed description of Project One' },
  { id: 2, title: 'Project Two', description: 'Detailed description of Project Two' },
  // Add more projects as needed
];

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-detail-page">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetailPage;

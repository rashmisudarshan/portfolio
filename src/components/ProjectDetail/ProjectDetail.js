import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "Personal Website to document all the things that I do.",
    technologies: "React, Javascript, HTML, CSS, Figma, Git",
    githubLink: "https://github.com/rashmisudarshan/rashmisudarshan.github.io", // Replace with your GitHub project link
    longDescription: "This project (like most projects) started off with a much smaller scope in my head. Initially it was supposed to be a profile for my resume to put all my coding projects on. Then I thought to myself, why not just create an online journal for all my hobbies (Because I have a lot of them). To follow the principles of agile, I started with a basic outline of the frontend. The project does have a ways to go still. The process for iteration one was first to create the designs for all the webpages. For this I learned how to use figma, the basic principles of visual design and web design. Then I coded the figma files into react components and put it together to form the user interface. I did learn a bit of tailwind.css to help with the formatting of this project but ended up not using it for the final first iteration. This project is currently hosted using github pages.The future of this project is to add all the rest of my hobbies, build a backend using express and deploy it on AWS and also setup the MongoDB database (The MERN stack basically).",
    comingSoon: false
  },

  {
    id: 4,
    title: "Cyber Security Self Audit",
    description: "Checking my entire digital footprint to make sure I'm following cyber security best practices.",
    technologies: "SQL, Python, Linux, Shell Scripts",
    githubLink: "https://github.com/yourusername/cyber-security-audit", // Replace with your GitHub project link
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec turpis ut lorem lobortis pellentesque. Sed ultricies ipsum ut odio tincidunt suscipit. Nulla facilisi. Integer condimentum erat at neque hendrerit rutrum. Aenean eget odio vel lectus feugiat convallis. Sed ultricies, felis id sodales molestie, augue purus tempus felis, ac posuere orci dolor in metus. Proin vitae nulla sed sapien posuere eleifend. Sed id orci sit amet mi gravida malesuada. Nunc gravida ligula ac sapien pretium, sed ultricies urna cursus. Nullam vel justo in metus dignissim fermentum. Ut et maximus sem. Nunc tincidunt purus in lectus tincidunt, non congue sapien tempor. Nam a justo eget eros pharetra blandit non ut nisi.",
    comingSoon: true
  },

  {
    id: 2,
    title: "Effects of Climate change on Biodiversity",
    description: "Project for my Data Visualization class",
    technologies: "Tableau",
    githubLink: "https://github.com/yourusername/climate-change-biodiversity", // Replace with your GitHub project link
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec turpis ut lorem lobortis pellentesque. Sed ultricies ipsum ut odio tincidunt suscipit. Nulla facilisi. Integer condimentum erat at neque hendrerit rutrum. Aenean eget odio vel lectus feugiat convallis. Sed ultricies, felis id sodales molestie, augue purus tempus felis, ac posuere orci dolor in metus. Proin vitae nulla sed sapien posuere eleifend. Sed id orci sit amet mi gravida malesuada. Nunc gravida ligula ac sapien pretium, sed ultricies urna cursus. Nullam vel justo in metus dignissim fermentum. Ut et maximus sem. Nunc tincidunt purus in lectus tincidunt, non congue sapien tempor. Nam a justo eget eros pharetra blandit non ut nisi.",
    comingSoon: true
  },
  {
    id: 3,
    title: "CoinTrack",
    description: "Project for my Mobile Technologies class",
    technologies: "Java, Android",
    githubLink: "https://github.com/rashmisudarshan/CoinTrack", // Replace with your GitHub project link
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec turpis ut lorem lobortis pellentesque. Sed ultricies ipsum ut odio tincidunt suscipit. Nulla facilisi. Integer condimentum erat at neque hendrerit rutrum. Aenean eget odio vel lectus feugiat convallis. Sed ultricies, felis id sodales molestie, augue purus tempus felis, ac posuere orci dolor in metus. Proin vitae nulla sed sapien posuere eleifend. Sed id orci sit amet mi gravida malesuada. Nunc gravida ligula ac sapien pretium, sed ultricies urna cursus. Nullam vel justo in metus dignissim fermentum. Ut et maximus sem. Nunc tincidunt purus in lectus tincidunt, non congue sapien tempor. Nam a justo eget eros pharetra blandit non ut nisi.",
    comingSoon: true
  },
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
      {project.comingSoon && <span className="coming-soon">Coming Soon</span>}
      <p className="description">{project.description}</p>
      <div className="long-description">
        <p>{project.longDescription}</p>
      </div>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  );
};

export default ProjectDetailPage;

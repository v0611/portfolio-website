import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Job Board App',
      description: 'A job board for users to post and apply for jobs.',
      tech: ['React', 'Spring Boot', 'PostgreSQL'],
      link: 'https://your-job-board-url.com',
    },
    {
      title: 'E-Commerce Platform',
      description: 'An online store with payment integrations.',
      tech: ['MERN Stack', 'Redux', 'PayPal'],
      link: 'https://your-ecommerce-url.com',
    },
  ];

  return (
    <section className="projects container my-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="project-card p-3 mb-4">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="badge bg-secondary me-2">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Mobile-First Checkout Flow',
      description: 'Developed a lightweight, performant checkout UI designed to handle intermittent connectivity and deliver instant user feedback.',
      tech: ['Next.js 14', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB', 'TailwindCSS'],
      code: 'https://github.com/Ginnisthegod/val.git',
      demo: 'https://valsite.vercel.app/'
    },
    {
      title: 'Newhope Hospital Project',
      description: 'Hospital management dashboard with patient records, appointment scheduling, and medical staff coordination for healthcare administration.',
      tech: ['Next.js 14', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'TailwindCSS'],
      code: 'https://github.com/Ginnisthegod',
      demo: '#'
    },
    {
      title: 'Novapay',
      description: 'A modern payment platform built to simplify transactions and financial management.',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
      code: 'https://github.com/Ginnisthegod',
      demo: '#'
    },
    {
      title: 'Educeptis',
      description: 'EdTech platform concept focused on transforming education in Africa through innovative learning solutions. Currently in development.',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
      code: 'https://github.com/Ginnisthegod',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">
        <span className="section-number">02.</span> Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Code
              </a>
              <a href={project.demo} className="project-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

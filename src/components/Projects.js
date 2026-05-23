import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'TechDevSocial',
      description: 'A developer-focused social platform where tech professionals connect, share knowledge, and collaborate. Contributed to the frontend, building responsive UI components, authentication flows, and interactive feeds with a focus on performance and clean user experience.',
      tech: ['Next.js 14', 'TypeScript', 'TailwindCSS'],
      code: 'https://github.com/Ginnisthegod/TechDevSocials.git',
      demo: 'https://techdevsocial.vercel.app/auth/login'
    },
    {
      title: 'ECHO',
      description: 'An EV ride Hailing app that connects riders with nearby electric vehicles for a sustainable and convenient transportation experience. Contributed to the frontend, building responsive UI components, authentication flows, and interactive feeds with a focus on performance and clean user experience.',
      tech: ['Next.js 14', 'TypeScript', 'TailwindCSS'],
      code: 'https://github.com/Ginnisthegod/ECHO-WEB-.git',
      demo: 'https://echo-web-silk.vercel.app/'
    },
    {
      title: 'Valentine Site',
      description: 'A fun and interactive Valentine\'s Day web experience featuring animated UI, heartfelt messages, and smooth transitions to surprise a special someone.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      code: 'https://github.com/Ginnisthegod/val.git',
      demo: 'https://val-rki2.vercel.app/'
    },
    {
      title: 'UniHubSocial',
      description: 'A social media platform built exclusively for university students to connect, share updates, and engage with their campus community. Contributed to the frontend, building responsive UI components and interactive feeds.',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
      code: 'https://github.com/Ginnisthegod/unihubsocials.git',
      demo: 'https://unihubsocial.netlify.app/'
    },
    
    {
      title: 'Educeptis',
      description: 'An EdTech platform focused on transforming education in Africa through innovative learning solutions. Contributed to the frontend, building responsive UI components and intuitive user interfaces. Currently in development.',
      tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
      code: 'https://github.com/Ginnisthegod/Educeptis.git',
      demo: 'https://eduresumebuilder.netlify.app/'
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

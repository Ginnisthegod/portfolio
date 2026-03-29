import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [

    {
      title: 'Junior Frontend Developer',
      company: 'Fab Group ',
      location: 'Lagos, Nigeria',
      duration: 'Feb 2024 — August 2024',
      description: 'Developed and maintained responsive web applications, ensuring 100% alignment with project goals and user requirements. Partnered with backend engineers to integrate front-end components with MongoDB, ensuring reliable data flow and state management for user-facing dashboards. Optimized code and assets to improve load times and user experience on mobile devices and low-bandwidth connections. Translated visual wireframes into functional interfaces, participating in design reviews to improve platform usability and accessibility.'
    },
    {
      title: 'Freelance Frontend Developer',
      company: 'Self-Employed',
      location: 'Lagos, Nigeria',
      duration: 'August 2024 — Present',
      description: 'Designed and developed responsive websites and landing pages for small businesses using React, Node.js, and MongoDB. Focused on clean UI, backend API integration, accessibility, and mobile optimization.'
    },
    
    {
      title: 'Frontend Developer',
      company: 'Mfm Magodo Youth Church',
      location: 'Lagos, Nigeria',
      duration: 'Jun 2025 — Present',
      description: 'Developed and deployed a modern church management system with Next.js, TypeScript, Node.js, Express.js, and MongoDB.'
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">
        <span className="section-number">03.</span> Experience
      </h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company} • {exp.location}</p>
                </div>
                <span className="duration">{exp.duration}</span>
              </div>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

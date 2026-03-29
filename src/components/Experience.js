import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Freelance Frontend Developer',
      company: 'Self-Employed',
      location: 'Lagos, Nigeria',
      duration: 'August 2024 — Present',
      description: 'Designed and developed responsive websites and landing pages for small businesses using React and Next.js. Focused on clean UI, accessibility, and mobile optimization.'
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Fab Group',
      location: 'Lagos, Nigeria',
      duration: 'Feb 2024 — August 2024',
      description: 'Built and maintained responsive web application interfaces, ensuring pixel-perfect alignment with designs and user requirements. Translated visual wireframes into functional React components, participating in design reviews to improve platform usability and accessibility. Optimized frontend code and assets to improve load times and user experience on mobile devices.'
    },
    {
      title: 'Frontend Developer',
      company: 'Mfm Magodo Youth Church',
      location: 'Lagos, Nigeria',
      duration: 'Jun 2023 — Nov 2023',
      description: 'Built and deployed the frontend of a modern church management system using Next.js and TypeScript. Focused on responsive design, clean UI components, and an intuitive user experience.'
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

import React from 'react';
import './About.css';

const About = () => {
  const frontend = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];

  return (
    <section id="about" className="section">
      <h2 className="section-title">
        <span className="section-number">01.</span> About Me
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>I'm <strong>Emmanuel</strong>, A Frontend developer focused on building interactive, responsive, and visually engaging web applications.</p>
          <p>I specialize in crafting modern user interfaces using <strong>Next.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>.</p>
          <p>My current projects include <strong>Novapay</strong> and <strong>The Nest Church</strong>, where I focus on performance, clean design systems, and reusable component architecture.</p>
        </div>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              {frontend.map((skill, i) => <li key={i}>▸ {skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

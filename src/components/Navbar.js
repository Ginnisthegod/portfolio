import React from 'react';
import './Navbar.css';

const Navbar = ({ isDark, setIsDark }) => {
  return (
    <nav className="navbar">
      <div className="logo">&lt;Ginnis /&gt;</div>
      <ul className="nav-links">
        <li><a href="#about"><span className="nav-number">01.</span> About</a></li>
        <li><a href="#projects"><span className="nav-number">02.</span> Projects</a></li>
        <li><a href="#experience"><span className="nav-number">03.</span> Experience</a></li>
        <li><a href="#contact"><span className="nav-number">04.</span> Contact</a></li>
      </ul>
      <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
        {isDark ? '☀' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;

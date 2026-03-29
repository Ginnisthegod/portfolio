import React from 'react';
import './Contact.css';

const Contact = () => {
  const email = 'Ifeanyiginikanwa@gmail.com';
  const phone = '+234 8102110360';

  return (
    <section id="contact" className="section">
      <h2 className="section-title">
        <span className="section-number">04.</span> Get In Touch
      </h2>
      <div className="contact-content">
        <p className="contact-intro">
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!
        </p>

        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-label">Email</p>
              <p className="contact-value">{email}</p>
              <p className="contact-note">(or use default email app)</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-info">
              <p className="contact-label">Phone / WhatsApp</p>
              <p className="contact-value">{phone}</p>
            </div>
          </div>
        </div>

        <div className="contact-buttons">
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noopener noreferrer" className="contact-btn btn-primary-contact">
            Send via Gmail
          </a>
          <a href={`mailto:${email}`} className="contact-btn btn-secondary-contact">
            Use Default App
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

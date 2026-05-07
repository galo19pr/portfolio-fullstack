import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const GithubIcon = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.2-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a5.5 5.5 0 0 0-.2 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, info: { error: false, msg: null } });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, info: { error: false, msg: null } });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, info: { error: false, msg: 'Message sent successfully!' } });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ submitting: false, info: { error: true, msg: data.error || 'Something went wrong.' } });
      }
    } catch (error) {
      setStatus({ submitting: false, info: { error: true, msg: 'Network error. Please try again.' } });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">Let's work together on your next great idea.</p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-desc">
              I'm currently available for freelance work and open to new opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>halegeletawak@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+251927903590</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Ethiopia , Adama</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <h4>GitHub</h4>
                  <p><a href="https://github.com/galo19pr" target="_blank" rel="noopener noreferrer" className="hover-glow">github.com/galo19pr</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <p><a href="https://www.linkedin.com/in/geletawak-sileshi" target="_blank" rel="noopener noreferrer" className="hover-glow">in/geletawak-sileshi</a></p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status.info.msg && (
              <div className={`status-message ${status.info.error ? 'error' : 'success'}`} style={{
                padding: '10px',
                marginBottom: '15px',
                borderRadius: '5px',
                backgroundColor: status.info.error ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)',
                color: status.info.error ? '#ff6b6b' : '#4ade80',
                fontSize: '0.9rem',
                border: `1px solid ${status.info.error ? '#ff6b6b' : '#4ade80'}`,
                textAlign: 'center'
              }}>
                {status.info.msg}
              </div>
            )}

            <button type="submit" className="btn btn-primary submit-btn" disabled={status.submitting}>
              {status.submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-socials">
          <a href="https://github.com/galo19pr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/geletawak-sileshi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Geletawak. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;

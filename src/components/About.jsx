import { Code2, Palette, Terminal, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { icon: <Code2 size={24} />, title: 'Frontend Dev', desc: 'React, Vue, TypeScript, Next.js' },
    { icon: <Palette size={24} />, title: 'UI/UX Design', desc: 'Figma, Tailwind, CSS Architecture' },
    { icon: <Terminal size={24} />, title: 'Backend Dev', desc: 'Node.js, Express, PostgreSQL' },
    { icon: <Zap size={24} />, title: 'Performance', desc: 'Optimization, Web Vitals, SEO' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="section-subtitle">Get to know me and what I do.</p>

        <div className="about-grid">
          <div className="about-text glass-card">
            <h3>My Journey</h3>
            <p>
              I'm a passionate developer with a keen eye for design. Over years,
              I've worked on various projects ranging from simple landing pages to complex
              enterprise web applications.
            </p>
            <p>
              My philosophy is simple: build things that look great and work perfectly.
              I believe that accessibility and aesthetics should go hand in hand, creating
              experiences that everyone can enjoy.
            </p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number gradient-text">2+</span>
                <span className="stat-label">Years Exp</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-text">5+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number gradient-text">5+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass-card hover-lift">
                <div className="skill-icon">{skill.icon}</div>
                <h4 className="skill-title">{skill.title}</h4>
                <p className="skill-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

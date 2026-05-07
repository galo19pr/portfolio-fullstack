import { Download } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'RESTful APIs'] },
    { category: 'Database & Tools', items: ['MongoDB', 'SQL', 'Git/GitHub', 'Docker'] },
    { category: 'Design', items: ['Figma', 'UI/UX Principles', 'Responsive Design'] }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2018 - 2022',
      description: 'Graduated with Honors. Specialized in Software Engineering and Web Technologies.'
    }
  ];

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header animate-fade-in">
          <h2 className="section-title">My <span className="gradient-text">Resume</span></h2>
          <div className="resume-actions">
            <a href="/resume.pdf" download="Resume.pdf" className="btn btn-primary hover-lift">
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>

        <div className="resume-content">
          <div className="skills-column animate-fade-in delay-100">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-card glass-card hover-lift">
                  <h4>{skillGroup.category}</h4>
                  <ul>
                    {skillGroup.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="education-column animate-fade-in delay-200">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item glass-card hover-lift">
                  <div className="timeline-dot"></div>

                  <h3>2023-2028</h3>
                  <h4>Bachelor Of Science In Software Engineering</h4>
                  <h5>Adama Science and Technology University</h5>
                  <p>Graduated with Honors. Specialized in Software Engineering and Web Technologies.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

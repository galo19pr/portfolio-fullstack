import { ArrowRight, Download } from 'lucide-react';
import profilePic from '../assets/geletaProf.jpg';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        <div className="home-content">
          <p className="greeting animate-fade-in">Hello, I'm</p>
          <h1 className="name animate-fade-in delay-100">
            Geletawak <span className="gradient-text">Sileshi</span>
          </h1>
          <h2 className="role animate-fade-in delay-200">
            Creative Full-Stack Developer
          </h2>
          <p className="bio animate-fade-in delay-300">
            I build exceptional and accessible digital experiences for the web.
            Focused on crafting beautiful interfaces with modern technologies.
          </p>

          <div className="home-actions animate-fade-in delay-400">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="home-visual animate-fade-in delay-300">
          <div className="blob-shape"></div>
          <div className="portrait-placeholder">
            <img src={profilePic} alt="Geletawak Sileshi Portrait" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Home;

import { ExternalLink, Code2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Warehouse Management System',
      description: 'A full-stack inventory management web application for managing warehouse products, stock levels, and inventory operations efficiently.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      demoUrl: 'https://inventory-for-wholesaler.onrender.com',
      githubUrl: 'https://github.com/galo19pr'
    },
    {
      title: 'Blue Collar Marketplace',
      description: 'A marketplace platform connecting blue-collar workers with customers, allowing service discovery and marketplace interaction.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Next.js', 'Supabase'],
      demoUrl: null,
      githubUrl: 'https://github.com/galo19pr'
    },
    {
      title: 'Credit Management for Local Shops & Mini-Markets',
      description: 'A credit management system designed for local shops and mini-markets to track customer credit, payments, and financial records efficiently.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      demoUrl: null,
      githubUrl: null
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Some of my recent work that I'm proud of.</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card hover-lift">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="overlay-btn" aria-label="GitHub Repository">
                      <Code2 size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="overlay-btn" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                      <ExternalLink size={16} /> View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      <Code2 size={16} /> GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

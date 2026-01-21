import React, { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    document.body.className = 'projects-page';
    return () => {
      document.body.className = '';
    };
  }, []);

  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'E-commerce platform with payment integration',
      technologies: ['React', 'Express', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Real-time chat application with WebSocket',
      technologies: ['React', 'Socket.io', 'Redis'],
      link: '#'
    }
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="content-card p-5">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold gradient-text mb-3">
                My Projects
              </h1>
              <p className="lead text-muted">
                Explore some of my recent work and creations
              </p>
            </div>

            <div className="row g-4">
              {projects.map((project, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="project-card h-100 p-4">
                    <h5 className="fw-bold mb-3">{project.title}</h5>
                    <p className="text-muted mb-3">{project.description}</p>
                    <div className="mb-3">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="badge tech-badge me-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="btn btn-outline-primary btn-sm">
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
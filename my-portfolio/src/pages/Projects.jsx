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
      title: 'Blog Website',
      description: 'A blog built using Django templates with authentication',
      technologies: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Bootstrap'],
      link: 'https://django-blog-production-61f9.up.railway.app/'
    },
    {
      title: 'Job Search Platform',
      description: 'A backend job search platform that has role-based access, JWT, rate limiting etc',
      technologies: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Bootstrap'],
      link: 'https://job-board-platform.up.railway.app/api/docs/'
    },
    {
      title: 'Fullstack Task Manager',
      description: 'A task manager built to track my todo list',
      technologies: ['Python', 'Django', 'DRF', 'React.js', 'PostgreSQL', 'Bootstrap'],
      link: 'https://fullstack-task-manager-app.vercel.app/'
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
                    <a href={project.link} className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
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
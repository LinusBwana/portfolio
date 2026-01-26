import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    document.body.className = 'home-page';
    return () => {
      document.body.className = '';
    };
  }, []);

  const techStack = {
    backend: ['Python', 'Django', 'RESTful APIs', 'PostgreSQL'],
    frontend: ['JavaScript', 'React.js', 'Bootstrap', 'HTML/CSS'],
    tools: ['Git & GitHub', 'Docker', 'Postman', 'Swagger']
  };

  const resumeUrl = "https://drive.google.com/file/d/1rk8r3UaVt_mlEUNJFkWLQdkYeCjRwpzl/view?usp=drive_link"

  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="content-card p-5">
            <div className="row align-items-center">
              <div className="col-lg-4 text-center mb-4 mb-lg-0">
                <div className="profile-image-container">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/linus.jpg`}
                    alt="Linus Bwana" 
                    className="profile-image"
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <h1 className="display-4 fw-bold gradient-text mb-3">
                  Hi, I'm Linus Bwana
                </h1>
                <h5 className="text-muted mb-3">Full-Stack Software Engineer</h5>
                <p className="lead text-muted mb-4">
                  Graduate with a Bachelor's degree in Electrical and Electronic Engineering, 
                  further certified in backend development from the ALX Africa bootcamp. I have 
                  been actively building and documenting a portfolio of projects on my GitHub, 
                  which chronicles my learning journey and hands-on application. My technical 
                  skill set includes Python, Django, REST APIs, JavaScript, React.js, PostgreSQL, 
                  Git & GitHub, and Postman for API testing. I am seeking a collaborative software 
                  engineering role where I can leverage my technical adaptability, analytical 
                  foundation from engineering, and disciplined approach to develop impactful, 
                  scalable solutions.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <a href={resumeUrl} className="btn btn-primary" download>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    Download Resume
                  </a>
                  <a href="https://github.com/linusbwana" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="content-card p-5">
            <h2 className="text-center fw-bold gradient-text mb-4">Tech Stack</h2>
            
            <div className="row g-4">
              <div className="col-md-4">
                <div className="tech-category">
                  <h5 className="fw-bold mb-3 text-primary">
                    Backend
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {techStack.backend.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="tech-category">
                  <h5 className="fw-bold mb-3 text-success">
                    Frontend
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {techStack.frontend.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="tech-category">
                  <h5 className="fw-bold mb-3 text-info">
                    Tools & DevOps
                  </h5>
                  <div className="d-flex flex-wrap gap-2">
                    {techStack.tools.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="content-card p-5">
            <h2 className="text-center fw-bold gradient-text mb-5">What I Do</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="feature-card text-center p-4 h-100">
                  <div className="feature-icon mb-3">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>
                  </div>
                  <h5 className="fw-bold">Backend Development</h5>
                  <p className="text-muted mb-0">
                    Building robust APIs and server-side applications with Django and Python
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-card text-center p-4 h-100">
                  <div className="feature-icon mb-3">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                    </svg>
                  </div>
                  <h5 className="fw-bold">Frontend Development</h5>
                  <p className="text-muted mb-0">
                    Creating responsive and modern web interfaces with React.js and Bootstrap
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-card text-center p-4 h-100">
                  <div className="feature-icon mb-3">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                    </svg>
                  </div>
                  <h5 className="fw-bold">Full-Stack Solutions</h5>
                  <p className="text-muted mb-0">
                    Delivering end-to-end web applications with scalable architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
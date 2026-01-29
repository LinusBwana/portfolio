import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Function to close navbar on mobile after clicking a link
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        // If instance doesn't exist, manually remove the show class
        navbarCollapse.classList.remove('show');
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-gradient">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeNavbar}>
          Linus Bwana
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={closeNavbar}
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
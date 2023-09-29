import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <style jsx>{`
          button[aria-expanded='false'] > .close {
            display: none;
          }
          button[aria-expanded='true'] > .open {
            display: none;
          }
        `}</style>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className={isMenuOpen ? 'close text-dark' : 'open text-dark'}>
              {isMenuOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
            </span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? 'show' : ''
          }`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

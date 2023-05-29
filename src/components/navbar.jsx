import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/safety" className="navbar-link">Safety</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">SignIn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

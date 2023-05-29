import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/safty" className="navbar-link">SAFTY</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

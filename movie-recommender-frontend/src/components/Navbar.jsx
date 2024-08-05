import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Movie Recommender</h1>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/ai-response" className="navbar-link">AI Response</Link>
        <Link to="/database-entries" className="navbar-link">Database Entries</Link>
      </div>
    </nav>
  );
};

export default Navbar;

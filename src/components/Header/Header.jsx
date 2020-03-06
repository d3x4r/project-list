import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/react">
                React
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/js">
                JS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/psd2html">
                psd2html
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

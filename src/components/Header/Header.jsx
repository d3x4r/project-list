import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand" href="/#">
          Logo
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                psd2html
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                JS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                React
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

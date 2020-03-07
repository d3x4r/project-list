/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import './Footer.css';
import GitHubIcon from '-!svg-react-loader!../../assets/img/github-logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a
          href="https://github.com/d3x4r"
          className="footer__link"
          target="_blank"
          rel="noreferrer noopener"
          title="github profile"
        >
          <GitHubIcon className="footer__github-link" width={30} height={30} alt="github profile" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

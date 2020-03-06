/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '-!svg-react-loader!../../assets/img/github-logo.svg';
import StartProjectIcon from '-!svg-react-loader!../../assets/img/play-button.svg';
import './ProjectItem.css';

const ProjectItem = ({ data }) => {
  const { title, preview, keyWords, github, web } = data;
  const keyWordsString = `Keywords: ${keyWords.join(', ')}.`;

  return (
    <div className="card mb-3 project-item">
      <div className="row no-gutters project-item__card-wrapper">
        <div className="col-md-4">
          <img src={preview} className="card-img" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </p>
            <p className="card-text">
              <small className="text-muted">{keyWordsString}</small>
            </p>
            <a
              href={github}
              className="card-link"
              target="_blank"
              rel="noreferrer noopener"
              title="github link"
            >
              <GitHubIcon className="project-item__icon" width={30} height={30} alt="github link" />
            </a>
            <a
              href={web}
              className="card-link projet-item__watch-icon"
              target="_blank"
              rel="noreferrer noopener"
              title="watch online"
            >
              <StartProjectIcon
                className="project-item__icon"
                width={32}
                height={32}
                alt="watch online"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectItem;

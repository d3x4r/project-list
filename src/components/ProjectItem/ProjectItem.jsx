/* because used create-react-app */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '-!svg-react-loader!../../assets/img/github-logo.svg';
import StartProjectIcon from '-!svg-react-loader!../../assets/img/play-button.svg';
import './ProjectItem.css';

const gitHubLink = (href) => (
  <a
    href={href}
    className="card-link project-item__link projet-item__github-icon"
    target="_blank"
    rel="noreferrer noopener"
    title="github link"
  >
    <GitHubIcon className="project-item__icon" width={30} height={30} alt="github link" />
  </a>
);

const onlineLink = (href) => (
  <a
    href={href}
    className="card-link project-item__link projet-item__watch-icon"
    target="_blank"
    rel="noreferrer noopener"
    title="watch online"
  >
    <StartProjectIcon className="project-item__icon" width={32} height={32} alt="watch online" />
  </a>
);

const ProjectItem = ({ data }) => {
  const { title, preview, keyWords, github, web, description } = data;
  const keyWordsString = `Keywords: ${keyWords.join(', ')}.`;

  const defaultItemDescription = `The "${title}" project has no description yet. But it may be coming soon`;

  return (
    <div className="card mb-3 project-item">
      <div className="row no-gutters project-item__card-wrapper">
        <div className="col-md-4">
          <img src={preview} className="card-img" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description || defaultItemDescription}</p>
            <p className="card-text">
              <small className="text-muted">{keyWordsString}</small>
            </p>
            <div className="project-item__links-wrapper">
              {github && gitHubLink(github)}
              {web && onlineLink(web)}
            </div>
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

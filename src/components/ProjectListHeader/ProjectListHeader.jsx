import React from 'react';
import PropTypes from 'prop-types';
import './ProjectListHeader.css';

const ProjectListHeader = (title, Filters) => {
  const withFilters = ({ filterHandler, currentFilter }) => {
    return (
      <div className="projects-list-header">
        <h1 className="projects-list-header__title">{title}</h1>
        <Filters filterHandler={filterHandler} currentFilter={currentFilter} />
      </div>
    );
  };

  withFilters.propTypes = {
    filterHandler: PropTypes.func.isRequired,
    currentFilter: PropTypes.string.isRequired,
  };

  return withFilters;
};

export default ProjectListHeader;

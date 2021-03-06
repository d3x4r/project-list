import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../ProjectItem';
import './ProjectsList.css';

const ProjectsList = ({ items }) => {
  if (items.length === 0) {
    return <div>Data not found</div>;
  }

  return (
    <div className="projects-list">
      {items.map((item) => (
        <ProjectItem data={item} key={item.id} />
      ))}
    </div>
  );
};

ProjectsList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default ProjectsList;

import React from 'react';
import './ProjectsList.css';

const ProjectsList = ({ items }) => {
  if (items.length === 0) {
    return <div>Data not found</div>;
  }
  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default ProjectsList;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './ReactPage.css';
import ProjectsList from '../../ProjectsList';
import Filters from '../../Filters';
import { fetchReactProjects, clear, setReactProjectsFilter } from '../../../actions';

const ReactPage = (props) => {
  const {
    projects,
    load,
    error,
    fetchReactProjects,
    setReactProjectsFilter,
    currentFilter,
    clear,
  } = props;

  useEffect(() => {
    fetchReactProjects();
    return () => clear();
  }, [fetchReactProjects, clear]);

  return (
    <div>
      <h1>React Page</h1>
      <Filters filterHandler={setReactProjectsFilter} currentFilter={currentFilter} />
      {load ? <span>loading</span> : <ProjectsList items={projects} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { projects, load, error, currentFilter } = state;

  const filteredProjects = projects.filter((project) => {
    const { year } = project;
    return year === currentFilter;
  });

  return {
    projects: currentFilter ? filteredProjects : projects,
    load,
    error,
    currentFilter,
  };
};

const mapDispatchToProps = {
  fetchReactProjects,
  clear,
  setReactProjectsFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactPage);

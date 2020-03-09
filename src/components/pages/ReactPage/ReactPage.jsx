import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ReactPage.css';
import ProjectsList from '../../ProjectsList';
import Filters from '../../Filters';
import ProjectListHeader from '../../ProjectListHeader';
import Spinner from '../../Spinner';
import { fetchReactProjects, removeProjects, setReactProjectsFilter } from '../../../actions';

const PageHeader = ProjectListHeader('React projects', Filters);

const ReactPage = (props) => {
  const { projects, load, fetchProjects, setProjectsFilter, currentFilter, resetState } = props;

  useEffect(() => {
    fetchProjects();
    return () => resetState();
  }, [fetchProjects, resetState]);

  return (
    <div className="react-page container">
      <PageHeader filterHandler={setProjectsFilter} currentFilter={currentFilter} />
      {load ? <Spinner /> : <ProjectsList items={projects} />}
    </div>
  );
};

const mapStateToProps = ({ reactProjects }) => {
  const { projects, load, error, currentFilter } = reactProjects;

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
  fetchProjects: fetchReactProjects,
  setProjectsFilter: setReactProjectsFilter,
  resetState: removeProjects,
};

ReactPage.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
  load: PropTypes.bool.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  setProjectsFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  resetState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactPage);

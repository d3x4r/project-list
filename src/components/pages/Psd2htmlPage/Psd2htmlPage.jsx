import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Psd2htmlPage.css';
import ProjectsList from '../../ProjectsList';
import Filters from '../../Filters';
import ProjectListHeader from '../../ProjectListHeader';
import Spinner from '../../Spinner';
import { fetchPsd2HtmlProjects, setPSD2HTMLProjectsFilter, removeProjects } from '../../../actions';

const PageHeader = ProjectListHeader('Psd2HTML projects', Filters);

const Psd2htmlPage = (props) => {
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

const mapStateToProps = ({ psd2htmlProjects }) => {
  const { projects, load, error, currentFilter } = psd2htmlProjects;

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
  fetchProjects: fetchPsd2HtmlProjects,
  setProjectsFilter: setPSD2HTMLProjectsFilter,
  resetState: removeProjects,
};

Psd2htmlPage.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
  load: PropTypes.bool.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  setProjectsFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  resetState: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Psd2htmlPage);

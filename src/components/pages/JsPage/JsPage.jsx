/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './JsPage.css';
import ProjectsList from '../../ProjectsList';
import Filters from '../../Filters';
import ProjectListHeader from '../../ProjectListHeader';
import Spinner from '../../Spinner';
import { fetchJsProjects, clear, setJsProjectsFilter } from '../../../actions';

const PageHeader = ProjectListHeader('Javascript projects', Filters);

const JsPage = (props) => {
  const { projects, load, fetchJsProjects, setJsProjectsFilter, currentFilter, clear } = props;

  useEffect(() => {
    fetchJsProjects();
    return () => clear();
  }, [fetchJsProjects, clear]);

  return (
    <div className="react-page container">
      <PageHeader filterHandler={setJsProjectsFilter} currentFilter={currentFilter} />
      {load ? <Spinner /> : <ProjectsList items={projects} />}
    </div>
  );
};

const mapStateToProps = ({ jsProjects }) => {
  const { projects, load, error, currentFilter } = jsProjects;

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
  fetchJsProjects,
  clear,
  setJsProjectsFilter,
};

JsPage.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
  load: PropTypes.bool.isRequired,
  fetchJsProjects: PropTypes.func.isRequired,
  setJsProjectsFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(JsPage);

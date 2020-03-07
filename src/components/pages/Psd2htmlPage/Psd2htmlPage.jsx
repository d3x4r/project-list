/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Psd2htmlPage.css';
import ProjectsList from '../../ProjectsList';
import Filters from '../../Filters';
import ProjectListHeader from '../../ProjectListHeader';
import Spinner from '../../Spinner';
import { fetchPsd2HtmlProjects, clear, setPSD2HTMLProjectsFilter } from '../../../actions';

const PageHeader = ProjectListHeader('Psd2HTML projects', Filters);

const Psd2htmlPage = (props) => {
  const {
    projects,
    load,
    fetchPsd2HtmlProjects,
    setPSD2HTMLProjectsFilter,
    currentFilter,
    clear,
  } = props;

  useEffect(() => {
    fetchPsd2HtmlProjects();
    return () => clear();
  }, [fetchPsd2HtmlProjects, clear]);

  return (
    <div className="react-page container">
      <PageHeader filterHandler={setPSD2HTMLProjectsFilter} currentFilter={currentFilter} />
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
  fetchPsd2HtmlProjects,
  clear,
  setPSD2HTMLProjectsFilter,
};

Psd2htmlPage.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
  load: PropTypes.bool.isRequired,
  fetchPsd2HtmlProjects: PropTypes.func.isRequired,
  setPSD2HTMLProjectsFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Psd2htmlPage);

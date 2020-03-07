import { getReactProjects, getPsd2HtmlProjects } from '../services';

const sendReactRequest = () => {
  return {
    type: 'REACT_PROJECTS_REQUEST',
  };
};

const sendPSD2HTMLRequest = () => {
  return {
    type: 'PSD2HTML_PROJECTS_REQUEST',
  };
};

const loadReactProjects = (projects) => {
  return {
    type: 'REACT_PROJECTS_SUCCESS',
    payload: { data: projects },
  };
};

const loadPSD2HTMLProjects = (projects) => {
  return {
    type: 'PSD2HTML_PROJECTS_SUCCESS',
    payload: { data: projects },
  };
};

const loadReactProjectsError = (err) => {
  return {
    type: 'REACT_PROJECTS_FAILURE',
    payload: err,
  };
};

const loadPSD2HTMLProjectsError = (err) => {
  return {
    type: 'PSD2HTML_PROJECTS_FAILURE',
    payload: err,
  };
};

const setReactProjectsFilter = (filterValue) => {
  return {
    type: 'SET_REACT_PROJECTS_FILTER',
    payload: filterValue,
  };
};

const setPSD2HTMLProjectsFilter = (filterValue) => {
  return {
    type: 'SET_PSD2HTML_PROJECTS_FILTER',
    payload: filterValue,
  };
};

const clear = () => ({
  type: 'CLEAR',
});

const fetchReactProjects = () => async (dispatch) => {
  dispatch(sendReactRequest());

  try {
    const reactProjects = await getReactProjects();
    dispatch(loadReactProjects(reactProjects));
  } catch (err) {
    dispatch(loadReactProjectsError(err));
  }
};

const fetchPsd2HtmlProjects = () => async (dispatch) => {
  dispatch(sendPSD2HTMLRequest());

  try {
    const psd2HtmlProjects = await getPsd2HtmlProjects();
    dispatch(loadPSD2HTMLProjects(psd2HtmlProjects));
  } catch (err) {
    dispatch(loadPSD2HTMLProjectsError(err));
  }
};

export {
  fetchReactProjects,
  setReactProjectsFilter,
  setPSD2HTMLProjectsFilter,
  clear,
  fetchPsd2HtmlProjects,
};

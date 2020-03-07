import { getReactProjects, getPsd2HtmlProjects, getJsProjects } from '../services';

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

const sendJsRequest = () => {
  return {
    type: 'JS_PROJECTS_REQUEST',
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

const loadJsProjects = (projects) => {
  return {
    type: 'JS_PROJECTS_SUCCESS',
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

const loadJsProjectsError = (err) => {
  return {
    type: 'JS_PROJECTS_FAILURE',
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

const setJsProjectsFilter = (filterValue) => {
  return {
    type: 'SET_JS_PROJECTS_FILTER',
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

const fetchJsProjects = () => async (dispatch) => {
  dispatch(sendJsRequest());

  try {
    const jsProjects = await getJsProjects();
    dispatch(loadJsProjects(jsProjects));
  } catch (err) {
    dispatch(loadJsProjectsError(err));
  }
};

export {
  fetchReactProjects,
  setReactProjectsFilter,
  fetchPsd2HtmlProjects,
  setPSD2HTMLProjectsFilter,
  fetchJsProjects,
  setJsProjectsFilter,
  clear,
};

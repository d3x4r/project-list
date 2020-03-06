import { getReactProjects } from '../services';

const sendReactRequest = () => {
  return {
    type: 'REACT_PROJECTS_REQUEST',
  };
};

const loadReactProjects = (projects) => {
  return {
    type: 'REACT_PROJECTS_SUCCESS',
    payload: { data: projects },
  };
};

const loadReactProjectsError = (err) => {
  return {
    type: 'REACT_PROJECTS_FAILURE',
    payload: err,
  };
};

const setReactProjectsFilter = (filterValue) => {
  return {
    type: 'SET_REACT_PROJECTS_FILTER',
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

export { fetchReactProjects, setReactProjectsFilter, clear };

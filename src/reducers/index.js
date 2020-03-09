import { combineReducers } from 'redux';

const initialState = {
  projects: [],
  load: false,
  error: false,
  currentFilter: '',
};

const reactProjects = (state = initialState, action) => {
  switch (action.type) {
    case 'REACT_PROJECTS_REQUEST':
      return { ...state, load: true, error: false };
    case 'REACT_PROJECTS_SUCCESS': {
      const { data } = action.payload;
      return { ...state, load: false, projects: data };
    }
    case 'REACT_PROJECTS_FAILURE':
      return { ...state, load: false, error: true };

    case 'SET_REACT_PROJECTS_FILTER':
      return { ...state, currentFilter: action.payload };

    case 'REMOVE_PROJECTS':
      return { ...state, load: false, error: false, projects: [] };
    default:
      return state;
  }
};

const psd2htmlProjects = (state = initialState, action) => {
  switch (action.type) {
    case 'PSD2HTML_PROJECTS_REQUEST':
      return { ...state, load: true, error: false };
    case 'PSD2HTML_PROJECTS_SUCCESS': {
      const { data } = action.payload;
      return { ...state, load: false, projects: data };
    }
    case 'PSD2HTML_PROJECTS_FAILURE':
      return { ...state, load: false, error: true };

    case 'SET_PSD2HTML_PROJECTS_FILTER':
      return { ...state, currentFilter: action.payload };

    case 'REMOVE_PROJECTS':
      return { ...state, load: false, error: false, projects: [] };
    default:
      return state;
  }
};

const jsProjects = (state = initialState, action) => {
  switch (action.type) {
    case 'JS_PROJECTS_REQUEST':
      return { ...state, load: true, error: false };
    case 'JS_PROJECTS_SUCCESS': {
      const { data } = action.payload;
      return { ...state, load: false, projects: data };
    }
    case 'JS_PROJECTS_FAILURE':
      return { ...state, load: false, error: true };

    case 'SET_JS_PROJECTS_FILTER':
      return { ...state, currentFilter: action.payload };

    case 'REMOVE_PROJECTS':
      return { ...state, load: false, error: false, projects: [] };
    default:
      return state;
  }
};

export default combineReducers({ reactProjects, psd2htmlProjects, jsProjects });

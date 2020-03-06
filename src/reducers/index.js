const initialState = {
  projects: [],
  load: null,
  error: null,
  currentFilter: '',
};

const reducer = (state = initialState, action) => {
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

    case 'CLEAR':
      return { ...state, load: false, error: false, projects: [] };
    default:
      return state;
  }
};

export default reducer;

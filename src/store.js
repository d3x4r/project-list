import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// eslint-disable-next-line no-underscore-dangle
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, compose(applyMiddleware(thunk), reduxDevtools));

export default store;

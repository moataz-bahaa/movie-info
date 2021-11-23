import reducer from './reducers';
import middleware from './middleware';
import { createStore, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(middleware)
);

export default store;
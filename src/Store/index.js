import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import initialState from './Data';
import reducers from './Reducers';

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

const store = configureStore();

export default store;
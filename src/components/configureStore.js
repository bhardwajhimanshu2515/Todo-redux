import {createStore} from 'redux';
import combineReducers from './reducers/main';

export default function configureStore(initialState) {
  return createStore(combineReducers, initialState);
}
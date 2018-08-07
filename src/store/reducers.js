import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { apiReducer, REDUCER_NAME as API_REDUCER_NAME } from './api';
import {
  repositoriesReducer,
  REDUCER_NAME as REPOSITORIES_REDUCER_NAME,
} from './repositories';

export default combineReducers({
  form,
  [API_REDUCER_NAME]: apiReducer,
  [REPOSITORIES_REDUCER_NAME]: repositoriesReducer,
});

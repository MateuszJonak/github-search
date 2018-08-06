import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import {
  repositoriesReducer,
  REDUCER_NAME as REPOSITORIES_REDUCER_NAME,
} from './repositories';

export default combineReducers({
  form,
  [REPOSITORIES_REDUCER_NAME]: repositoriesReducer,
});

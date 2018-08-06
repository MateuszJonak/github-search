import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { apiReducer, REDUCER_NAME as API_REDUCER_NAME } from './api';

export default combineReducers({
  form,
  [API_REDUCER_NAME]: apiReducer,
});

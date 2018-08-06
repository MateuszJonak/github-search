import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { REQUEST, SUCCESS, FAILED, RESET } from './actions';

export const REDUCER_NAME = 'repositories';

const initialState = {
  working: false,
  data: undefined,
  error: undefined,
};

export default handleActions(
  {
    [REQUEST]: state => update(state, { working: { $set: true } }),
    [SUCCESS]: (state, { payload: { data } }) =>
      update(state, { data: { $set: data }, working: { $set: false } }),
    [FAILED]: (state, { payload: { error } }) =>
      update(state, { error: { $set: error }, working: { $set: false } }),
    [RESET]: () => ({ ...initialState }),
  },
  initialState
);

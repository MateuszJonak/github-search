/* @flow */

import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { PAGINATION_PAGE, PAGINATION_ROWS_PER_PAGE, ORDER } from './actions';

export const REDUCER_NAME: string = 'repositories';

const initialState = {
  orderDirection: 'asc',
  orderBy: 'id',
  page: 0,
  rowsPerPage: 5,
};

export default handleActions(
  {
    [PAGINATION_PAGE]: (state, { payload }) =>
      update(state, { page: { $set: payload } }),
    [PAGINATION_ROWS_PER_PAGE]: (state, { payload }) =>
      update(state, { rowsPerPage: { $set: payload } }),
    [ORDER]: (state, { payload: { orderBy, orderDirection } }) =>
      update(state, {
        orderBy: { $set: orderBy },
        orderDirection: { $set: orderDirection },
      }),
  },
  initialState
);

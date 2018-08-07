/* @flow */

import { createActions } from 'redux-actions';
import getAction from '../../lib/getAction';

export const PAGINATION_PAGE = 'pagination/page';
export const PAGINATION_ROWS_PER_PAGE = 'pagination/rowsPerPage';
export const ORDER = 'order';

const actionsDefinitions = {
  [PAGINATION_PAGE]: null,
  [PAGINATION_ROWS_PER_PAGE]: null,
  [ORDER]: (orderBy, orderDirection) => ({ orderBy, orderDirection }),
};

const actions = createActions(actionsDefinitions);

export default actions;

export const actionsMap = Object.keys(actionsDefinitions).reduce(
  (result, key) => ({
    ...result,
    [key]: getAction(actions, key),
  }),
  {}
);

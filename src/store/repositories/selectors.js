/* @flow */

import { createSelector } from 'reselect';
import { get } from 'lodash/fp';
import { REDUCER_NAME } from './reducers';
import compareValues from '../../lib/compareValues';
import apiSelectors from '../api/selectors';

const apiRepositoriesSelector = apiSelectors('repositories.search');
const getItems = get('items');

export const getRepositoriesIsLoading = apiRepositoriesSelector.getLoading;

export const getPage = get(`${REDUCER_NAME}.page`);
export const getRowsPerPage = get(`${REDUCER_NAME}.rowsPerPage`);
export const getOrderBy = get(`${REDUCER_NAME}.orderBy`);
export const getOrderDirection = get(`${REDUCER_NAME}.orderDirection`);

export const getRepositoriesItems = createSelector(
  apiRepositoriesSelector.getData,
  getItems
);

export const getRepositoriesTotal = createSelector(
  getRepositoriesItems,
  (items: Array<Object> | void) => {
    if (items) {
      return items.length;
    }
    return items;
  }
);

export const getRepositoriesSort = createSelector(
  getRepositoriesItems,
  getOrderBy,
  getOrderDirection,
  (items: Array<Object> | void, orderBy, orderDirection) => {
    if (items) {
      return [...items.sort(compareValues(orderBy, orderDirection))];
    }
    return items;
  }
);

export const getRepositories = createSelector(
  getRepositoriesSort,
  getPage,
  getRowsPerPage,
  (items: Array<Object> | void, page, rowsPerPage) => {
    if (items) {
      return items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }
    return items;
  }
);

/* @flow */

import { createSelector } from 'reselect';
import { REDUCER_NAME } from './reducers';

export const getData = (state: Object) => state[REDUCER_NAME].data;

export const getRepositories = createSelector(
  getData,
  (data = {}) => data.items
);

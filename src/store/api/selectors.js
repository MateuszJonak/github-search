/* @flow */

import { createSelector } from 'reselect';
import { get } from 'lodash/fp';
import { REDUCER_NAME } from './reducers';

const apiSelectors = (method: string) => {
  const paramsToGet: Array<string> = [REDUCER_NAME, method];
  const getState = get(paramsToGet);

  return {
    getState,
    getData: createSelector(getState, get('data')),
    getError: createSelector(getState, get('error')),
    getLoading: createSelector(getState, get('loading')),
  };
};

export default apiSelectors;

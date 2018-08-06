/* @flow */

import { createSelector } from 'reselect';
import { get } from 'lodash/fp';
import apiSelectors from '../api/selectors';

const apiRepositoriesSelector = apiSelectors('repositories.search');
const getItems = get('items');

export const getRepositories = createSelector(
  apiRepositoriesSelector.getData,
  getItems
);

export const getRepositoriesIsLoading = apiRepositoriesSelector.getLoading;

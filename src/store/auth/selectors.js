/* @flow */

import { createSelector } from 'reselect';
import { get } from 'lodash/fp';
import api from '../../api';
import apiSelectors from '../api/selectors';
import { type Profile } from '../../lib/profile';

const apiGitHubSelector = apiSelectors(api.methods.GITHUB_AUTH);

export const getGitHubProfile: ({}) => Profile = createSelector(
  apiGitHubSelector.getData,
  get('_profile')
);

export const getGitHubToken = createSelector(
  apiGitHubSelector.getData,
  get('_token')
);

export const getGitHubIsLogged = createSelector(
  getGitHubToken,
  githubToken => !!get('accessToken')(githubToken)
);

export const getGitHubIsLoading = apiGitHubSelector.getLoading;

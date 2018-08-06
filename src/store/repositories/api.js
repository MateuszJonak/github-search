/* @flow */
import getQueryParams from '../../lib/getQueryParams';

export const fetchRepositories = async (payload: string) => {
  const params = {
    q: payload,
    sort: 'stars',
    order: 'desc',
    per_page: 0,
  };
  const queryParams = getQueryParams(params);

  return fetch(`https://api.github.com/search/repositories?${queryParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

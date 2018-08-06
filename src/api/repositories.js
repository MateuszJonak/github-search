/* @flow */
import createRequest from './createRequest';

type Arguments = {
  params: Object,
};
export const search = ({ params }: Arguments) =>
  createRequest({
    method: 'GET',
    url: 'https://api.github.com/search/repositories',
    params: {
      ...params,
      sort: 'stars',
      order: 'desc',
      per_page: 100,
    },
  });

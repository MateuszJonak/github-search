/* @flow */

import getQueryParams from '../lib/getQueryParams';

type Arguments = {
  body?: Object,
  url: string,
  method?: string,
  params?: Object,
  headers?: Object,
};

export default ({
  body,
  url,
  headers = {},
  method = 'POST',
  params = {},
}: Arguments) => {
  const queryParams = getQueryParams(params);
  const urlWithParams = [url, queryParams].join('?');

  return {
    call: () =>
      fetch(urlWithParams, {
        method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          ...headers,
        },
        body: JSON.stringify(body),
      }).then(res => res.json()),
  };
};

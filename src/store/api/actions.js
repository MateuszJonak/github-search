import { createActions } from 'redux-actions';

export const CALL = 'api/call';
export const CALL_EMPTY = 'api/callEmpty';
export const SUCCESS = 'api/success';
export const FAILED = 'api/failed';
export const RESET = 'api/reset';

export default createActions({
  [CALL]: (method, config) => ({ method, ...config }),
  [CALL_EMPTY]: method => ({ method }),
  [SUCCESS]: (method, response) => ({ method, response }),
  [FAILED]: (method, error) => ({ method, error }),
  [RESET]: method => ({ method }),
});

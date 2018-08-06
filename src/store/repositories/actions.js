import { createActions } from 'redux-actions';

export const REQUEST = 'repositiories/request';
export const SUCCESS = 'repositiories/success';
export const FAILED = 'repositiories/failed';
export const RESET = 'repositiories/reset';

export default createActions({
  [REQUEST]: null,
  [SUCCESS]: null,
  [FAILED]: null,
  [RESET]: null,
});

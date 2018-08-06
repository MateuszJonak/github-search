/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import getAction from '../lib/getAction';
import apiActions, {
  CALL,
  CALL_EMPTY,
  SUCCESS,
  FAILED,
  RESET,
} from '../store/api/actions';

export default (WrappedComponent: React.ComponentType<any>) => {
  const mapDispatchToProps = {
    apiCall: getAction(apiActions, CALL),
    apiCallEmpty: getAction(apiActions, CALL_EMPTY),
    apiSuccess: getAction(apiActions, SUCCESS),
    apiFailed: getAction(apiActions, FAILED),
    apiReset: getAction(apiActions, RESET),
  };

  return connect(
    null,
    mapDispatchToProps
  )(WrappedComponent);
};

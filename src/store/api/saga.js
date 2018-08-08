/* @flow */

import type { Saga } from 'redux-saga';
import { all, call, takeLatest, put } from 'redux-saga/effects';
import { get } from 'lodash/fp';
import api from '../../api';
import getAction from '../../lib/getAction';
import actions, { CALL, SUCCESS, FAILED } from './actions';

export default function* apiSaga(): Saga<void> {
  yield all([takeLatest(CALL, handleCall)]);
}

type ActionPayload = { method: string };
type Action = { payload: ActionPayload };

export function* handleCall({
  payload: { method },
  payload,
}: Action): Saga<void> {
  const getMethod = get(method);

  try {
    if (!getMethod(api)) {
      throw new Error('Method not defined');
    }
    const request = getMethod(api)({
      ...payload,
    });
    const response = yield call(request.call);

    yield put(getAction(actions, SUCCESS)(method, response));
  } catch (error) {
    yield put(getAction(actions, FAILED)(method, error.message || error));
  }
}

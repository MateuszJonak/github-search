/* @flow */

import { delay } from 'redux-saga';
import type { Saga } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from 'redux-form';
import actions, { REQUEST } from './actions';
import { fetchRepositories } from './api';

export default function* repositoriesSaga(): Saga<void> {
  yield all([
    takeLatest(actionTypes.CHANGE, handleChangeInput),
    takeLatest(REQUEST, handleRequest),
  ]);
}

type ActionProps = { payload: string };

export function* handleChangeInput({ payload }: ActionProps): Saga<void> {
  yield call(delay, 500);
  yield put(actions.repositiories.request(payload));
}

export function* handleRequest({ payload }: ActionProps): Saga<void> {
  if (payload === '') {
    yield put(actions.repositiories.reset());
    return;
  }
  try {
    const data = yield call(fetchRepositories, payload);

    yield put(actions.repositiories.success({ data }));
  } catch (error) {
    yield put(actions.repositiories.failed({ error }));
  }
}

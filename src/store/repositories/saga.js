/* @flow */

import { delay } from 'redux-saga';
import type { Saga } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from 'redux-form';
import getAction from '../../lib/getAction';
import apiActions, { CALL, RESET } from '../api/actions';
import api from '../../api';

const { methods: apiMethods } = api;

export default function* repositoriesSaga(): Saga<void> {
  yield all([takeLatest(actionTypes.CHANGE, handleChangeInput)]);
}

type ActionProps = { payload: string };

export function* handleChangeInput({ payload }: ActionProps): Saga<void> {
  yield call(delay, 500);
  if (payload === '') {
    yield put(getAction(apiActions, RESET)(apiMethods.REPOSITORIES_SEARCH));
    return;
  }
  yield put(
    getAction(apiActions, CALL)(apiMethods.REPOSITORIES_SEARCH, {
      params: { q: payload },
    })
  );
}

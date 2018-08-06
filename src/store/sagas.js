/* @flow */

import type { Saga } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import repositoriesSaga from './repositories/saga';

export default function* rootSaga(): Saga<void> {
  yield all([fork(repositoriesSaga)]);
}

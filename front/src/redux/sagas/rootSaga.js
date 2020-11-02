import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import articleSaga from './articleSaga';
import googleSaga from './googleSaga';
import loginSaga from './loginSaga';
import logoutSaga from './logoutSaga';
import allItemsSaga from './coffeeItemsSaga';
import ratingSaga from './ratingSaga';

export default function* () {
  yield all([
    authSaga(),
    articleSaga(),
    googleSaga(),
    loginSaga(),
    logoutSaga(),
    allItemsSaga(),
    ratingSaga(),
  ]);
}

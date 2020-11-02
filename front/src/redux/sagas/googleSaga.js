import { takeEvery, put, call } from 'redux-saga/effects';

import { START_GOOGLE } from '../actionTypes';

import { authenticateGoogleUser } from '../actions/authActions';

async function fetchGoogle() {
  const request = await fetch('/api/goodGoogle', {
    credentials: 'include',
  });
  const response = await request.json();
  return response;
}

function* worker(action) {
  const resp = yield call(fetchGoogle, action.payload);
  yield put(authenticateGoogleUser(resp));
}

function* watcher() {
  yield takeEvery(START_GOOGLE, worker);
}

export default watcher;

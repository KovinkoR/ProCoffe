import { takeEvery, put, call } from 'redux-saga/effects';

import { START_LOGOUT } from '../actionTypes';

import { logoutUser } from '../actions/authActions';

async function fetchLogout() {
  const request = await fetch('/logout');
  const response = await request.json();
  return response;
}

function* worker(action) {
  const resp = yield call(fetchLogout, action.payload);
  yield put(logoutUser(resp));
}

function* watcher() {
  yield takeEvery(START_LOGOUT, worker);
}

export default watcher;

import { takeEvery, put, call } from 'redux-saga/effects';

import { START_AUTH } from '../actionTypes';

import { authenticateUser } from '../actions/authActions';

async function fetchRegistration(formData) {
  const request = await fetch('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      formData,
    }),
  });
  const response = await request.json();
  console.log(response);
  return response;
}

function* worker(action) {
  const resp = yield call(fetchRegistration, action.payload);
  yield put(authenticateUser(resp));
}

function* watcher() {
  yield takeEvery(START_AUTH, worker);
}

export default watcher;

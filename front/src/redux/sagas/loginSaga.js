import { takeEvery, put, call } from 'redux-saga/effects';

import { START_LOGIN } from '../actionTypes';

import { loginUser } from '../actions/authActions';

async function fetchLogin(formData) {
  const { email, password } = formData;
  const request = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const response = await request.json();
  return response;
}

function* worker(action) {
  const resp = yield call(fetchLogin, action.payload);
  yield put(loginUser(resp));
}

function* watcher() {
  yield takeEvery(START_LOGIN, worker);
}

export default watcher;

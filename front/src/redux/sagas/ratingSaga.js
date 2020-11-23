import { takeEvery, put, call } from 'redux-saga/effects';
import { START_RATING } from '../actionTypes';
import { setRatingSaga } from '../actions/ratingActions';

async function fetchItems(payload) {
  const { rating } = payload;
  const numrate = Number(rating);
}
function* worker(action) {
  const items = yield call(fetchItems, action.payload);
  yield put(setRatingSaga(items));
}

function* watcher() {
  yield takeEvery(START_RATING, worker);
}

export default watcher;

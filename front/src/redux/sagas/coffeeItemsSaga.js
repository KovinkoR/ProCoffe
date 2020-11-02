import { takeEvery, put, call } from 'redux-saga/effects';
import { START_ITEMS } from '../actionTypes';
import { setCoffeeItems } from '../actions/allItemsActions';

async function fetchItems() {
  const respon = await fetch('/topApi');
  const res = await respon.json();
  return res;
}
function* worker(action) {
  const items = yield call(fetchItems, action.payload);
  yield put(setCoffeeItems(items));
}

function* watcher() {
  yield takeEvery(START_ITEMS, worker);
}

export default watcher;

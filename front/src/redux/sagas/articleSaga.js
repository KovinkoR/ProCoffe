import { takeEvery, put, call } from 'redux-saga/effects';
import { START_ARTICLES } from '../actionTypes';
import { setArticles } from '../actions/articleActions';

async function fetchArticles() {
  const resp = await fetch('/articles');
  const res = await resp.json();
  return res;
}
function* worker(action) {
  const articles = yield call(fetchArticles, action.payload);
  yield put(setArticles(articles));
}

function* watcher() {
  yield takeEvery(START_ARTICLES, worker);
}

export default watcher;

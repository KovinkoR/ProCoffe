import {
  START_ARTICLES, SET_ARTICLES,
} from '../actionTypes';

export function startArticlesSaga(payload) {
  return {
    type: START_ARTICLES,
    payload,
  };
}

export function setArticles(articles) {
  return {
    type: SET_ARTICLES,
    payload: {
      articles,
    },
  };
}

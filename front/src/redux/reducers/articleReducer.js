import { SET_ARTICLES, LOADING_ARTICLES, ERROR_ARTICLES } from '../actionTypes';

export default function articlereducer(state = '', action) {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles,
      };
    case LOADING_ARTICLES:
      return {
        ...state,
        articles: [],
        loading: true,
        error: '',
      };
    case ERROR_ARTICLES:
      return {
        ...state,
        articles: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

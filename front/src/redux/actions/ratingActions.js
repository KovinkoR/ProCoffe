import { START_RATING, SET_RATING } from '../actionTypes';

export function startRatingSaga(payload) {
  return {
    type: START_RATING,
    payload,
  };
}

export function setRatingSaga(rating) {
  return {
    type: SET_RATING,
    payload: {
      rating,
    },
  };
}

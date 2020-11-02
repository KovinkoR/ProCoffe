/* eslint-disable import/prefer-default-export */
import { SEARCH_COFFEE } from '../actionTypes';

export function searchCoffeeForUs(needCoffee) {
  return {
    type: SEARCH_COFFEE,
    payload: {
      needCoffee,
    },
  };
}

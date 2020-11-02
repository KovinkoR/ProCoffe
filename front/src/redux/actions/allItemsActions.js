import { START_ITEMS, SET_ITEMS, CHANGE_STATUS } from '../actionTypes';

export function startCoffeeItemsSaga(payload) {
  return {
    type: START_ITEMS,
    payload,
  };
}

export function setCoffeeItems(top) {
  return {
    type: SET_ITEMS,
    payload: {
      top,
    },
  };
}

export function setChangeStatus(item) {
  return {
    type: CHANGE_STATUS,
    payload: {
      item,
    },
  };
}
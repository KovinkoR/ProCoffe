import { SEARCH_COFFEE } from '../actionTypes';

export default function searchReducer(state = { needCoffee: [] }, {
  type, payload,
}) {
  switch (type) {
    case SEARCH_COFFEE:
      return {
        needCoffee: payload.needCoffee,
      };
    default:
      return state;
  }
}

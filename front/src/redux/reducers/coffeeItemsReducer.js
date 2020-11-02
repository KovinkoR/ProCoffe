import { SET_ITEMS, CHANGE_STATUS } from '../actionTypes';

export default function allItemsReducer(state = '', action) {
  switch (action.type) {
    case SET_ITEMS:

      return {
        ...state,
        top: action.payload.top,
        loading: false,
      };
    case CHANGE_STATUS:
      const c = state.top.map((el) => {
        if (el._id === action.payload.item._id) {
          el = action.payload.item;
        }
        return el;
      });
      return {
        ...state,
        top: [...c],
      };
    default:
      return state;
  }
}

import { SET_RATING } from '../actionTypes';

export default function ratingReducer(state = '', action) {

  switch (action.type) {
    case SET_RATING:
      return {
        ...state,
        rating: action.payload.rating,
      };
    // case CHANGE_RATING:
    //   console.log(action);
    //   const chId = state.arr.find(el => el._id === action.payload._id)
    //   const fil = state.arr.map(el => {
    //     if (el._id === action.payload._id) {
    //       el = action.payload
    //     }
    //     return el
    //   })
    //   return {
    //     ...state,
    //     rating: action.payload.rating,
    //   };
    default:
      return state;
  }
}

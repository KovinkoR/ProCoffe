import {
  AUTHENTICATE, LOGOUT, LOGIN, AUTHENTICATE_GOOGLE, REWRITE_USER,
} from '../actionTypes';

const initialState = '';

export default function authReducer(state = initialState, {
  type, payload,
}) {
  switch (type) {
    case AUTHENTICATE:
      return {
        id: payload.id,
        login: payload.login,
        email: payload.email,
        favorites: payload.favorites,
        raited: payload.raited,
        wishlist: payload.wishlist,
      };
    case AUTHENTICATE_GOOGLE:
      return {
        id: payload.id,
        login: payload.login,
        email: payload.email,
        favorites: payload.favorites,
        raited: payload.raited,
        wishlist: payload.wishlist,
      };
    case LOGIN:
      return {
        id: payload.id,
        login: payload.login,
        email: payload.email,
        favorites: payload.favorites,
        raited: payload.raited,
        wishlist: payload.wishlist,
      };
    case REWRITE_USER:
      return {
        id: payload.id,
        login: payload.login,
        email: payload.email,
        favorites: payload.favorites,
        raited: payload.raited,
        wishlist: payload.wishlist,
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
}

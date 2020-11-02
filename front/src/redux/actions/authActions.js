import {
  AUTHENTICATE,
  LOGOUT, LOGIN,
  START_AUTH,
  START_GOOGLE,
  START_LOGIN,
  AUTHENTICATE_GOOGLE,
  START_LOGOUT,
  REWRITE_USER,
} from '../actionTypes';

export function logoutUser(message) {
  return {
    type: LOGOUT,
    payload: {
      message,
    },
  };
}

export function startLogoutUserSaga(payload) {
  return {
    type: START_LOGOUT,
    payload,
  };
}

export function startGoogleAuthenticateSaga(payload) {
  return {
    type: START_GOOGLE,
    payload,
  };
}

export function authenticateGoogleUser(id, login, email, favorites, raited, wishlist) {
  return {
    type: AUTHENTICATE_GOOGLE,
    payload: {
      id,
      login,
      email,
      favorites,
      raited,
      wishlist,
    },
  };
}

export function startLoginSaga(payload) {
  return {
    type: START_LOGIN,
    payload,
  };
}

export function loginUser(id, login, email, favorites, raited, wishlist) {
  return {
    type: LOGIN,
    payload: {
      id,
      login,
      email,
      favorites,
      raited,
      wishlist,
    },
  };
}

export function startAuthenticateUserSaga(payload) {
  return {
    type: START_AUTH,
    payload,
  };
}

export function authenticateUser(id, login, email, favorites, raited, wishlist) {
  return {
    type: AUTHENTICATE,
    payload: {
      id,
      login,
      email,
      favorites,
      raited,
      wishlist,
    },
  };
}

export function startRewriteUser(id, login, email, favorites, raited, wishlist) {
  return {
    type: REWRITE_USER,
    payload: {
      id,
      login,
      email,
      favorites,
      raited,
      wishlist,
    },
  };
}

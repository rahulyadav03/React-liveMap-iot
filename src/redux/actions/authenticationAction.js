import * as types from "./actionTypes";

export function loginSuccess(authData) {
  return { type: types.LOGIN_SUCCESS, authData };
}

export function loginError(loginError) {
  return { type: types.LOGIN_ERROR, loginError };
}

export function login(fetchData) {
  return async function(dispatch) {
    if (fetchData.token != "") {
      await dispatch(loginSuccess(fetchData));
    }
  };
}

export function deleteToken() {
  return { type: types.LOGOUT };
}

export function logout() {
  return async function(dispatch) {
    await dispatch(deleteToken());
  };
}

export function signin(signinData) {
  return { type: types.HIDE_MAP_ICON };
}

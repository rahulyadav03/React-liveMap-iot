import * as types from "./actionTypes";

export function beginApiCall() {
  return { type: types.BEGIN_API_CALL };
}

export function stopApiCall() {
  return { type: types.STOP_API_CALL };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}

export const delay = duration =>
  new Promise(resolve => setTimeout(resolve, duration));

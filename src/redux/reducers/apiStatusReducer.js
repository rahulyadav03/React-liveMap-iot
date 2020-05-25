import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// const initialState = {
//   apiCallSuccess: false,
//   apiCallFailure: false
// };

export default function apiCallStatusReducer(state = initialState, action) {
  let newState = { ...state };
  //let newState = Object.assign(state, {});
  //let newState = state;
  switch (action.type) {
    case types.BEGIN_API_CALL:
      newState.apiCallSuccess = true;
      return newState;
    case types.STOP_API_CALL:
      newState.apiCallSuccess = false;
      return newState;
    case types.API_CALL_ERROR:
      newState.apiCallFailure = true;
      return newState;
    default:
      return state;
  }
}

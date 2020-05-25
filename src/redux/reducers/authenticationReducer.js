import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// const initialState = {
//   authenticationData: {}
// };

export default function dashboardReducer(state = initialState, action) {
  let newState = { ...state };
  //let newState = Object.assign(state, {});
  //let newState = state;
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      newState.authenticationData = action.authData;
      localStorage.setItem("token", newState.authenticationData.token);
      return newState;
    case types.LOGOUT:
      newState.authenticationData = {};
      localStorage.removeItem("token");
      return newState;
    case types.DEFAULT_ERROR:
      newState.error = "";
    default:
      return state;
  }
}

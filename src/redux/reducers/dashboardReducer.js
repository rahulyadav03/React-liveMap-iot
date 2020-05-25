import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// const initialState = {
//   showMapIcon: false,
//   allocationData: []
// };

export default function dashboardReducer(state = initialState, action) {
  let newState = { ...state };
  //let newState = Object.assign(state, {});
  //let newState = state;
  switch (action.type) {
    case types.SHOW_MAP_ICON:
      newState.showMapIcon = true;
      return newState;

    case types.HIDE_MAP_ICON:
      newState.showMapIcon = false;
      return newState;

    case types.OPEN_ALLOCATION:
      newState.openManagement = "allocation";
      return newState;

    case types.OPEN_DEVICE:
      newState.openManagement = "device";
      return newState;

    case types.OPEN_VEHICAL:
      newState.openManagement = "vehical";
      return newState;

    default:
      return state;
  }
}

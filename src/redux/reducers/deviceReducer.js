import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// const initialState = {
//   showMapIcon: false,
//   allocationData: []
// };

export default function deviceReducer(state = initialState, action) {
  let newState = { ...state };
  let new_state;
  //let newState = Object.assign(state, {});
  //let newState = state;
  switch (action.type) {
    case types.GET_DEVICE:
      new_state = action.deviceData;
      newState.deviceData = new_state;
      return newState;

    case types.SAVE_DEVICE:
      new_state = action.deviceData;
      newState.deviceData = new_state;
      return newState;

    case types.UPDATE_DEVICE:
      //This code will be deleted in future
      for (let i = 0; i < newState.deviceData.length; i++) {
        if (newState.deviceData[i].id === action.updateDeviceData.id) {
          newState.deviceData = newState.updateDeviceData;
          return newState;
        }
      }
      return newState;

    case types.DELETE_DEVICE:
      for (let i = 0; i < newState.deviceData.length; i++) {
        if (newState.deviceData[i].id === action.id) {
          newState.deviceData.splice(i, 1);
          return newState;
        }
      }
      return newState;

    default:
      return state;
  }
}

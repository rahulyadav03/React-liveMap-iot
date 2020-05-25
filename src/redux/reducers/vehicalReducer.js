import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// const initialState = {
//   showMapIcon: false,
//   allocationData: []
// };

export default function vehicalReducer(state = initialState, action) {
  let newState = { ...state };
  let new_state;
  //let newState = Object.assign(state, {});
  //let newState = state;
  switch (action.type) {
    case types.GET_VEHICAL:
      new_state = action.vehicalData;
      newState.vehicalData = new_state;
      return newState;

    case types.SAVE_VEHICAL:
      new_state = action.vehicalData;
      newState.vehicalData = new_state;
      return newState;

    case types.UPDATE_VEHICAL:
      //This code will be deleted in future
      for (let i = 0; i < newState.vehicalData.length; i++) {
        if (newState.vehicalData[i].id === action.updateVehicalData.id) {
          newState.vehicalData = newState.updateVehicalData;
          return newState;
        }
      }
      return newState;

    case types.DELETE_DEVICE:
      for (let i = 0; i < newState.vehicalData.length; i++) {
        if (newState.vehicalData[i].id === action.id) {
          newState.vehicalData.splice(i, 1);
          return newState;
        }
      }
      return newState;

    default:
      return state;
  }
}

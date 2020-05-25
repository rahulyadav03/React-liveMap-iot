import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// const initialState = {
//   showMapIcon: false,
//   allocationData: []
// };

export default function allocationReducer(state = initialState, action) {
  let newState = { ...state };
  let new_state;
  //let newState = Object.assign(state, {});
  //let newState = state;
  switch (action.type) {
    case types.SAVE_ALLOCATION:
      new_state = action.allocationData;
      newState.allocationData = new_state;
      return newState;

    case types.GET_CITY:
      new_state = action.cityData;
      newState.cities = new_state;
      return newState;

    case types.UPDATE_ALLOCATION:
      new_state = action.updatedAllocationData;
      newState.allocationData = new_state;
      return newState;

    case types.DELETE_ALLOCATION:
      new_state = action.allocationData;
      newState.allocationData = new_state;
      return newState;

    default:
      return state;
  }
}

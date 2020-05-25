import { combineReducers } from "redux";
import dashboard from "./dashboardReducer";
import apiCallStatusReducer from "./apiStatusReducer";
import authReducer from "./authenticationReducer";

import allocationReducer from "./allocationReducer";
import deviceReducer from "./deviceReducer";
import vehicalReducer from "./vehicalReducer";

const rootReducer = combineReducers({
  dashboard,
  authReducer,
  apiCallStatusReducer,
  allocationReducer,
  deviceReducer,
  vehicalReducer
});

export default rootReducer;

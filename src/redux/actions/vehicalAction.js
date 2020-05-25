import * as types from "./actionTypes";
import {
  beginApiCall,
  stopApiCall,
  apiCallError,
  delay
} from "./apiStatusAction";
import { v4 as uuidv4 } from "uuid";

import { fetchPost, fetchGet } from "../../axiosApi";

export function saveVehicalSuccess(vehicalData) {
  return { type: types.SAVE_VEHICAL, vehicalData };
}

export function saveVehical(vehicalData) {
  return async function(dispatch) {
    await dispatch(beginApiCall());
    let url = "http://vehiclemapapi.azurewebsites.net/api/vehicle/AddVehicle";
    const fetchData = await fetchPost(url, vehicalData);
    await dispatch(saveVehicalSuccess(fetchData));
    await dispatch(stopApiCall());

    //dispatch(apiCallError(authData));
  };
}

export function getVehicalSuccess(vehicalData) {
  return { type: types.GET_VEHICAL, vehicalData };
}

export function getVehicalData() {
  return async function(dispatch) {
    await dispatch(beginApiCall());
    let url = "http://vehiclemapapi.azurewebsites.net/api/vehicle/GetVehicle";
    const fetchData = await fetchGet(url);
    await dispatch(getVehicalSuccess(fetchData));
    await dispatch(stopApiCall());

    //dispatch(apiCallError(authData));
  };
}

export function updateVehicalSuccess(updateVehicalData) {
  return { type: types.UPDATE_VEHICAL, updateVehicalData };
}

export function updateVehical(updateVehicalData) {
  return async function(dispatch) {
    await dispatch(beginApiCall());

    //this code will be removed in future
    await dispatch(updateVehicalSuccess(updateVehicalData));

    //dispatch(apiCallError(authData));
  };
}

export function deleteVehicalSuccess(authData) {
  return { type: types.DELETE_ALLOCATION, authData };
}

export function deleteDevice(id) {
  return async function(dispatch) {
    await dispatch(beginApiCall());

    //this code will be removed in future

    await dispatch(deleteVehicalSuccess(id));

    //dispatch(apiCallError(authData));
  };
}

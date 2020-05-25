import * as types from "./actionTypes";
import {
  beginApiCall,
  stopApiCall,
  apiCallError,
  delay
} from "./apiStatusAction";
import { v4 as uuidv4 } from "uuid";

import { fetchPost, fetchGet, deleteAPI, fetchPut } from "../../axiosApi";

export function saveAllocationSuccess(allocationData) {
  return { type: types.SAVE_ALLOCATION, allocationData };
}

export function saveAllocation(allocationData) {
  return async function(dispatch) {
    await dispatch(beginApiCall());
    let url =
      "http://vehiclemapapi.azurewebsites.net/api/vehicle/AddAllocation";
    const fetchData = await fetchPost(url, allocationData);
    await dispatch(saveAllocationSuccess(fetchData));
    await dispatch(stopApiCall());
    //dispatch(apiCallError(authData));
  };
}

export function getAllocationSuccess(allocationData) {
  return { type: types.SAVE_ALLOCATION, allocationData };
}

export function getAllocation() {
  return async function(dispatch) {
    await dispatch(beginApiCall());
    let url =
      "http://vehiclemapapi.azurewebsites.net/api/vehicle/GetAllocation";
    const fetchData = await fetchGet(url);
    await dispatch(getAllocationSuccess(fetchData));
    await dispatch(stopApiCall());
    //dispatch(apiCallError(authData));
  };
}

export function getCitySuccess(cityData) {
  return { type: types.GET_CITY, cityData };
}

export function getCity() {
  return async function(dispatch) {
    await dispatch(beginApiCall());
    let url = "http://vehiclemapapi.azurewebsites.net/api/vehicle/GetCities";
    const fetchData = await fetchGet(url);
    await dispatch(getCitySuccess(fetchData));
    await dispatch(stopApiCall());
    //dispatch(apiCallError(authData));
  };
}

export function deleteAllocationSuccess(allocationData) {
  return { type: types.DELETE_ALLOCATION, allocationData };
}

export function deleteAllocation(id) {
  return async function(dispatch) {
    await dispatch(beginApiCall());
    let url = `http://vehiclemapapi.azurewebsites.net/api/vehicle/RemoveAllocation/${id}`;
    const fetchData = await deleteAPI(url);
    await dispatch(deleteAllocationSuccess(fetchData));
    await dispatch(stopApiCall());
    //dispatch(apiCallError(authData));
  };
}

export function updateAllocationSuccess(updatedAllocationData) {
  return { type: types.UPDATE_ALLOCATION, updatedAllocationData };
}

export function updateAllocation(updatedAllocationData) {
  return async function(dispatch) {
    await dispatch(beginApiCall());

    let url = `http://vehiclemapapi.azurewebsites.net/api/vehicle/EditAllocation`;
    const fetchData = await fetchPut(url, updatedAllocationData);
    await dispatch(updateAllocationSuccess(fetchData));
    await dispatch(stopApiCall());
  };
}

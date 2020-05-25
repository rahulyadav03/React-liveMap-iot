import * as types from "./actionTypes";

export function showMapIcon() {
  return { type: types.SHOW_MAP_ICON };
}

export function hideMapIcon() {
  return { type: types.HIDE_MAP_ICON };
}

export function openAllocationPage() {
  return { type: types.OPEN_ALLOCATION };
}

export function openDevicePage() {
  return { type: types.OPEN_DEVICE };
}

export function openVehicalPage() {
  return { type: types.OPEN_VEHICAL };
}

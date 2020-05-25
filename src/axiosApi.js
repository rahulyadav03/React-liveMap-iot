import axios from "axios";

export function fetchPost(url, data) {
  var config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET"
    },
    crossdomain: true
  };

  return axios
    .post(url, data, config)
    .then(response => {
      if (response.status == 200) return response.data;
      else return [];
    })
    .catch(error => {
      return [];
    });
}

//for login only
export function fetchLogin(url, data) {
  var config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET"
    },
    crossdomain: true
  };

  return axios
    .post(url, data, config)
    .then(response => {
      if (response.status == 200) return response.data;
      else return [];
    })
    .catch(error => {
      return { token: "" };
    });
}

export function fetchPut(url, data) {
  var config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET"
    },
    crossdomain: true
  };

  return axios.put(url, data, config).then(response => {
    if (response.status == 200) return response.data;
    else return [];
  });
}

export function fetchGet(url) {
  var config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET"
    },
    crossdomain: true
  };

  return axios.get(url, config).then(response => {
    if (response.status == 200) return response.data;
    else return [];
  });
}

export function deleteAPI(url) {
  var config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET"
    },
    crossdomain: true
  };

  return axios.delete(url, config).then(response => {
    if (response.status == 200) return response.data;
    else return [];
  });
}

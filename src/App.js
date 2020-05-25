import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Login from "./views/Authentication/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// core components
import Admin from "./layouts/Admin";
import "./assets/css/material-dashboard-react.css?v=1.8.0";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        {localStorage.getItem("token") ? (
          <Redirect from="/" to="/admin" />
        ) : (
          <Redirect from="/" to="/login" />
        )}

        <Redirect from="/admin" to="/admin/dashboard" />
      </Switch>
      <ToastContainer autoclose={2000} hideProgressBar />
    </React.Fragment>
  );
}

export default App;

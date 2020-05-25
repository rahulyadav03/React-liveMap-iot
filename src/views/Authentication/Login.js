import React, { useState } from "react";
import clsx from "clsx";
import { fetchLogin } from "../../axiosApi";

import CircularProgress from "@material-ui/core/CircularProgress";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";

import * as authActions from "../../redux/actions/authenticationAction";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/img/myBike.jpg";

import { green, red } from "@material-ui/core/colors";

// import { toast } from "react-toastify";

import { toast } from "react-toastify";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  image: {
    backgroundImage: logo,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

async function sendLoginData(loginData, props, setApiCallStatus) {
  setApiCallStatus(true);
  let url = "http://vehiclemapapi.azurewebsites.net/api/vehicle/Login";
  const fetchData = await fetchLogin(url, loginData);
  return fetchData;
}

function Login(props) {
  const { actions } = props;
  let history = useHistory();
  const [state, setState] = useState({ userid: "", password: "" });
  const [apiCallStatus, setApiCallStatus] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (state.userid === "") {
      setEmailError(true);
    }
    if (state.password === "") {
      setPasswordError(true);
    }
    if (state.userid !== "" && state.password !== "") {
      sendLoginData(state, props, setApiCallStatus).then(async loginData => {
        await actions.login(loginData);
        setApiCallStatus(false);
        if (loginData.token != "") {
          toast.success("Login succesfully.");
          history.push("/admin");
        } else {
          toast.error(
            "Sorry, Username or password is incorrect, Please try again!"
          );
        }
      });
    }
  }

  const classes = useStyles();

  const changeField = e => {
    //setState({ ...state, [e.target.name]: e.target.value }); //Microsoft edge does not support spread operator
    const newState = Object.assign(state, { [e.target.name]: e.target.value });
    setEmailError(false);
    setPasswordError(false);
    setState(newState);
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: props.apiCallStatus
  });

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className="bikeImg" />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={e => handleSubmit(e)}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="userid"
                label="Username"
                name="userid"
                autoComplete="userid"
                autoFocus
                onChange={e => changeField(e)}
                error={emailError}
                helperText={emailError ? "User name is Required!" : " "}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => changeField(e)}
                error={passwordError}
                helperText={passwordError ? "Password is Required!" : " "}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={apiCallStatus}
                  className={buttonClassname}
                >
                  Save
                </Button>
                {apiCallStatus && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

function mapStateToProps(state) {
  return {
    loginSuccessData: state.authReducer.authenticationData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(authActions.login, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

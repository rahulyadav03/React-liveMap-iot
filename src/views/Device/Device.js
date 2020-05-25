import React, { useEffect } from "react";

/** Import dependent Page to show list data */
import DeviceTable from "./DeviceTable";

/** Import third party library */
import clsx from "clsx";

/** Import redux related stuff */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as deviceAction from "../../redux/actions/deviceAction";

// @material-ui/core components
import { withStyles, makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { orange, red, green } from "@material-ui/core/colors";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

/** Import toastify Library for showing success message */
import { toast } from "react-toastify";

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
}))(Button);

const useStyles = makeStyles(theme =>
  createStyles({
    wrapper: {
      margin: theme.spacing(1),
      position: "relative"
    },
    buttonSuccess: {
      backgroundColor: red[500],
      "&:hover": {
        backgroundColor: red[700]
      }
    },
    cancelSuccess: {
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700]
      }
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "20%",
      marginTop: -12,
      marginLeft: -12
    },
    cancelButtonProgress: {
      color: red[500],
      position: "absolute",
      top: "50%",
      left: "70%",
      marginTop: -12,
      marginLeft: -12
    },
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
    }
  })
);

function Device(props) {
  const { actions } = props;
  /** Use style related stuff */
  const classes = useStyles();

  //state Parameters
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    imeinumber: "",
    deviceModel: "",
    description: ""
  });
  const [imeiError, setImeiNoError] = React.useState(false);
  const [modelError, setModelNumberError] = React.useState(false);
  const [descriptionError, setDescriptionError] = React.useState(false);

  useEffect(() => {
    if (props.deviceData.length == 0) actions.getDeviceData();
    return () => {};
  }, []);

  /** All required functions for fill allocation */
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (state.imeinumber === "") setImeiNoError(true);
    if (state.deviceModel === "") setModelNumberError(true);
    if (state.description === "") setDescriptionError(true);
    if (
      state.imeinumber !== "" &&
      state.deviceModel !== "" &&
      state.description !== ""
    ) {
      let ts = new Date();
      state.createStingDate = ts.toLocaleString();
      state.createdDate = new Date().toISOString();
      state.modifiedDate = new Date().toISOString();
      await actions.saveDevice(state);
      toast.success("Data saved succesfully.");
      handleClose();
    }
  }

  const changeField = e => {
    setState({ ...state, [e.target.id]: e.target.value }); //Microsoft edge does not support spread operator
    setImeiNoError(false);
    setModelNumberError(false);
    setDescriptionError(false);
    //const newState = Object.assign(state, { [e.target.name]: e.target.value });
    //setState(newState);
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: props.apiCallStatus
  });

  const cancelButtonClassname = clsx({
    [classes.cancelSuccess]: props.apiCallStatus
  });

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <ColorButton
            variant="contained"
            color="primary"
            backgroundcolor="#27b084"
            className="bikeMgmtButton"
            onClick={handleClickOpen}
          >
            Add New Device
          </ColorButton>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Device Table</h4>
              <p className={classes.cardCategoryWhite}>
                List of all created Devices.
              </p>
            </CardHeader>
            <CardBody>
              <DeviceTable
                deviceData={props.deviceData}
                apiCallStatus={props.apiCallStatus}
                loadingClass={classes.cancelButtonProgress}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {/*  Device Modal */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Device</DialogTitle>
          <form noValidate onSubmit={e => handleSubmit(e)}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="imeinumber"
                label="IMEI No."
                type="text"
                fullWidth
                onChange={e => changeField(e)}
                error={imeiError}
                helperText={imeiError ? "IMEI number is Required!" : " "}
              />
              <TextField
                margin="dense"
                id="deviceModel"
                label="Device Model"
                type="text"
                fullWidth
                onChange={e => changeField(e)}
                error={modelError}
                helperText={modelError ? "Device Model is Required!" : " "}
              />
              <TextField
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
                onChange={e => changeField(e)}
                error={descriptionError}
                helperText={descriptionError ? "Description is Required!" : " "}
              />
            </DialogContent>
            <DialogActions>
              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.apiCallStatus}
                  className={buttonClassname}
                  style={{ marginRight: "10px" }}
                >
                  Save
                </Button>
                {props.apiCallStatus && (
                  <CircularProgress
                    size={24}
                    className={classes.buttonProgress}
                  />
                )}

                <Button
                  variant="contained"
                  color="secondary"
                  disabled={props.apiCallStatus}
                  className={cancelButtonClassname}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                {props.apiCallStatus && (
                  <CircularProgress
                    size={24}
                    className={classes.cancelButtonProgress}
                  />
                )}
              </div>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    deviceData: state.deviceReducer.deviceData,
    apiCallStatus: state.apiCallStatusReducer.apiCallSuccess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveDevice: bindActionCreators(deviceAction.saveDevice, dispatch),
      getDeviceData: bindActionCreators(deviceAction.getDeviceData, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Device);

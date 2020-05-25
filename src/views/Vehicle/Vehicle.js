import React, { useEffect } from "react";

/** Import dependent Page to show list data */
import VehicleTable from "./VehicleTable";

/** Import third party library */
import clsx from "clsx";

// @material-ui/core components
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";
import { orange, red, green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";

/** Import redux related stuff */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as vehicalAction from "../../redux/actions/vehicalAction";

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

//const useStyles = makeStyles(styles);

function Vehicle(props) {
  const { actions } = props;
  /** Use style related stuff */
  const classes = useStyles();

  //state Parameters
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    vehicleType: "",
    vehicleModel: "",
    description: ""
  });
  const [typeError, setTypeError] = React.useState(false);
  const [modelError, setModelError] = React.useState(false);
  const [descriptionError, setDescriptionError] = React.useState(false);

  useEffect(() => {
    if (props.vehicalData.length == 0) actions.getVehicalData();
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
    if (state.vehicleType === "") setTypeError(true);
    if (state.vehicleModel === "") setModelError(true);
    if (state.description === "") setDescriptionError(true);
    if (
      state.vehicleType !== "" &&
      state.vehicleModel !== "" &&
      state.description !== ""
    ) {
      let ts = new Date();
      state.createStingDate = ts.toLocaleString();
      state.createdDate = new Date().toISOString();
      state.modifiedDate = new Date().toISOString();
      await actions.saveVehical(state);
      toast.success("Data saved succesfully.");
      handleClose();
    }
  }

  const changeField = e => {
    setState({ ...state, [e.target.id]: e.target.value }); //Microsoft edge does not support spread operator
    setTypeError(false);
    setModelError(false);
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
            Add New Vehical
          </ColorButton>
          <Card>
            <CardHeader color="rose">
              <h4 className={classes.cardTitleWhite}>Vehicle Table</h4>
              <p className={classes.cardCategoryWhite}>
                List of all created Vehicles.
              </p>
            </CardHeader>
            <CardBody>
              <VehicleTable
                vehicalData={props.vehicalData}
                apiCallStatus={props.apiCallStatus}
                loadingClass={classes.cancelButtonProgress}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {/* Modal */}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Vehical</DialogTitle>
          <form noValidate onSubmit={e => handleSubmit(e)}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="vehicleType"
                label="Vehical Type"
                type="text"
                fullWidth
                onChange={e => changeField(e)}
                error={typeError}
                helperText={typeError ? "Vehical Type is Required!" : " "}
              />
              <TextField
                margin="dense"
                id="vehicleModel"
                label="Vehical Model"
                type="text"
                fullWidth
                onChange={e => changeField(e)}
                error={modelError}
                helperText={modelError ? "Vehical Model is Required!" : " "}
              />
              <TextField
                margin="dense"
                id="description"
                label="Description"
                type="email"
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
    vehicalData: state.vehicalReducer.vehicalData,
    apiCallStatus: state.apiCallStatusReducer.apiCallSuccess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveVehical: bindActionCreators(vehicalAction.saveVehical, dispatch),
      getVehicalData: bindActionCreators(vehicalAction.getVehicalData, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);

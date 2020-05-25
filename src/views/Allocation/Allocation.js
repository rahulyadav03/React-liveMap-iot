import React, { useEffect } from "react";

/** Import dependent Page to show list data */

import AllocationTable from "./AllocationTable";

/** Import third party library */
import clsx from "clsx";

// @material-ui/core components
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { orange, green, red } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";

//redux related stuff
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as allocationActions from "../../redux/actions/allocationAction";
import * as deviceAction from "../../redux/actions/deviceAction";
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

const styles = {};

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center"
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
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

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
}))(Button);

//const useStyles = makeStyles(styles);

function Allocation(props) {
  const { actions } = props;
  /** Use style related stuff */
  const classes = useStyles();

  useEffect(() => {
    if (props.deviceData.length == 0) actions.getDeviceData();
    if (props.vehicalData.length == 0) actions.getVehicalData();
    if (props.cities.length == 0) actions.getCity();
    if (props.allocationData.length == 0) actions.getAllocation();
    return () => {};
  }, []);

  let vehical = props.vehicalData;
  let device = props.deviceData;
  let city = props.cities;

  //state Parameters
  const [allocationActionName, setAllocationActionName] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [vehicalData, setVehicalData] = React.useState([]);
  const [deviceData, setDeviceData] = React.useState([]);
  const [cityData, setCityData] = React.useState([]);
  const [editAllocationId, setEditAllocationId] = React.useState(null);
  //Delete Edit Pop Up
  const [deleteModal, setDeleteModal] = React.useState(false);
  const [deleteAllocationId, setDeleteAllocationId] = React.useState(null);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 350
      }
    }
  };

  /** All required functions for fill allocation */
  const handleDeviceChange = event => {
    setDeviceData(event.target.value);
  };

  const handleVehicalChange = e => {
    setVehicalData(e.target.value);
  };

  const handleCityChange = event => {
    setCityData(event.target.value);
  };

  const handleClickOpen = () => {
    setAllocationActionName("add");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    let data = {
      vehicleId: vehicalData.id,
      deviceId: deviceData.id,
      CityId: cityData.id
    };
    let ts = new Date();
    data.createStingDate = ts.toLocaleString();
    data.createdDate = new Date().toISOString();
    data.modifiedDate = new Date().toISOString();
    data.status = true;

    if (allocationActionName === "add") {
      await actions.saveAllocation(data);
      toast.success("Data saved succesfully.");
    } else {
      data.id = editAllocationId;
      await actions.updateAllocation(data);
      toast.success("Data update succesfully.");
    }

    handleClose();
  }

  const editAllocationOpen = data => {
    setAllocationActionName("edit");
    setEditAllocationId(data.id);
    setOpen(true);
    setVehicalData(data.vehicle);
    setDeviceData(data.device);
    setCityData(data.city);
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: props.apiCallStatus
  });

  const cancelButtonClassname = clsx({
    [classes.cancelSuccess]: props.apiCallStatus
  });

  const handleDeleteOpen = id => {
    setDeleteAllocationId(id);
    setDeleteModal(true);
  };

  const deleteAllocation = async id => {
    await actions.deleteAllocation(id);
    toast.success("Data deleted succesfully.");
    handleDeleteClose();
  };

  const handleDeleteClose = () => {
    setDeleteModal(false);
  };

  const getIndex = (id, data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        return i;
      }
    }
    return "";
  };

  /**render function for UI screen */
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
            Add New Allocation
          </ColorButton>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Allocation Table</h4>
              <p className={classes.cardCategoryWhite}>
                List of all created Allocation
              </p>
            </CardHeader>
            <CardBody>
              <div className="dashboardTable">
                <AllocationTable
                  allocationData={props.allocationData}
                  deleteAllocation={deleteAllocation}
                  editAllocationId={editAllocationOpen}
                  handleDeleteOpen={handleDeleteOpen}
                  deleteAllocationId={deleteAllocationId}
                  deleteModal={deleteModal}
                  handleDeleteClose={handleDeleteClose}
                  apiCallStatus={props.apiCallStatus}
                  classes={classes}
                />
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {allocationActionName === "add"
              ? "New Allocation"
              : "Edit Allocation"}
          </DialogTitle>
          <form noValidate onSubmit={e => handleSubmit(e)}>
            <DialogContent>
              <FormControl className={classes.formControl}>
                <InputLabel id="vehical">Vehical</InputLabel>
                <Select
                  labelId="vehical"
                  id="vehical"
                  value={vehical[getIndex(vehicalData.id, vehical)]}
                  onChange={handleVehicalChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {vehical.map(obj => (
                    <MenuItem
                      key={obj.id}
                      value={obj}
                      // style={getStyles(obj.name, vehicalData, theme)}
                    >
                      {obj.vehicleType} , {obj.vehicleModel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id="device">Device</InputLabel>
                <Select
                  labelId="device"
                  id="device"
                  value={device[getIndex(deviceData.id, device)]}
                  onChange={handleDeviceChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {device.map(obj => (
                    <MenuItem
                      key={obj.id}
                      value={obj}
                      // style={getStyles(obj.name, deviceData, theme)}
                    >
                      {obj.imeiNumber} , {obj.deviceModel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel id="city">City</InputLabel>
                <Select
                  labelId="city"
                  id="city"
                  value={city[getIndex(cityData.id, city)]}
                  onChange={handleCityChange}
                  input={<Input />}
                  MenuProps={MenuProps}
                >
                  {city.map(obj => (
                    <MenuItem
                      key={obj.id}
                      value={obj}
                      // style={getStyles(obj.name, cityData, theme)}
                    >
                      {obj.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                  {allocationActionName === "add" ? "Save" : "Update"}
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
    vehicalData: state.vehicalReducer.vehicalData,
    cities: state.allocationReducer.cities,
    allocationData: state.allocationReducer.allocationData,
    apiCallStatus: state.apiCallStatusReducer.apiCallSuccess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      saveAllocation: bindActionCreators(
        allocationActions.saveAllocation,
        dispatch
      ),
      getDeviceData: bindActionCreators(deviceAction.getDeviceData, dispatch),
      getVehicalData: bindActionCreators(
        vehicalAction.getVehicalData,
        dispatch
      ),
      getCity: bindActionCreators(allocationActions.getCity, dispatch),
      deleteAllocation: bindActionCreators(
        allocationActions.deleteAllocation,
        dispatch
      ),
      getAllocation: bindActionCreators(
        allocationActions.getAllocation,
        dispatch
      ),
      updateAllocation: bindActionCreators(
        allocationActions.updateAllocation,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Allocation);

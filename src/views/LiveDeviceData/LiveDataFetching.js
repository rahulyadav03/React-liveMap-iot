import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// @material-ui/core
import Icon from "@material-ui/core/Icon";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CircularProgress from "@material-ui/core/CircularProgress";

/** Live Data Main Component for fetching apis */
import DummyMapForTesting from "../Livemap/DummyMapForTesting";

/** Liquid Live Data Code implement*/
import FuelLevel from "./FuelLevel";
import VehicalSpeedData from "./VehicalSpeedData";
import Odometerdata from "./Odometerdata";
import VehicleHealthdata from "./VehicleHealthdata";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const useStylesNew = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2)
      }
    }
  })
);

// import ProgressBar from "react-bootstrap/ProgressBar";
// import Card from "react-bootstrap/Card";

function LiveDataFetching(props) {
  const classes = useStyles();
  const classesNew = useStylesNew();

  const [count, setCount] = useState([]);
  const [bikeData, setBikeData] = useState([]);
  const [bikeDescription, setBikeDescription] = useState(null);

  async function updateLiveMap() {
    const response = await fetch(
      `http://vehiclemapapi.azurewebsites.net/api/vehicle/GetVehicleData/${props.match.params.id}`
    );
    const data = await response.json();
    if (data.length > 0) data[0].payloadData = JSON.parse(data[0].payloadData);

    setBikeData(data);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateLiveMap();
    }, 1000);
    return () => clearInterval(interval);
    // let data = [
    //   {
    //     latitude: 28.192762,
    //     longitude: 76.62394,
    //     id: 1,
    //     payloadData: {
    //       bike_speed: 80,
    //       Bike_health: 50,
    //       Odometer: 62,
    //       Fuel_level: 23,
    //       Brake_oil: 50,
    //       latitude: 28.192762,
    //       longitude: 76.62394
    //     }
    //   }
    // ];
    // console.log("data", data[0].latitude);
    // setBikeData(data);
  }, []);

  const showBikePopup = bike => {
    setBikeDescription(bike.payloadData);
  };

  const closePopup = data => {
    setBikeDescription(false);
  };

  return (
    <div>
      <GridContainer>
        {bikeData.length > 0 ? (
          <>
            {/* Fuel Code start */}
            <FuelLevel
              value={bikeData[0].payloadData.Fuel_level * 10}
              name={"Fuel oil"}
            />
            {/* Fuel code end */}

            {/* Spped Code start */}
            <VehicalSpeedData value={bikeData[0].payloadData.bike_speed} />
            {/* Speed code end */}

            {/* Break oil Code start */}
            <FuelLevel
              value={bikeData[0].payloadData.Brake_oil * 10}
              name={"Brake oil"}
            />
            {/* Break oil code end */}

            {/* Odometer start */}
            <Odometerdata value={bikeData[0].payloadData.Odometer} />
            {/* Odometer end */}

            {/* VehicleHealthdata Start*/}
            <VehicleHealthdata value={bikeData[0].payloadData.Bike_health} />
            {/* VehicleHealthdata End*/}

            <GridItem xs={12} sm={12} md={12}>
              <Card
                style={{
                  width: "98%",
                  height: "100%",
                  marginLeft: "10px",
                  marginRight: "10px"
                }}
              >
                <DummyMapForTesting
                  bikeData={bikeData}
                  bikeDescription={bikeDescription}
                  showBikePopup={showBikePopup}
                  closePopup={closePopup}
                />
              </Card>
            </GridItem>
          </>
        ) : (
          <>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <Icon>content_copy</Icon>
                  </CardIcon>
                  <p className={classes.cardCategory}>Data Loading</p>
                  <div className={classesNew.root}>
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                  </div>
                </CardHeader>
                <CardBody>
                  <p
                    style={{
                      color: "#000",
                      fontSize: "20px",
                      fontWeight: "bold"
                    }}
                  >
                    {" "}
                    Please wait, Live data is loading....
                    <span style={{ display: "block", color: "red" }}>
                      If you still see this issue after 5 secs then Please call
                      the adminstration.
                    </span>
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </>
        )}
      </GridContainer>
    </div>
  );
}

export default withRouter(LiveDataFetching);

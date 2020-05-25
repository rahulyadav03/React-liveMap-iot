import React, { useState, useEffect } from "react";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import mapImg from "../../assets/img/motorbike.png";
import { withRouter } from "react-router";

// @material-ui/core// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";

// core components
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Danger from "../../components/Typography/Danger.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

/** Liquid Live Data Code implement*/
import FuelLevel from "../LiveDeviceData/FuelLevel";
import VehicalSpeedData from "../LiveDeviceData/VehicalSpeedData";
import Odometerdata from "../LiveDeviceData/Odometerdata";
import VehicleHealthdata from "../LiveDeviceData/VehicleHealthdata";

const useStyles = makeStyles(styles);

// import ProgressBar from "react-bootstrap/ProgressBar";
// import Card from "react-bootstrap/Card";

function LiveMap(props) {
  const classes = useStyles();

  let myIcon = L.icon({
    iconUrl: mapImg,
    iconSize: [50, 50],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
  });
  const [count, setCount] = useState(10);

  async function updateLiveMap() {
    const response = await fetch(
      `http://vehiclemapapi.azurewebsites.net/api/vehicle/GetVehicleData/${props.match.params.id}`
    );
    const data = await response.json();
    data[0].payloadData = JSON.parse(data[0].payloadData);
    setCount(data);
  }

  useEffect(() => {
    console.log("${props.match.params.id} ", props.match.params.id);
    // const interval = setInterval(() => {
    //   updateLiveMap();
    // }, 1000);
    // return () => clearInterval(interval);
    let data = [
      {
        latitude: 28.192762,
        longitude: 76.62394,
        id: 1,
        payloadData: {
          bike_speed: 80,
          Bike_health: 50,
          Odometer: 62,
          Fuel_level: 23,
          Brake_oil: 50,
          latitude: 28.192762,
          longitude: 76.62394
        }
      }
    ];
    setCount(data);
  }, []);

  const [bikeData, setBikeData] = useState(null);
  return (
    <>
      {/* Bike Chart Section */}
      <div>
        <GridContainer>
          {/* Fuel Code start */}
          <FuelLevel />
          {/* Fuel code end */}
          {/* Speedometer Code start */}
          <VehicalSpeedData />
          {/* Speedometer code end */}
          <FuelLevel />
          {/* Fuel code end */}
          {/* Odometer */}
          <Odometerdata />
          {/* VehicleHealthdata */}
          <VehicleHealthdata />
          {/* <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Used Space</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Get more space
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem> */}
        </GridContainer>
      </div>

      {/* Bike Map Section */}

      <div className="map">
        {count.length > 0 && (
          <>
            {/* {count[0].latitude} >>>> {count[0].longitude} */}
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Card
                  style={{
                    width: "98%",
                    height: "100%",
                    marginLeft: "10px",
                    marginRight: "10px"
                  }}
                >
                  <Map
                    className="map"
                    center={[count[0].latitude, count[0].longitude]}
                    zoom={18}
                  >
                    <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {count.map(bike => (
                      <Marker
                        key={bike.id}
                        position={[bike.latitude, bike.longitude]}
                        icon={myIcon}
                        onClick={() => {
                          setBikeData(bike.payloadData);
                        }}
                      />
                    ))}

                    {bikeData && (
                      <Popup
                        position={[bikeData.latitude, bikeData.longitude]}
                        onClose={() => {
                          setBikeData();
                        }}
                      >
                        <h2>List of sensors used in this car</h2>
                        <div>
                          <h5>{bikeData.bike_speed}</h5>
                          <h5>{bikeData.Bike_health}</h5>
                          <h5>{bikeData.Odometer}</h5>
                          <h5>{bikeData.Fuel_level}</h5>
                          <h5>{bikeData.Brake_oil}</h5>
                        </div>
                      </Popup>
                    )}
                  </Map>
                </Card>
              </GridItem>
            </GridContainer>
          </>
        )}
      </div>
    </>
  );
}

export default withRouter(LiveMap);

import React, { useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer";
// @material-ui/core// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Warning from "@material-ui/icons/Warning";
import Accessibility from "@material-ui/icons/Accessibility";

/** code library */
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Danger from "../../components/Typography/Danger.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CardBody from "../../components/Card/CardBody.js";

const useStyles = makeStyles(styles);

function VehicleHealthdata(props) {
  const [bikeHealth, setBikeHealth] = useState(props.value);
  const classes = useStyles();
  useEffect(() => {
    setBikeHealth(props.value);
    return () => {};
  }, [props.value]);
  return (
    <GridItem xs={12} sm={6} md={5}>
      <Card>
        <CardHeader color="info" stats icon>
          <CardIcon color="info">
            <Accessibility />
          </CardIcon>
          <p className={classes.cardCategory}>Bike Health</p>
          <h3 className={classes.cardTitle}>{props.value} % </h3>
        </CardHeader>
        <CardBody style={{ height: "200px" }}>
          <ReactSpeedometer
            width={350}
            needleHeightRatio={0.7}
            value={props.value * 10}
            currentValueText="Current Bike Health"
            customSegmentLabels={[
              {
                text: "Very Bad",
                position: "INSIDE",
                color: "#555"
              },
              {
                text: "Bad",
                position: "INSIDE",
                color: "#555"
              },
              {
                text: "Ok",
                position: "INSIDE",
                color: "#555",
                fontSize: "19px"
              },
              {
                text: "Good",
                position: "INSIDE",
                color: "#555"
              },
              {
                text: "Very Good",
                position: "INSIDE",
                color: "#555"
              }
            ]}
            ringWidth={47}
            needleTransitionDuration={3333}
            needleTransition="easeElastic"
            needleColor={"#90f2ff"}
            textColor={"#d8dee9"}
          />
        </CardBody>
        <CardFooter stats>
          <div className={classes.stats}>
            <a>Current bike Health</a>
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default VehicleHealthdata;

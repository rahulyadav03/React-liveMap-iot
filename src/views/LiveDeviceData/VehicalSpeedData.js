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

function VehicalSpeedData(props) {
  const [speed, setSpeed] = useState(props.value);
  const classes = useStyles();
  useEffect(() => {
    setSpeed(props.bike_speed);
    return () => {};
  }, [props.value]);
  return (
    <GridItem xs={12} sm={6} md={5}>
      <Card>
        <CardHeader color="info" stats icon>
          <CardIcon color="info">
            <Accessibility />
          </CardIcon>
          <p className={classes.cardCategory}>Speed</p>
          <h3 className={classes.cardTitle}>{props.value}</h3>
        </CardHeader>
        <CardBody>
          <ReactSpeedometer
            maxValue={80}
            value={props.value}
            needleColor="red"
            startColor="green"
            segments={10}
            endColor="blue"
            textColor="grey"
            textColor="limegreen"
            height={180}
          />
        </CardBody>
        <CardFooter stats>
          <div className={classes.stats}>
            <a>
              {props.value < 40
                ? "Running in Low Speed"
                : props.value > 40 && props.value < 60
                ? "Running in Normal Speed"
                : "Running in High speed"}
            </a>
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default React.memo(VehicalSpeedData);

import React, { useState, useEffect } from "react";

// @material-ui/core// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";

/** code library */
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CardBody from "../../components/Card/CardBody.js";

const useStyles = makeStyles(styles);

function Odometerdata(props) {
  const [odometerValue, setOdometerValue] = useState(props.value);
  const classes = useStyles();
  useEffect(() => {
    setOdometerValue(props.value);
    return () => {};
  }, [props.value]);
  return (
    <GridItem xs={12} sm={6} md={3}>
      <Card>
        <CardHeader color="success" stats icon>
          <CardIcon color="success">
            <Store />
          </CardIcon>
          <p className={classes.cardCategory}>Odometer</p>
        </CardHeader>
        <CardBody>
          <h3 className={classes.cardTitle}>{props.value}</h3>
        </CardBody>
        <CardFooter stats>
          <div className={classes.stats}>Current Odometer Data</div>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default React.memo(Odometerdata);

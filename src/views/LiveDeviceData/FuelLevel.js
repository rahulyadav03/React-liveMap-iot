import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// @material-ui/core// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";

/** Liquid level Chart Library */
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";

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

function FuelLevel(props) {
  const classes = useStyles();
  /* Fuel Level Code Start*/
  const [value, setValue] = useState(props.value);

  const startColor = "#6495ed"; // cornflowerblue
  const endColor = "#dc143c"; // crimson

  const radius = 150;
  const interpolate = interpolateRgb(startColor, endColor);
  const fillColor = interpolate(value / 100);
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor)
        .darker(0.5)
        .toString(),
      stopOpacity: 1,
      offset: "0%"
    },
    {
      key: "50%",
      stopColor: fillColor,
      stopOpacity: 0.75,
      offset: "50%"
    },
    {
      key: "100%",
      stopColor: color(fillColor)
        .brighter(0.5)
        .toString(),
      stopOpacity: 0.5,
      offset: "100%"
    }
  ];

  useEffect(() => {
    setValue(props.value);
    return () => {};
  }, [props.value]);

  /* Fuel level code end */

  return (
    <>
      {/* Fuel Level code Start */}
      <GridItem xs={12} sm={6} md={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <Icon>content_copy</Icon>
            </CardIcon>
            <p className={classes.cardCategory}>{props.name}</p>
            <br />
            <h3 className={classes.cardTitle}>{props.value / 10}/10</h3>
          </CardHeader>
          {/* style={{ marginTop: "15px" }} */}
          <CardBody>
            <LiquidFillGauge
              style={{ margin: "0 auto" }}
              width={radius * 1}
              height={radius * 1}
              value={value}
              percent="%"
              textSize={1}
              textOffsetX={0}
              textOffsetY={0}
              textRenderer={props => {
                const value = Math.round(props.value);
                const radius = Math.min(props.height / 2, props.width / 2);
                const textPixels = (props.textSize * radius) / 2;
                const valueStyle = {
                  fontSize: textPixels
                };
                const percentStyle = {
                  fontSize: textPixels * 0.6
                };

                return (
                  <tspan>
                    <tspan className="value" style={valueStyle}>
                      {value}
                    </tspan>
                    <tspan style={percentStyle}>{props.percent}</tspan>
                  </tspan>
                );
              }}
              riseAnimation
              waveAnimation
              waveFrequency={2}
              waveAmplitude={1}
              gradient
              gradientStops={gradientStops}
              circleStyle={{
                fill: fillColor
              }}
              waveStyle={{
                fill: fillColor
              }}
              textStyle={{
                fill: color("#444").toString(),
                fontFamily: "Arial"
              }}
              waveTextStyle={{
                fill: color("#fff").toString(),
                fontFamily: "Arial"
              }}
              onClick={() => {
                this.setState({ value: Math.random() * 100 });
              }}
            />
            {/* <div
              style={{
                margin: "20px auto",
                width: 120
              }}
            >
              <button
                type="button"
                className="btn btn-default btn-block"
                onClick={() => {
                  setValue(Math.random() * 100);
                }}
              >
                Refresh
              </button>
            </div> */}
          </CardBody>
          <CardFooter stats>
            <div className={classes.stats}>
              <a>
                {props.value < 25
                  ? `Low ${props.name}`
                  : props.value > 25 && props.value < 75
                  ? `Normal ${props.name}`
                  : `Enough ${props.name}`}
              </a>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      {/* Fuel level code end */}
    </>
  );
}

export default React.memo(FuelLevel);

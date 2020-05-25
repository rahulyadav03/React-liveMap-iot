import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import mapImg from "../../assets/img/motorbike.png";

import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

let myIcon = L.icon({
  iconUrl: mapImg,
  iconSize: [50, 50],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

function DummyMapForTesting(props) {
  return (
    <>
      <Map
        className="map"
        center={[props.bikeData[0].latitude, props.bikeData[0].longitude]}
        zoom={15}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {props.bikeData.map(bike => (
          <Marker
            key={bike.id}
            onClick={() => {
              props.showBikePopup(bike);
            }}
            position={[bike.latitude, bike.longitude]}
            icon={myIcon}
          />
        ))}

        {props.bikeDescription && (
          <Popup
            position={[props.bikeData[0].latitude, props.bikeData[0].longitude]}
            onClose={() => {
              props.closePopup(false);
            }}
          >
            {/* <h2>List of sensors used in this car</h2>
            <div>
              <h5>Bike Speed : {props.bikeData[0].payloadData.bike_speed}</h5>
            </div> */}
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require("../../assets/img/sexyBike.jpg")}
              />
              <Card.Body>
                <Card.Title>Bike Details</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Apche RTR 180 cc
                </Card.Subtitle>
                <Card.Text style={{ color: "red" }}>
                  Bike is in not in good condition, Service is required.
                  Currently running in gurgaon city.
                </Card.Text>
                <Card.Text>
                  <span className="greenColor"></span>{" "}
                  <span className="colorText">Excellent</span>
                  <span className="blueColor"></span>{" "}
                  <span className="colorText">Good</span>
                  <span className="yellowColor"></span>{" "}
                  <span className="colorText">Warning</span>
                  <span className="redColor"></span>{" "}
                  <span className="colorText">Danger</span>
                </Card.Text>
                <div style={{ display: "flex" }}>
                  <span>Bike Speed</span>
                  <div style={{ flexGrow: 1, marginLeft: "5px" }}>
                    <ProgressBar
                      animated
                      variant={
                        props.bikeData[0].payloadData.bike_speed > 70
                          ? "success"
                          : props.bikeData[0].payloadData.bike_speed > 50 &&
                            props.bikeData[0].payloadData.bike_speed < 70
                          ? "info"
                          : props.bikeData[0].payloadData.bike_speed > 20 &&
                            props.bikeData[0].payloadData.bike_speed < 50
                          ? "warning"
                          : props.bikeData[0].payloadData.bike_speed < 20
                          ? "danger"
                          : null
                      }
                      now={props.bikeData[0].payloadData.bike_speed}
                      label={`${props.bikeData[0].payloadData.bike_speed}%`}
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <span>Bike Health</span>
                  <div style={{ flexGrow: 1, marginLeft: "5px" }}>
                    <ProgressBar
                      animated
                      variant={
                        props.bikeData[0].payloadData.Bike_health > 70
                          ? "success"
                          : props.bikeData[0].payloadData.Bike_health > 50 &&
                            props.bikeData[0].payloadData.Bike_health < 70
                          ? "info"
                          : props.bikeData[0].payloadData.Bike_health > 20 &&
                            props.bikeData[0].payloadData.Bike_health < 50
                          ? "warning"
                          : props.bikeData[0].payloadData.Bike_health < 20
                          ? "danger"
                          : null
                      }
                      now={props.bikeData[0].payloadData.Bike_health}
                      label={`${props.bikeData[0].payloadData.Bike_health}%`}
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <span>Odometer</span>
                  <div style={{ flexGrow: 1, marginLeft: "5px" }}>
                    <ProgressBar
                      animated
                      variant={
                        props.bikeData[0].payloadData.Odometer / 1000 > 70
                          ? "success"
                          : props.bikeData[0].payloadData.Odometer / 1000 >
                              50 &&
                            props.bikeData[0].payloadData.Odometer / 1000 < 70
                          ? "info"
                          : props.bikeData[0].payloadData.Odometer / 1000 >
                              20 &&
                            props.bikeData[0].payloadData.Odometer / 1000 < 50
                          ? "warning"
                          : props.bikeData[0].payloadData.Odometer / 1000 < 20
                          ? "danger"
                          : null
                      }
                      now={props.bikeData[0].payloadData.Odometer / 1000}
                      label={`${(
                        props.bikeData[0].payloadData.Odometer / 1000
                      ).toFixed(0)}%`}
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <span>Fuel Level</span>
                  <div style={{ flexGrow: 1, marginLeft: "5px" }}>
                    <ProgressBar
                      animated
                      variant={
                        props.bikeData[0].payloadData.Fuel_level > 70
                          ? "success"
                          : props.bikeData[0].payloadData.Fuel_level > 50 &&
                            props.bikeData[0].payloadData.Fuel_level < 70
                          ? "info"
                          : props.bikeData[0].payloadData.Fuel_level > 20 &&
                            props.bikeData[0].payloadData.Fuel_level < 50
                          ? "warning"
                          : props.bikeData[0].payloadData.Fuel_level < 20
                          ? "danger"
                          : null
                      }
                      now={props.bikeData[0].payloadData.Fuel_level}
                      label={`${props.bikeData[0].payloadData.Fuel_level}%`}
                    />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <span>Brake Oil</span>
                  <div style={{ flexGrow: 1, marginLeft: "5px" }}>
                    <ProgressBar
                      animated
                      variant={
                        props.bikeData[0].payloadData.Brake_oil > 70
                          ? "success"
                          : props.bikeData[0].payloadData.Brake_oil > 50 &&
                            props.bikeData[0].payloadData.Brake_oil < 70
                          ? "info"
                          : props.bikeData[0].payloadData.Brake_oil > 20 &&
                            props.bikeData[0].payloadData.Brake_oil < 50
                          ? "warning"
                          : props.bikeData[0].payloadData.Brake_oil < 20
                          ? "danger"
                          : null
                      }
                      now={props.bikeData[0].payloadData.Brake_oil}
                      label={`${props.bikeData[0].payloadData.Brake_oil}%`}
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Popup>
        )}
      </Map>
    </>
  );
}

export default DummyMapForTesting;

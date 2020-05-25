import L from "leaflet";

export function carSenorsDatas() {
    const carSenorsData = 
      {
        "type": "FeatureCollection",
        "latitude":39.738450,
        "longitude":-104.984850,
        "crs": {
          "type": "name",
          "properties": { "name": "urn: ogc: def: crs: OGC: 1.3: CRS84" }
        },
        "features": [
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 960,
              "FACILITYID": 28014,
              "NAME": "Bearbrook Skateboard Park",
              "NAME_FR": "Bearbrook Skatepark",
              "ADDRESS": "8720 Russell Road",
              "ADDRESS_FR": "8720 Russell Road",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat asphalt surface, 5 components",
              "DESCRIPT_1": "Flat asphalt surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "indoor/outdoor temperature sensors",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "oil sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Rain sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "fuel level",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "oxygen sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "wheel speed",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.740252, -104.989589]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 1219,
              "FACILITYID": 28001,
              "NAME": "Bob MacQuarrie Skateboard Park (SK8 Extreme Park)",
              "NAME_FR": "Bob-MacQuarrie Skateboard Park (SK8 Extreme Park)",
              "ADDRESS": "1490 Youville Drive",
              "ADDRESS_FR": "1490, promenade Youville",
              "FACILITY_T": "other",
              "FACILITY_1": "other",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Community: mid size facility to service population of 40,000 plus",
              "FACILITY_F": "Community: medium-sized facility providing services to 40,000 residents or more.",
              "DESCRIPTIO": "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer",
              "DESCRIPT_1": "Flat asphalt surface, 10 modules, programs and skateboard camps in summer managed by the City",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.740318, -104.988248]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 1157,
              "FACILITYID": 28002,
              "NAME": "Walter Baker Skateboard Park",
              "NAME_FR": "Walter-Baker Skateboard Park",
              "ADDRESS": "100 Charlie Rogers Place",
              "ADDRESS_FR": "100, place Charlie Rogers",
              "FACILITY_T": "bowl",
              "FACILITY_1": "bowl",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Community: mid size facility to service population of 40,000 plus",
              "FACILITY_F": "Community: medium-sized facility providing services to 40,000 residents or more.",
              "DESCRIPTIO": "Concrete bowl, 7,000 sq ft",
              "DESCRIPT_1": "Concrete bowl, 7,000 ft2",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Motor Position censor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.740022, -104.984397]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 9,
              "FACILITYID": 28006,
              "NAME": "Roving Skateboard Park Location",
              "NAME_FR": "Location of a skateboard park",
              "ADDRESS": "2785 8th Line Road",
              "ADDRESS_FR": "2785 8th Line Road",
              "FACILITY_T": "other",
              "FACILITY_1": "other",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor - Mobile",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Metcalfe Community Center - Roving Skateboard Park Location",
              "FACILITY_F": "Metcalfe Community Center - Itinerant skate park location",
              "DESCRIPTIO": "Flat surface, 5 components",
              "DESCRIPT_1": "Flat surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Steering sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.739956, -104.982508]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 1160,
              "FACILITYID": 28007,
              "NAME": "Roving Skateboard Park Location",
              "NAME_FR": "Location of a skateboard park",
              "ADDRESS": "10 Warner Colpitts Lane",
              "ADDRESS_FR": "10, Warner Colpitts Lane",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "yes / oui",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Indoor - Summer",
              "MODIFIED_D": "2018/03/07",
              "CREATED_DA": null,
              "FACILITY": "Johnny Leroux Stittsville Community Arena - Roving Skateboard Park Location",
              "FACILITY_F": "Stittsville Johnny-Leroux community arena - Location of a skateboard park",
              "DESCRIPTIO": "Flat surface, 5 components",
              "DESCRIPT_1": "Flat surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.739972, -104.980384]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 1693,
              "FACILITYID": 28016,
              "NAME": "Legacy Skateboard Park",
              "NAME_FR": "Skateboard Legacy",
              "ADDRESS": "101 Centrepointe Drive",
              "ADDRESS_FR": "101, Centrepointe Drive",
              "FACILITY_T": "bowl",
              "FACILITY_1": "bowl",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "District: larger facility to service population of 100,000 plus",
              "FACILITY_F": "District: large facility providing services to 100,000 or more residents.",
              "DESCRIPTIO": "Large concrete bowl, many street and vertical components, 17,000 sq ft",
              "DESCRIPT_1": "Large concrete bowl, street modules and vertical modules, 17,000 ft2",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.73787, -104.989396]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 1717,
              "FACILITYID": 28018,
              "NAME": "Greenboro Skateboard Park",
              "NAME_FR": "Greenboro Skatepark",
              "ADDRESS": "3142 Conroy Road",
              "ADDRESS_FR": "3142, chemin Conroy",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat asphalt surface, 5 components",
              "DESCRIPT_1": "Flat asphalt surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.738373, -104.987776]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 137,
              "FACILITYID": 28019,
              "NAME": "Bridlewood Skateboard Park",
              "NAME_FR": "Bridlewood Skateboard Park",
              "ADDRESS": "65 Stonehaven Drive",
              "ADDRESS_FR": "65 Stonehaven Drive",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat asphalt surface, 5 components",
              "DESCRIPT_1": "Flat asphalt surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.738406, -104.983796]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 1133,
              "FACILITYID": 28020,
              "NAME": "Roving Skateboard Park Location",
              "NAME_FR": "Location of a skateboard park",
              "ADDRESS": "100 Clifford Campbell Street",
              "ADDRESS_FR": "100, rue Clifford-Campbell",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Fitzroy Harbor Community Center - Roving Skateboard Park Location",
              "FACILITY_F": "Fitzroy Harbor Community Center - Itinerant Skateboard Place",
              "DESCRIPTIO": "Flat surface, 5 components",
              "DESCRIPT_1": "Flat surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.738389, -104.979998]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 657,
              "FACILITYID": 28000,
              "NAME": "Roving Skateboard Park Location",
              "NAME_FR": "Location of a skateboard park",
              "ADDRESS": "110 Malvern Drive",
              "ADDRESS_FR": "110, promenade Malvern",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Walter Baker Sports Center - Roving Skateboard Park Location",
              "FACILITY_F": "Walter-Baker Sports Center - Itinerant skate park location",
              "DESCRIPTIO": "Flat surface, 5 components",
              "DESCRIPT_1": "Flat surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.737795, -104.985749]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 653,
              "FACILITYID": 28008,
              "NAME": "Roving Skateboard Park Location",
              "NAME_FR": "Location of a skateboard park",
              "ADDRESS": "5660 Osgoode Main Street",
              "ADDRESS_FR": "5660 Osgoode Main Street",
              "FACILITY_T": "other",
              "FACILITY_1": "other",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor - Mobile",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Osgoode Community Center - Roving Skateboard Park Location",
              "FACILITY_F": "Osgoode Community Center - Itinerant skate park location",
              "DESCRIPTIO": "Flat surface, 5 components",
              "DESCRIPT_1": "Flat surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.736822, -104.98401]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 812,
              "FACILITYID": 35050,
              "NAME": "Charlie Bowins Skateboard Park",
              "NAME_FR": "Charlie-Bowins Skatepark",
              "ADDRESS": "435 Bronson Avenue",
              "ADDRESS_FR": "435, avenue Bronson",
              "FACILITY_T": "bowl",
              "FACILITY_1": "bowl",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor (Commemoratively named Charlie Bowins Skateboard Park on June 10, 2015)",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": "2015/05/20",
              "FACILITY": "District: larger facility to service population of 100,000 plus",
              "FACILITY_F": "District: large facility providing services to 100,000 or more residents.",
              "DESCRIPTIO": "Flat concrete surface, 10 plus components (large half pipe), City run learn to skateboard programs, City run skateboard camps in summer",
              "DESCRIPT_1": "Flat concrete surface, 10 modules or more (large half-moon), programs and skateboard camps in summer managed by the City",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.738043, -104.981489]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 2457,
              "FACILITYID": 35637,
              "NAME": "Diamond Jubilee Skateboard Park",
              "NAME_FR": "Diamond Jubilee Skateboard Park",
              "ADDRESS": "2810 Findlay Creek Drive",
              "ADDRESS_FR": "2810 Findlay Creek Drive",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "yes / oui",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2017/07/11",
              "CREATED_DA": "2016/06/22",
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat asphalt surface, 5 components",
              "DESCRIPT_1": "Flat asphalt surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.738653, -104.981972]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 430,
              "FACILITYID": 28005,
              "NAME": "Blackburn Skateboard Park",
              "NAME_FR": "Blackburn Skatepark",
              "ADDRESS": "190 Glen Park Drive",
              "ADDRESS_FR": "190 Glen Park Drive",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat asphalt surface, 5 components",
              "DESCRIPT_1": "Flat asphalt surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.736847, -104.979794]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 989,
              "FACILITYID": 28017,
              "NAME": "Goulbourn Skateboard Park",
              "NAME_FR": "Planchodrome Goulbourn",
              "ADDRESS": "1500 Shea Road",
              "ADDRESS_FR": "1500 Shea Road",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat asphalt surface, 6 components",
              "DESCRIPT_1": "Flat asphalt surface, 6 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.73923, -104.990233]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 1334,
              "FACILITYID": 28011,
              "NAME": "Constance Bay Skateboard Park",
              "NAME_FR": "Constance Bay Skateboard Park",
              "ADDRESS": "262 Len Purcell Drive",
              "ADDRESS_FR": "262 Len-Purcell Drive",
              "FACILITY_T": "other",
              "FACILITY_1": "other",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat asphalt surface, 5 components",
              "DESCRIPT_1": "Flat asphalt surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.739181, -104.983538]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 923,
              "FACILITYID": 28013,
              "NAME": "Roving Skateboard Park Location",
              "NAME_FR": "Location of a skateboard park",
              "ADDRESS": "334 River Road",
              "ADDRESS_FR": "334, chemin River",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Eccolands Park - Roving Skateboard Park Location",
              "FACILITY_F": "Parc Eccolands - Itinerant skate park location",
              "DESCRIPTIO": "Flat surface, 5 components",
              "DESCRIPT_1": "Flat surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.737894, -104.978667]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 762,
              "FACILITYID": 28004,
              "NAME": "Trillium Park Skateboard Park",
              "NAME_FR": "Park Trillium Skatepark",
              "ADDRESS": "2030 Ogilvie Road",
              "ADDRESS_FR": "2030, chemin Ogilvie",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat asphalt surface, 5 components",
              "DESCRIPT_1": "Flat asphalt surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.736839, -104.989944]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 52,
              "FACILITYID": 35120,
              "NAME": "Lansdowne Skateboard Park",
              "NAME_FR": "Lansdowne Skateboard Park",
              "ADDRESS": "450 Queen Elizabeth Driveway",
              "ADDRESS_FR": "450 Queen Elizabeth Driveway",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "yes / oui",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2017/07/11",
              "CREATED_DA": "2015/09/23",
              "FACILITY": "A series of skateboard ramps ideally suited to beginners.",
              "FACILITY_F": "A series of ramps perfectly suited for beginners.",
              "DESCRIPTIO": "Flat asphalt surface",
              "DESCRIPT_1": "Flat asphalt survivor",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.740022, -104.982315]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 2488,
              "FACILITYID": 35815,
              "NAME": "Greely Village Skateboard Park",
              "NAME_FR": "Greely Village Skatepark",
              "ADDRESS": "7292 Parkway Road",
              "ADDRESS_FR": "7292 Parkway Road",
              "FACILITY_T": "other",
              "FACILITY_1": "other",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "yes / oui",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/01/04",
              "CREATED_DA": "2017/04/28",
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat concrete surface, 5 components",
              "DESCRIPT_1": "Flat concrete surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.736608, -104.982616]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 330,
              "FACILITYID": 28003,
              "NAME": "Manotick Skateboard Park",
              "NAME_FR": "Manotick Skateboard Park",
              "ADDRESS": "5572 Doctor Leach Drive",
              "ADDRESS_FR": "5572 Doctor-Leach Drive",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "yes / oui",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor - Joined with basketball",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Community: mid size facility to service population of 40,000 plus",
              "FACILITY_F": "Community: medium-sized facility providing services to 40,000 residents or more.",
              "DESCRIPTIO": "Flat asphalt surface, 8 components",
              "DESCRIPT_1": "Flat asphalt surface, 8 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.739642, -104.986135]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 693,
              "FACILITYID": 28010,
              "NAME": "Roving Skateboard Park Location",
              "NAME_FR": "Location of a skateboard park",
              "ADDRESS": "1448 Meadow Drive",
              "ADDRESS_FR": "1448 Meadow Drive",
              "FACILITY_T": "other",
              "FACILITY_1": "other",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor - Mobile",
              "MODIFIED_D": "2018/01/18",
              "CREATED_DA": null,
              "FACILITY": "Andy Shields Park - Roving Skateboard Park Location",
              "FACILITY_F": "Parc Andy-Shields - Itinerant skate park location",
              "DESCRIPTIO": "Flat surface, 5 components",
              "DESCRIPT_1": "Flat surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.737177, -104.982626]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 2544,
              "FACILITYID": 35667,
              "NAME": "Berrigan Skateboard Park",
              "NAME_FR": "Planchodrome Berrigan",
              "ADDRESS": "51 Berrigan Drive",
              "ADDRESS_FR": "51, promenade Berrigan",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "no / no",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/02/27",
              "CREATED_DA": "2016/06/27",
              "FACILITY": "Community: mid size facility to service population of 40,000 plus",
              "FACILITY_F": "Community: medium-sized facility providing services to 40,000 residents or more.",
              "DESCRIPTIO": "Flat concrete surface, 10 plus components",
              "DESCRIPT_1": "Flat concrete surface, 10 modules or more",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.740566, -104.983613]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 2599,
              "FACILITYID": 49251,
              "NAME": "Eugène Martineau Skateboard Park",
              "NAME_FR": "Planchodrome Eugène-Martineau",
              "ADDRESS": "710 Mikinak Road",
              "ADDRESS_FR": "710 Mikinak Road",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "yes / oui",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/11/29",
              "CREATED_DA": "2018/11/29",
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat surface, 5 components",
              "DESCRIPT_1": "Flat surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.738653, -104.982058]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 2278,
              "FACILITYID": 49211,
              "NAME": "Vista Skateboard Park",
              "NAME_FR": "Skateboarding Vista",
              "ADDRESS": "720 Vistapark Drive",
              "ADDRESS_FR": "720 Vistapark Drive",
              "FACILITY_T": "flat",
              "FACILITY_1": "flat",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "yes / oui",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2018/11/29",
              "CREATED_DA": "2018/06/22",
              "FACILITY": "Neighborhood: smaller size facility to service population of 10,000 or less",
              "FACILITY_F": "Neighborhood: small facility providing services to 10,000 residents or less.",
              "DESCRIPTIO": "Flat surface, 5 components",
              "DESCRIPT_1": "Flat surface, 5 modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 3,
                  "title": "Radar Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 4,
                  "title": "GPS Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 5,
                  "title": "Anti thief sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 6,
                  "title": "Parking Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.738183, -104.988195]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "PARK_ID": 2113,
              "FACILITYID": 35299,
              "NAME": "Innovation Skateboard Park",
              "NAME_FR": "Planchomdrome Innovation",
              "ADDRESS": "4101 Innovation Drive",
              "ADDRESS_FR": "4101, Promenade Innovation",
              "FACILITY_T": "bowl",
              "FACILITY_1": "bowl",
              "ACCESSCTRL": "no / no",
              "ACCESSIBLE": "yes / oui",
              "OPEN": null,
              "NOTES": "Outdoor",
              "MODIFIED_D": "2017/07/11",
              "CREATED_DA": "2016/02/08",
              "FACILITY": "District: larger facility to service population of 100,000 plus",
              "FACILITY_F": "District: large facility providing services to 100,000 or more residents.",
              "DESCRIPTIO": "Large concrete bowl, 10 plus components, many street and vertical components",
              "DESCRIPT_1": "Large concrete bowl, 10 modules or more, street modules and vertical modules",
              "PICTURE_LI": null,
              "PICTURE_DE": null,
              "PICTURE__1": null,
              "myIcon": L.icon({
                iconUrl: require(".././assets/motorbike.png"),
                iconSize: [50, 50],
                iconAnchor: [12.5, 41],
                popupAnchor: [0, -41]
              }),
              "sensorData": [
                {
                  "sensor_id": 1,
                  "title": "Pessenger Occupancy Sensor",
                  "description": "",
                  "Car_ID": 960
                },
                {
                  "sensor_id": 2,
                  "title": "Oxygen Sensor",
                  "description": "",
                  "Car_ID": 960
                }
              ]
            },
            "geometry": {
              "type": "Point",
              "coordinates": [39.736806, -104.986135]
            }
          }
        ]
      };
  
    return carSenorsData;
  }
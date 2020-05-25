import Dashboard from "@material-ui/icons/Dashboard";
import LocationOn from "@material-ui/icons/LocationOn";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import DevicesIcon from "@material-ui/icons/Devices";

// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import Allocation from "./views/Allocation/Allocation";
import Device from "./views/Device/Device";
import Vehicle from "./views/Vehicle/Vehicle";

import LiveDataFetching from "./views/LiveDeviceData/LiveDataFetching";

import LiveMap from "./views/Livemap/Livemap";

// import Maps from "./views/Maps/Maps.js";

// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/allocation",
    name: "Allocation Management",
    icon: "content_paste",
    component: Allocation,
    layout: "/admin"
  },
  {
    path: "/vehicle",
    name: "Vehicle Management",
    icon: MotorcycleIcon,
    component: Vehicle,
    layout: "/admin"
  },
  {
    path: "/device",
    name: "Device Management",
    icon: DevicesIcon,
    component: Device,
    layout: "/admin"
  },
  {
    path: "/maps/:id",
    name: "Map",
    icon: LocationOn,
    component: LiveDataFetching,
    layout: "/admin"
  }
  // {
  //   path: "/allocation",
  //   name: "Allocation",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // }
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;

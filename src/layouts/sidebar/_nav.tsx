import React from "react";
import LocationCity from "@mui/icons-material/LocationCity";
import Add from "@mui/icons-material/Add";
import HolidayVillage from "@mui/icons-material/HolidayVillage";
import List from "@mui/icons-material/List";
import Person from "@mui/icons-material/Person";

const _nav = [
  {
    component: "",
    name: "Companies",
    to: "/companies",
    icon: <LocationCity />,
  },
  {
    component: "",
    name: "Holidays",
  //  to: "/holiday",
    icon: <HolidayVillage />,
    children: [
      {
        component: "",
        name: "Holidays",
        to: "/holidays",
        icon: <List />,
      },
      {
        component: "",
        name: "Add Holidays",
        to: "/add-holiday",
        icon: <Add />,
      },
    ],
  },
  {
    component: "",
    name: "Leaves",
  //  to: "/holiday",
    icon: <HolidayVillage />,
    children: [
      {
        component: "",
        name: "My Leaves",
        to: "/addLeave",
        icon: <List />,
      },
      {
        component: "",
        name: "Add Leaves",
        to: "/myLeaves",
        icon: <Add />,
      },
    ],
  },

  {
    component: "",
    name: "Account",
    to: "/account",
    icon: <Person />,
  },
];

export default _nav;

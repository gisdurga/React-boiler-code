import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onSignout } from "../../app/redux/actions/action";

export default function MenuList({ menuList, anchorEl }: any) {
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={anchorEl}
        onClick={anchorEl}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: "\"\"",
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >

       { menuList && menuList.map((item:any, index:any) => (
          item.name === "Logout"
            ? <MenuItem key={index} onClick={() => {
              dispatch(onSignout());
              sessionStorage.removeItem("userToken");
              localStorage.clear();
              navigate("/login");
            }}><ListItemIcon>{item.icon}</ListItemIcon> {item.name} </MenuItem> : <MenuItem key={index} ><NavLink to={item.link} style={{ textDecoration: "none", color: "black" }}>  <ListItemIcon>{item.icon}  </ListItemIcon>{item.name} </NavLink></MenuItem>
        ))}
      </Menu>
    );
}

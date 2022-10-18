import React from "react";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Notifications from "@mui/icons-material/Notifications";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@material-ui/core/Badge";
import Person from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import MenuList from "../../common/Menu/MenuList";

const HeaderDropdown = () => {
  const user: any = useSelector((state: any) => state && state.signReducer && state.signReducer.entities);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const menuListItem:any = [
    {
        name: "Account",
        icon: <Avatar />,
        link: "/account",
       // action: "",
    },
    {
        name: "Logout",
        icon: <Logout fontSize="small" />,
        link: "",
        component: "",
        // action: logout(),
    },
];
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (

    <React.Fragment>
      <IconButton aria-label="show 17 new notifications" color="inherit" >
              <Badge badgeContent={17} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
      <Tooltip title="">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, color: "white" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Person/>{user.userName}
          </IconButton>
        </Tooltip>
     <MenuList menuList={menuListItem} anchorEl={anchorEl} />
    </React.Fragment>
  );
};

export default HeaderDropdown;

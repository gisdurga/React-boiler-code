import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { useNavigate } from "react-router-dom";

export default function ListItem({ NavItemList }: any) {
    React.useEffect(() => {
        setObjectsList(
          NavItemList.map((e: any) => ({ ...e, isOpen: false })),
        );
      }, [NavItemList]);
    const navigate = useNavigate();
    const [objectsList, setObjectsList] = React.useState(NavItemList);
    const handleClick = (item: any, linkPage: any) => {
        setObjectsList(
            NavItemList.map((e: any) => (e.name === item.name ? ({ ...e, isOpen: !e.isOpen }) : (e))),
        );
        if (linkPage) {
            navigate(linkPage);
        }
    };
    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby='{item.listCities.id}'
        >
            {
                objectsList.map((item: any) => <Box component="section" key={item.name}>
                    <ListItemButton onClick={(e) => {
                        e.preventDefault();
                        handleClick(item, item.to);
                    }}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                        {item.isOpen && item.children !== undefined ? <ExpandLess /> : ""}
                        {!item.isOpen && item.children !== undefined ? <ExpandMore /> : ""}

                    </ListItemButton>
                    <Collapse in={item.isOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {item.children && item.children.map((child: any) => (
                                <ListItemButton onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(child, child.to);
                                }} sx={{ pl: 4 }} key={child.name}>
                                    <ListItemIcon>
                                        {child.icon}
                                    </ListItemIcon><ListItemText primary={child.name} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </Box>)

            }
        </List>
    );
}

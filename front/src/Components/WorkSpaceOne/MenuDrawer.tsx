/* eslint-disable */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useStyles } from './Styles';
import sharedIcon from "../../Assets/Images/shared.svg";
import sharedH from "../../Assets/Images/sharedH.svg";
import starredH from "../../Assets/Images/starredH.svg";
import starredIcon from "../../Assets/Images/starred.svg";
import trashIcon from "../../Assets/Images/trash.svg";
import DocumentIcon from "../../Assets/Images/documentH.svg";
import documentH from "../../Assets/Images/Document.svg";
import filesIcon from "../../Assets/Images/files.svg";
import myfileH from "../../Assets/Images/myfilesH.svg";
import recentIcon from "../../Assets/Images/recent.svg";
import recentH from "../../Assets/Images/recentH.svg";
import { List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { useState } from 'react';


var currentActiveLink: string = "";
const MenuDrawer = (props: any) => {
    const { history } = props;
    const classes = useStyles();
    const location = useLocation();

    var tempactivepagename = location.pathname;
    var curpagename = tempactivepagename.toLocaleLowerCase();

    if (curpagename == "/WorkspaceOne") {
        currentActiveLink = "My Files";
    }
    if (curpagename == "/sharedWithMe") {
        currentActiveLink = "Shared with Me";
    }
    if (curpagename == "/documentLibrary") {
        currentActiveLink = "Document Library";
    }
    if (curpagename == "/recentFilesOneDrive") {
        currentActiveLink = "Recent";
    }
    if (curpagename == "/StarredFile") {
        currentActiveLink = "Starred";
    }
    if (curpagename == "/trash") {
        currentActiveLink = "Trash";
    }
 const [isActive, setIsActive] = useState(false);

    return (
        <Box sx={{ bgcolor: 'background.paper', height: "100%", }}>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                {/* <CssBaseline /> */}
                <Box >
                    <div style={{ color: "#1b6189", marginTop: "20px" }}>Work Space</div>
                    <nav>
                        <div>
                            <List >
                                <ListItem disablePadding>
                                    <NavLink end to="/WorkspaceOne" style={{ textDecoration: "none" }} className={classes.leftMenu}>
                                        <ListItemButton style={{ position: 'unset' }}>
                                            <ListItemIcon className={classes.MuiListItemIcon}>
                                                {currentActiveLink == "My Files" ?
                                                    <img src={myfileH} alt="icon" />
                                                    :
                                                    <img src={filesIcon} alt="icon" />
                                                }
                                            </ListItemIcon>
                                            <ListItemText className={classes.textListItem} style={{ textDecoration: "none" }}>My Files </ListItemText>
                                        </ListItemButton>

                                    </NavLink>
                                </ListItem>
                                <ListItem disablePadding>
                                    <NavLink end to="/sharedWithMe" style={{ textDecoration: "none" }} className={classes.leftMenu}>
                                        <ListItemButton style={{ position: 'unset' }}>
                                            <ListItemIcon className={classes.MuiListItemIcon}>
                                                {currentActiveLink == "Shared with Me" ?
                                                    <img src={sharedH} alt="icon" />
                                                    :
                                                    <img src={sharedIcon} alt="icon" />
                                                }
                                            </ListItemIcon>
                                            <ListItemText className={classes.textListItem} style={{ textDecoration: "none" }}>Shared with Me</ListItemText>
                                        </ListItemButton>

                                    </NavLink>
                                </ListItem>
                                <ListItem disablePadding>
                                    <NavLink end to="/documentLibrary" style={{ textDecoration: "none" }} className={classes.leftMenu}>
                                        <ListItemButton style={{ position: 'unset' }} onClick={() => setIsActive(!isActive)}>
                                            <ListItemIcon className={classes.MuiListItemIcon} >
                                            {isActive ? 
                                           <img src={documentH} alt="icon" /> :
                                           <img src={DocumentIcon } alt="icon" />
                                           }
                                               
                                            </ListItemIcon>
                                            <ListItemText className={classes.textListItem} style={{ textDecoration: "none" }}>Document Library</ListItemText>
                                        </ListItemButton>

                                    </NavLink>
                                </ListItem>
                            </List>
                        </div>
                    </nav>
                </Box>
            </Box>
        </Box>
    )
};

export default MenuDrawer;
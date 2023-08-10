/* eslint-disable */
import React from 'react';
import { Box, CssBaseline, List, ListItemIcon, ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import TopicTwoToneIcon from '@mui/icons-material/TopicTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { CardContent } from '@mui/material';
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useStyles } from './Styles';
import ClearIcon from '@mui/icons-material/Clear';
import { NavLink, Link, useLocation } from "react-router-dom";
import { Grid } from '@mui/material';
import DocumentIcon from "../../Assets/Images/documentH.svg";
import documentH from "../../Assets/Images/Document.svg";
import filesIcon from "../../Assets/Images/files.svg";
import myfileH from "../../Assets/Images/myfilesH.svg";
import recentIcon from "../../Assets/Images/recent.svg";
import recentH from "../../Assets/Images/recentH.svg";
import searchIcon from "../../Assets/Images/search.svg";
import sharedIcon from "../../Assets/Images/shared.svg";
import sharedH from "../../Assets/Images/sharedH.svg";
import starredH from "../../Assets/Images/starredH.svg";
import starredIcon from "../../Assets/Images/starred.svg";
import trashIcon from "../../Assets/Images/trash.svg";
import trashH from "../../Assets/Images/trashH.svg";
import upload from "../../Assets/Images/upload-blue.svg";
import menuBlue from "../../Assets/Images/menu-blue.svg";
import setting from "../../Assets/Images/setting-blue.svg";
import { MyFilePage } from '../../Pages';
import { styled } from '@mui/material/styles';

// interface IFolderProps {
//     data?: any,
//     error?: any,
//     isLoading?: any,

// }


export const SidebarData = [
    {
        id: 1,
        title: "My Files",
        // onClick: () => history.push("/Deliveries"),
        path: "/WorkspaceOne",
        icon: <img src={filesIcon} alt="" />,
        iconHover: <img src={myfileH} alt="" />,
    },
    {
        id: 2,
        title: "Shared with Me",
        path: "/sharedWithMe",
        icon: <img src={starredIcon} alt="" />,
        iconHover: <img src={ sharedH} alt="" />,
    },
    {
        id: 3,
        title: "Document Library",
        path: "/documentLibrary",
        icon: <img src={documentH} alt="" />,
        iconHover: <img src={DocumentIcon} alt="" />,
    },
    {
        id: 4,
        title: "Recent",
        path: "/recentFilesOneDrive",
        icon: <img src={recentIcon} alt="" />,
        iconHover: <img src={recentH} alt="" />,
    },
    {
        id: 5,
        title: "Starred",
        path: "/StarredFile",
        icon: <img src={starredIcon} alt="" />,
        iconHover: <img src={starredH} alt="" />,
    },

    {
        id: 6,
        title: "Trash",
        path: "/trash",
        icon: <img src={trashIcon} alt="" />,
        iconHover:<img src={trashH} alt="" />, 
    }

]

const LeftMenu = () => {
    const classes = useStyles();
    const [SelValue, setSelValue] = useState("");
    const [topMenu, setTopMenu] = useState(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const StyledList = styled(List)({
        // selected and (selected + hover) states
        '&& .Mui-selected, && .Mui-selected:hover': {
            backgroundColor: 'red',
            '&, & .MuiListItemIcon-root': {
                color: 'pink',
            },
        },
        // hover states
        '& .MuiListItemButton-root:hover': {
            backgroundColor: 'orange',
            '&, & .MuiListItemIcon-root': {
                color: 'yellow',
            },
        },
    });

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };


    const location = useLocation();


    const selectedMenu = (selValue: any) => {
        setSelValue(selValue);
        setTopMenu(false);
    };

    const clearMenu = () => {
        setTopMenu(true);
    };

    const clearButton = (
        <ListItem className={classes.topClear} sx={{ position: "absolute", zIndex: 99 }}>
            <Link className={classes.topClearLink} onClick={clearMenu} to="/">
                clear <ClearIcon />
            </Link>
        </ListItem>
    );

    let pathname = window.location.pathname;
    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname])

    const [isActive, setIsActive] = useState(false);
    return (
        <Box sx={{ bgcolor: 'background.paper', height: "100%", }}>
            <Box className={classes.FirstLeftList} >
                {/* <CssBaseline /> */}
                <Box >
                    <div style={{ color: "#1b6189", marginTop: "20px" }}>Work Space</div>
                    <nav>
                        <div>
                            {
                                SidebarData.map((item: any, id: any, index: any) => {
                                    const { icon, path, title } = item;
                                    console.log(SidebarData, "itemsList");

                                    return (
                                        <List key={index}>
                                            <ListItem disablePadding>
                                                <NavLink end to={item.path}
                                                    style={{ textDecoration: "none" }}
                                                    onClick={() => setIsActive(!isActive)}
                                                >
                                                    
                                                    {isActive ?
                                                    <ListItemButton style={{ position: 'unset' }}>
                                                            <ListItemIcon className={classes.MuiListItemIcon}>{item.iconHover}   </ListItemIcon> 
                                                        <ListItemText className={classes.textListItem} style={{ textDecoration: "none" }}>{item.title} </ListItemText>
                                                    </ListItemButton>
                                                    :
                                                    <ListItemButton style={{ position: 'unset' }}>
                                                            <ListItemIcon className={classes.MuiListItemIcon}>{item.icon}   </ListItemIcon> 
                                                        <ListItemText className={classes.textListItem} style={{ textDecoration: "none" }}>{item.title} </ListItemText>
                                                    </ListItemButton>
                                                      }

                                                </NavLink>
                                            </ListItem>


                                        </List>
                                    )
                                })
                            }

                        </div>

                    </nav>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftMenu;

/*

 <AuthenticatedTemplate>
                <Paper elevation={0}>
                    <CardContent sx={{ pb: "16px!important" }}>
                        {!topMenu && clearButton}import { Link } from 'react-router-dom';
import MyFilePage from './../../Pages/WorkSpace/OneDrive/MyFilePage';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import WorkSpaceOne from './index';
import { useEffect } from 'react';

                        <List className={classes.topItems}>
                            {topMenu && data?.response &&
                                data?.response?.map((item: any, index: any) => {
                                    const { fields = {} } = item;
                                    var Title = fields?.Title;
                                    var itemId = fields?.id;
                                    var completePath;
                                    var iconHoverPath;
                                    if (fields.Icon != null) {
                                        var icon = JSON.parse(fields.Icon);
                                        if (icon.serverUrl) {
                                            completePath = icon.serverUrl + (icon.serverRelativeUrl).replace(icon.serverUrl, "");
                                        } else {
                                            completePath = icon.serverRelativeUrl
                                        }

                                        var iconHov = JSON.parse(fields.IconHover);
                                        if (iconHov.serverUrl) {
                                            iconHoverPath = iconHov.serverUrl + (iconHov.serverRelativeUrl).replace(iconHov.serverUrl, "");
                                        } else {
                                            iconHoverPath = iconHov.serverRelativeUrl
                                        }

                                        return (
                                            <ListItem key={index} className={classes.topMenu}>
                                                <Link
                                                    className={classes.topLink}
                                                    onClick={(event: any) => selectedMenu(itemId)}
                                                    href="#"
                                                >
                                                    <img src={completePath} alt={Title} className="topImg" />
                                                    <img
                                                        src={iconHoverPath}
                                                        alt={Title}
                                                        className="topImgH"
                                                    />
                                                    <p className={classes.topText}> {Title}</p>
                                                </Link>
                                            </ListItem>
                                        )
                                    }
                                })}

                            {!topMenu &&
                                data?.response
                                    .filter((item: any) => item.fields.id == SelValue)
                                    .map((filteredItem: any, index: any) => {
                                        const { fields = {} } = filteredItem;
                                        var iconHoverPath;
                                        var iconHov = JSON.parse(fields.IconHover);
                                        if (iconHov.serverUrl) {
                                            iconHoverPath = iconHov.serverUrl + (iconHov.serverRelativeUrl).replace(iconHov.serverUrl, "");
                                        } else {
                                            iconHoverPath = iconHov.serverRelativeUrl
                                        }

                                        var rowMenu = index + "sub1";
                                        return (
                                            <>
                                                <ListItem key={index}>
                                                    <Link
                                                        className={classes.topLink}
                                                        href="#"
                                                    >
                                                        <img
                                                            src={iconHoverPath}
                                                            alt={fields.Title}
                                                            className="topImg"
                                                        />
                                                        <p style={{ color: "#009BAD" }} className={classes.topText}> {fields.Title}</p>
                                                    </Link>
                                                </ListItem>
                                            </>
                                        );
                                    }
                                    )}

                            {!topMenu &&
                                data?.response
                                    .filter((item: any) => item.fields.ParentIdLookupId == SelValue)
                                    .map((filteredItem: any, index: any) => {
                                        const { fields = {} } = filteredItem;
                                        var rowMenu = index + "sub1";
                                        return (
                                            <>
                                                <ListItem key={rowMenu}>
                                                    <RouterNavLink
                                                        className={classes.topLink}
                                                        to={fields.Path}
                                                    >
                                                        {fields.Title}
                                                    </RouterNavLink>
                                         </ListItem>
                                            </>
                                        );
                                    }
                                    )}
                        </List>
                    </CardContent>
                </Paper>
            </AuthenticatedTemplate> 
              <Box className={classes.lastMenu}>
                    <Grid style={{marginRight:"15px"}}> <img src={upload} alt="upload" /></Grid>
                    <Grid  style={{marginRight:"15px"}}><img src={setting} alt="upload" /></Grid>
                    <Grid><img src={menuBlue} alt="upload" /></Grid>
                </Box> 
  <List>
                            <ListItem disablePadding>
                                <Link to="/WorkspaceOne">
                                <ListItemButton>
                                    <ListItemIcon className={classes.MuiListItemIcon}>
                                        
                                        <img src={filesIcon} alt=" MyFiles" />
                                    </ListItemIcon>
                                    <ListItemText primary="My Files" className={classes.textListItem} />
                                </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to="/sharedWithMe">
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <img src={sharedIcon} alt="shared" className={classes.textListItem} />
                                        </ListItemIcon>
                                        <ListItemText primary="Shared with me" className={classes.textListItem} />
                                    </ListItemButton>
                                </Link>

                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={DocumentIcon} alt="Document" className={classes.textListItem} />
                                    </ListItemIcon>
                                    <ListItemText primary="Document Library" className={classes.textListItem} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={recentIcon} alt="recent" className={classes.textListItem} />
                                    </ListItemIcon>
                                    <ListItemText primary="Recent" className={classes.textListItem} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={starredIcon} alt="starred" className={classes.textListItem} />
                                    </ListItemIcon>
                                    <ListItemText primary="Starred" className={classes.textListItem} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={trashIcon} alt="trash" className={classes.textListItem} />
                                    </ListItemIcon>
                                    <ListItemText primary="Trash" className={classes.textListItem} />
                                </ListItemButton>
                            </ListItem>
                        </List> 
*/

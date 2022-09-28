/* eslint-disable */
import React from 'react';
import { Box, List, ListItemIcon, ListItemText, Link } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import TopicTwoToneIcon from '@mui/icons-material/TopicTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import { useState } from 'react';
import { Paper } from '@mui/material';
import { CardContent } from '@mui/material';
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useStyles } from './Styles';
import ClearIcon from '@mui/icons-material/Clear';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Grid } from '@mui/material';
import DocumentIcon from "../../Assets/Images/Document.svg";
import filesIcon from "../../Assets/Images/files.svg";
import recentIcon from "../../Assets/Images/recent.svg";
import searchIcon from "../../Assets/Images/search.svg";
import sharedIcon from "../../Assets/Images/shared.svg";
import starredIcon from "../../Assets/Images/starred.svg";
import trashIcon from "../../Assets/Images/trash.svg";
import upload from "../../Assets/Images/upload-blue.svg";
import menuBlue from "../../Assets/Images/menu-blue.svg";
import setting from "../../Assets/Images/setting-blue.svg";


interface IFolderProps {
    data?: any,
    error?: any,
    isLoading?: any
}

const LeftMenu: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const [SelValue, setSelValue] = useState("");
    const [topMenu, setTopMenu] = useState(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const selectedMenu = (selValue: any) => {
        setSelValue(selValue);
        setTopMenu(false);
    };

    const clearMenu = () => {
        setTopMenu(true);
    };

    const clearButton = (
        <ListItem className={classes.topClear} sx={{ position: "absolute", zIndex: 99 }}>
            <Link className={classes.topClearLink} onClick={clearMenu} href="#">
                clear <ClearIcon />
            </Link>
        </ListItem>
    );

    const { data, error, isLoading } = props;
    console.log(data, 'Left menu data ')
    return (
        <Box sx={{  width:"190px", bgcolor: 'background.paper',height:"100%"  }}>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent:"space-between" }} >
                <Box >
                    <nav>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon className={classes.MuiListItemIcon}>
                                        {/* <TopicTwoToneIcon /> */}
                                        <img src={filesIcon} alt=" MyFiles" />
                                    </ListItemIcon>
                                    <ListItemText primary="My Files"  className={classes.textListItem}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={sharedIcon} alt="shared" className={classes.textListItem}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Shared with me" className={classes.textListItem} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={DocumentIcon} alt="Document" className={classes.textListItem}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Document Library" className={classes.textListItem}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={recentIcon} alt="recent" className={classes.textListItem}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Recent"  className={classes.textListItem}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={starredIcon} alt="starred" className={classes.textListItem}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Starred" className={classes.textListItem}/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src={trashIcon} alt="trash" className={classes.textListItem}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Trash" className={classes.textListItem}/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>


                </Box>
                {/* <AuthenticatedTemplate>
                <Paper elevation={0}>
                    <CardContent sx={{ pb: "16px!important" }}>
                        {!topMenu && clearButton}
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
            </AuthenticatedTemplate> */}
                {/* <Box className={classes.lastMenu}>
                    <Grid style={{marginRight:"15px"}}> <img src={upload} alt="upload" /></Grid>
                    <Grid  style={{marginRight:"15px"}}><img src={setting} alt="upload" /></Grid>
                    <Grid><img src={menuBlue} alt="upload" /></Grid>
                </Box> */}
            </Box>
        </Box>
    );
};

export default LeftMenu;
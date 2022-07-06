/* eslint-disable */
import { useState } from 'react';
import { Container, Drawer, Grid, ListItem, Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OneDrive from '../../../Assets/Images/onedrive.svg';
import SharePoint from '../../../Assets/Images/sharepoint.svg';
import Google from '../../../Assets/Images/google-drive.svg';
import Dropbox from '../../../Assets/Images/dropbox.svg';
import { useStyles } from './Styles';
import { BrowserRouter, Link } from 'react-router-dom';

export default function WorkspaceNavigation() {

    const classes = useStyles();
    const [rootFolders, setRootFolders] = useState<any[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <List disablePadding component="ul">
                <Link to="/Myfiles">
                    <ListItemButton
                        component="li"
                        className={classes.driveIcons}
                        sx={{ textAlign: 'center' }}
                        selected={selectedIndex === 0}
                        onClick={(event: any) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon className={classes.folderIcons}>
                            <img src={OneDrive} alt="My Files" />
                        </ListItemIcon>
                        <ListItemText primary="My Files" />
                    </ListItemButton>
                </Link>
                <Link to="/workspace/sharepoint/">
                    <ListItemButton
                        component="li"
                        className={classes.driveIcons}
                        sx={{ textAlign: 'center' }}
                        selected={selectedIndex === 1}
                        onClick={(event: any) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon className={classes.folderIcons}>
                            <img
                                className="sharepoint"
                                src={SharePoint}
                                alt="SharePoint"
                            />
                        </ListItemIcon>
                        <ListItemText primary="SharePoint" />
                    </ListItemButton>
                </Link>

                <Link to="/workspace/google-drive/">
                    <ListItemButton
                        component="li"
                        className={classes.driveIcons}
                        sx={{ textAlign: 'center' }}
                        selected={selectedIndex === 2}
                        onClick={(event: any) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon className={classes.folderIcons}>
                            <img
                                className="googleDrive"
                                src={Google}
                                alt="Google Drive"
                            />
                        </ListItemIcon>
                        <ListItemText primary="Google Drive" />
                    </ListItemButton>
                </Link>

                <Link to="/workspace/dropbox/">
                    <ListItemButton
                        component="li"
                        className={classes.driveIcons}
                        sx={{ textAlign: 'center' }}
                    >
                        <ListItemIcon className={classes.folderIcons}>
                            <img className="dropbox" src={Dropbox} alt="Drop Box" />
                        </ListItemIcon>
                        <ListItemText primary="Drop Box" />
                    </ListItemButton>
                </Link>
            </List>
        </>
    );
}

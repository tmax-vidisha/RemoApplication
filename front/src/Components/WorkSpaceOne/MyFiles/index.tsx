import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
// import {MyFilesPage} from './MyFilesPage';
import { useStyles } from './Styles';
import { Box } from '@mui/material';
import announcementIcon from "./../../Assets/Images/announcement.svg";

import { NavLink } from "react-router-dom";
import WhatsNew from '../../Header/WhatsNew';
import SideBar from '../SideBar';
import LeftMenu from '../LeftMenu';
import SearchPart from '../SearchPart';
import { MyFilePage } from '../../../Pages';
import AllLinks from '../../Quicklinks/AllLinks';
import MenuDrawer from '../MenuDrawer';


const MyFiles = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12}>
                <WhatsNew/>
            </Grid>
            <Box style={{ margin: "20px", }}>
                <Grid container item xs={12} className={classes.bigPaper}>
                    <Grid item xs={1} >
                        <SideBar />
                    </Grid>
                    <Grid item xs={1.5}>
                        <LeftMenu />
                        {/* <MenuDrawer/> */}
                    </Grid>
                    <Grid item xs={7} className={classes.pl8file}>
                       
                        <SearchPart />
                        <MyFilePage />
                    </Grid>
                    <Grid item xs={2}>
                       <AllLinks/>
                    </Grid>
                </Grid>
            </Box> 
        </div>
    );
};

export default MyFiles;
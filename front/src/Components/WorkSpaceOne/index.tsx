import React from 'react';
import { Grid } from '@mui/material';
import LeftMenu from './LeftMenu';
import SearchPart from './SearchPart'
// import {MyFilesPage} from './MyFilesPage';

import SideBar from './SideBar';
import MyFilePage from './../../Pages/WorkSpace/OneDrive/MyFilePage';
import { useStyles } from './Styles';

const WorkSpaceOne = () => {
    const classes=useStyles();
    return (
        <>
            <Grid container item xs={12} className={classes.bigPaper}>
                <Grid item xs={1}>
                    <SideBar/>
                </Grid>
                <Grid item xs={2}>
                    <LeftMenu />
                </Grid>
                <Grid  item xs={9} style={{paddingLeft:"8px"}}>
                    <SearchPart />
                 
                    <MyFilePage/>
                </Grid>
            </Grid>
            {/* <Grid container spacing={2} item xs={12} >
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={9}>
                    
                </Grid>
            </Grid> */}
        </>
    );
};

export default WorkSpaceOne;
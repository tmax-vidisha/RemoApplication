import React from 'react';
import { Grid } from '@mui/material';
import LeftMenu from './LeftMenu';
import SearchPart from './SearchPart';
import {MyFilesPage} from './MyFilesPage';
import SideBar from './SideBar';
import { MyFilePage } from '../../Pages';
const WorkSpaceOne = () => {
    return (
        <>
            <Grid container spacing={2} item xs={12} >
                <Grid item xs={1}>
                    <SideBar/>
                </Grid>
                <Grid item xs={2}>
                    <LeftMenu />
                </Grid>
                <Grid item xs={9}>
                    <SearchPart />
                    {/* <MyFilesPage/> */}
                    <MyFilePage/>
                </Grid>
            </Grid>
            <Grid container spacing={2} item xs={12} >
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={9}>
                    
                </Grid>
            </Grid>
        </>
    );
};

export default WorkSpaceOne;
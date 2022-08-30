import React from 'react';
import { Grid } from '@mui/material';
import LeftMenu from './LeftMenu';
import SearchPart from './SearchPart';
import MyFilesPage from './MyFilesPage';

const WorkSpaceOne = () => {
    return (
        <>
            <Grid container spacing={2} item xs={12} >
                <Grid item xs={3}>
                    <LeftMenu />
                </Grid>
                <Grid item xs={9}>
                    <SearchPart />
                    <MyFilesPage/>
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
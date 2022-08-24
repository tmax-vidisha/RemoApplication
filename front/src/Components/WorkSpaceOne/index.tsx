import React from 'react';
import { Grid } from '@mui/material';
import LeftMenu from './LeftMenu';
import SearchPart from './SearchPart';

const WorkSpaceOne = () => {
    return (
        <>
            <Grid container spacing={2} item xs={12} >
                <Grid item xs={4}>
                    <LeftMenu />
                </Grid>
                <Grid item xs={8}>
                    <SearchPart />
                </Grid>
            </Grid>
        </>
    );
};

export default WorkSpaceOne;
import React from 'react';
import { Grid } from '@mui/material';
import CeoPage from '../CeoPage/CeoPage';
import HeroImagePage from './../HeroImagePage/HeroImagePage';
// import Draggable from "react-draggable";

const MiddleCeoPage = () => {

    
    return (
        <Grid container spacing={2} item xs={12}>
            <Grid item xs={8}>
                {/* <Draggable>
                    <HeroImagePage />
                </Draggable> */}
            </Grid>
            <Grid item xs={4}>
                {/* <Draggable>
                    <CeoPage />
                </Draggable> */}
            </Grid>

        </Grid>
    );
};

export default MiddleCeoPage;
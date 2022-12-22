import React from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

const WhatsNew = () => {
    return (
        <div>
            <Grid item xs={12}>
                <Paper style={{ height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }} elevation={0}>
                    <Typography> <b>WHAT'S NEW</b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus in blanditiis dolorum Optio voluptatibus  </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default WhatsNew;
import React from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import announce from "../../Assets/Images/announcement.svg";
import { useStyles } from './Styles';

const WhatsNew = () => {
    const classes=useStyles();
    return (
        <div>
            <Grid item xs={12} style={{backgroundColor:"#e6e6e6"}}>
                <Paper className={classes.what} elevation={0}>
                  <img src={announce}  alt="" /> <Typography style={{marginLeft:"20px"}}> <b>WHAT'S NEW</b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus in blanditiis dolorum Optio voluptatibus  </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default WhatsNew;
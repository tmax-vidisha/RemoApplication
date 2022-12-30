import React from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import announce from "../../Assets/Images/announcement.svg";
import { useStyles } from './Styles';
import { useGetLatestAnnouncementQuery } from '../../services/contentEditor';
import useCustom from '../../hooks/useCustom';

const WhatsNew = () => {

    const classes=useStyles();
    const {token} = useCustom();
    const { data, error, isLoading } = useGetLatestAnnouncementQuery(token);
    console.log(data?.response,'Whats New')
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
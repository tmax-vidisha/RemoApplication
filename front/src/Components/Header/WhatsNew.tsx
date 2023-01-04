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
 
    // const sortedActivities = data?.response .sort((b: any, a: any) => Date.parse(a.lastModifiedDateTime) < Date.parse(b.lastModifiedDateTime) ? -1 : 1);
    // console.log(sortedActivities,'Whats')
    
    return (
        <div>
            <Grid item xs={12} style={{backgroundColor:"#e6e6e6"}}>
                <Paper className={classes.what} elevation={0}>
                  <img src={announce}  alt="" /> <Typography style={{marginLeft:"20px"}}> <b>WHAT'S NEW</b>  {data?.response[0].fields.Title}</Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default WhatsNew;
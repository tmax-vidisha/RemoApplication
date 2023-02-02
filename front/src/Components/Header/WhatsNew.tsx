import React from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import announce from "../../Assets/Images/announcement.svg";
import { useStyles } from './Styles';
import { useGetLatestAnnouncementQuery } from '../../services/contentEditor';
import useCustom from '../../hooks/useCustom';
import { Link } from 'react-router-dom';

const WhatsNew = () => {

    const classes = useStyles();
    const { token } = useCustom();
    const { data, error, isLoading } = useGetLatestAnnouncementQuery(token);
    console.log(data?.response, 'Whats New')

    // const sortedActivities = data?.response .sort((b: any, a: any) => Date.parse(a.lastModifiedDateTime) < Date.parse(b.lastModifiedDateTime) ? -1 : 1);
    // console.log(sortedActivities,'Whats')

    return (
        <div>
            <Grid item xs={12} style={{ backgroundColor: "#e6e6e6" }}>
                <Paper className={classes.what} elevation={0}>
                    <Link to="/whatsNewAnnounce"><img src={announce} alt="" /></Link>  <p style={{ marginLeft: "20px" }}>
                        <b>WHAT'S NEW</b>
                        <Link to="/whatsAnnouneReadMore" style={{ color: "#606C74", textDecoration: "none", paddingLeft: "20px" }}>{data?.response[0].fields.Title}</Link> </p>
                </Paper>
            </Grid>
        </div>
    );
};

export default WhatsNew;
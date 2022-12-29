import React from 'react';
import { Grid } from '@mui/material';
import SideBar from './../../Components/WorkSpaceOne/SideBar';
import TableAnnouncement from './../../Components/Announcement/TableAnnouncement';
import { useStyles } from './Styles';


const TableAnnouncementPage = () => {
    const classes=useStyles();
    return (
        <div  style={{ margin: "30px", }}>
            <Grid container item xs={12} className={classes.bigPaper}>
                <Grid item xs={1}>
                    <SideBar />
                </Grid>
                <Grid item xs={11} >
                    <TableAnnouncement/>
                    {/* <AnnouncementInputPage/>
                    <AnnouncementPage/> */}
                    {/* <AnnouncementReadMore/> */}
                </Grid>
            </Grid>
        </div>
    );
};

export default TableAnnouncementPage;
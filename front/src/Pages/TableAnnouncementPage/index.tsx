import React from 'react';
import { Grid } from '@mui/material';
import SideBar from './../../Components/WorkSpaceOne/SideBar';
import TableAnnouncement from './../../Components/Announcement/TableAnnouncement';
import AnnouncementInputPage from './../AnnouncementPage/AnnouncementInputPage';
import AnnouncementPage from './../AnnouncementPage/AnnouncementPage';
import AnnouncementReadMore from '../../Components/AnnouncementReadMore';


const TableAnnouncementPage = () => {
    return (
        <>
            <Grid container item xs={12} style={{margin:"20px 30px 10px 30px", backgroundColor:"#f1f1f1",  boxShadow: "10px 1px 30px -10px #c2bcbc",overflowX:"hidden"}}>
                <Grid item xs={1}>
                    <SideBar />
                </Grid>
                <Grid item xs={10} style={{marginRight:"30px"}}>
                    <TableAnnouncement/>
                    {/* <AnnouncementInputPage/>
                    <AnnouncementPage/> */}
                    {/* <AnnouncementReadMore/> */}
                </Grid>
            </Grid>
        </>
    );
};

export default TableAnnouncementPage;
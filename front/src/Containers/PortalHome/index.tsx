import React, { useState, useEffect, useCallback } from 'react'
import {
  EventsPage,
  EmpHighlightPage,
  RecentFilePage,
  CeoPage,
  NewsPage,
  HeroImagePage,
  QuicklinkPage,
  HomeNavigationPage,
  AnnouncementPage,
  MeetingsPage
} from '../../Pages';
import Announcement from '../../Components/Announcement';
import HomeTopNav from '../HomeTopNav';
import SocialMedia from '../../Components/SocialMedia';
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import { Container, Grid, Paper, Theme, Typography } from "@mui/material";
import WorkSpaceOne from './../../Components/WorkSpaceOne/index';
import Gallery from './../../Components/Gallery/index';
import MiddleCeoPage from '../../Pages/MiddleCeoPage';
import ListItem from '@mui/material/ListItem';
// import { ReactSortable } from "react-sortablejs";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableHomePage from '../DraggableHomePage';
import DroppableHomePage from '../DroppableHomePage';

import { useGetLatestAnnouncementQuery } from '../../services/contentEditor';
import useCustom from '../../hooks/useCustom';
import { Link, useNavigate } from 'react-router-dom';
import { useStyles } from './Styles';
import announce from "../../Assets/Images/announcement.svg";
import DragandDropPage from './DragandDropPage';

const PortalHome = () => {
  const pca = new PublicClientApplication(configuration);
  // const [token, setToken] = useState<string>();
  const [data1, setData1] = useState<any>([]);
  const navigate = useNavigate()
  const classes = useStyles();
  const { token } = useCustom();
  const { data, error, isLoading } = useGetLatestAnnouncementQuery(token);
  console.log(data?.response, 'Whats New')

  const handleItem = () => {
    navigate('/whatsAnnouneReadMore', { state: { data: data?.response[0] } })
  }
  const handleItem1 = () => {
    navigate('/whatsNewAnnounce', { state: { data: data?.response } })
  }
  return (
    <>
      <Grid item xs={12} >
        <Paper className={classes.what} elevation={0} style={{ backgroundColor: "#fff" }}>
          <span onClick={handleItem1}><img src={announce} alt="" style={{ cursor: "pointer" }} /></span>  <p style={{ marginLeft: "20px", }}>
            <b>WHAT'S NEW</b>
            <span style={{ color: "#606C74", textDecoration: "none", paddingLeft: "20px", cursor: "pointer" }} onClick={handleItem}>{data?.response[0].fields.Title}</span> </p>
        </Paper>
      </Grid>
      <div className={classes.root}>
        <Grid className={classes.bannerTop}>
          {/* <DndProvider backend={HTML5Backend}>
         
          <DroppableHomePage />
        </DndProvider> 

          {/* <Grid item xs={12} style={{ marginBottom: "16px", paddingTop: "16px", position: "relative" }}>
          <HomeNavigationPage />*/}
        </Grid>

        {/* <DragandDropPage/> */}
        {/* <Grid item xs={8}>
            <Mymeeting />
          </Grid> */}
        {/* <LeftMenu/> */}
        {/* <WorkSpaceOne/> 
        </Grid>*/}
        {/* <DragandDropPage/> */}
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <HeroImagePage />
          </Grid>

          <Grid item xs={4}>
            <CeoPage />
          </Grid>

          <Grid item xs={12}>
            <HomeNavigationPage />
            {/* <TopNavLink/> */}
          </Grid>
          <Grid item xs={8}>
            <MeetingsPage />
          </Grid>
          <Grid item xs={4}>
            <EmpHighlightPage />
          </Grid>
          <Grid item xs={8}>
            <Grid item xs={12}>
              <NewsPage />
            </Grid>
            <Grid
              container
              item
              xs={12}
              style={{
                marginTop: 0,
                marginRight: 0,
                marginLeft: 0,
                width: "100%",
              }}
              spacing={2}
            >
              <Grid item xs={6}>
                <Gallery />
              </Grid>
              <Grid item xs={6}>
                <SocialMedia />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item xs={12}>
              <EventsPage />
            </Grid>
            <Grid item xs={12} >
              <RecentFilePage />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default PortalHome;
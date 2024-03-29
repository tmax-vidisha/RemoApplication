import React, { useState, useEffect, useCallback } from "react";
import {
  EventsPage,
  EmpHighlightPage,
  RecentFilePage,
  CeoPage,
  NewsPage,
  HeroImagePage,
  HomeNavigationPage,
  MeetingsPage,
} from "../../Pages";
import SocialMedia from "../../Components/SocialMedia";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import { Grid, Paper } from "@mui/material";
import Gallery from "./../../Components/Gallery/index";
// import { ReactSortable } from "react-sortablejs";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableHomePage from "../DraggableHomePage";
import DroppableHomePage from "../DroppableHomePage";

import { useGetLatestAnnouncementQuery } from "../../services/contentEditor";
import useCustom from "../../hooks/useCustom";
import { Link, useNavigate } from "react-router-dom";
import { useStyles } from "./Styles";
import announce from "../../Assets/Images/announcement.svg";
import DragandDropPage from "./DragandDropPage";
import DragAndDrop from "../ComponentDragandDrop/DragAndDrop";

const PortalHome = () => {
  const pca = new PublicClientApplication(configuration);
  // const [token, setToken] = useState<string>();
  const [data1, setData1] = useState<any>([]);
  const navigate = useNavigate();
  const classes = useStyles();
  const { token } = useCustom();
  const { data, error, isLoading } = useGetLatestAnnouncementQuery(token);
  console.log(data?.response, "Whats New");

  const handleItem = () => {
    navigate("/whatsAnnouneReadMore", { state: { data: data?.response[0] } });
  };
  const handleItem1 = () => {
    navigate("/whatsNewAnnounce", { state: { data: data?.response } });
  };
  return (
    <>
      <Grid item xs={12}>
        <Paper
          className={classes.what}
          elevation={0}
          style={{ backgroundColor: "#fff" }}
        >
          <span onClick={handleItem1}>
            <img src={announce} alt="" style={{ cursor: "pointer" }} />
          </span>{" "}
          <p className={classes.marginDiv}>
            <b>WHAT'S NEW</b>
            <span
              style={{
                color: "#606C74",
                textDecoration: "none",
                paddingLeft: "20px",
                cursor: "pointer",
              }}
              onClick={handleItem}
            >
              {data?.response[0].fields.Title}
            </span>{" "}
          </p>
        </Paper>
      </Grid>
      <div className={classes.root}>
        <Grid className={classes.bannerTop}>
          {/* <DndProvider  backend={HTML5Backend}>
           <DroppableHomePage />
          </DndProvider> */}

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
          <Grid item xs={12} md={8}>
            <HeroImagePage />
          </Grid>
          <Grid item xs={12} md={4}>
            <CeoPage />
            {/* <DragAndDrop/> */}
          </Grid>

          <Grid item xs={12} md={12}>
            <HomeNavigationPage />
            {/* <TopNavLink/> */}
          </Grid>
          <Grid item md={8} xs={12}>
            <MeetingsPage />
          </Grid>
          <Grid item md={4} xs={12}>
            <EmpHighlightPage />
          </Grid>
          <Grid item md={8} xs={12}>
            <Grid item xs={12} md={12}>
              <NewsPage />
            </Grid>
            <Grid
              container
              item
              xs={12}
              className={classes.divContainer}
              spacing={2}
              style={{ marginTop: "0px" }}
            >
              <Grid item xs={12} md={6} className={classes.divContainer}>
                <Gallery />
              </Grid>
              <Grid item md={6} xs={12} className={classes.divContainer}>
                <SocialMedia />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid item xs={12}>
              <EventsPage />
            </Grid>
            <Grid item xs={12}>
              <RecentFilePage />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PortalHome;

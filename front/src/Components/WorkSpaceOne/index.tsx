import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid, Paper, Typography } from "@mui/material";
import LeftMenu from "./LeftMenu";
import SearchPart from "./SearchPart";
// import {MyFilesPage} from './MyFilesPage';
import SideBar from "./SideBar";
import { useStyles } from "./Styles";
import { Box } from "@mui/material";
import announcementIcon from "./../../Assets/Images/announcement.svg";

import { NavLink } from "react-router-dom";
import IconText from "../Header/IconText";
import MyFilePage from "./../../Pages/WorkSpace/OneDrive/MyFilePage";
import AllLinks from "./../Quicklinks/AllLinks";
import WhatsNew from "../Header/WhatsNew";
import ToggleButton from "./../Header/ToggleButton";
import MenuDrawer from "./MenuDrawer";

const WorkSpaceOne = () => {
  const classes = useStyles();

  // const activeLink = style={{color:"red"}};
  // const normalLink = style={{color:"blue"}};
  return (
    <Grid>
      {/* <ToggleButton/> */}
      <Grid item xs={12}>
        <WhatsNew />
      </Grid>
      <Box style={{ margin: "20px" }}>
        <Grid container item xs={12} className={classes.bigPaper}>
          <Grid item xs={12} md={1}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <LeftMenu />
            {/* <MenuDrawer/> */}
          </Grid>
          <Grid item xs={12} md={7} className={classes.pl8file}>
            <SearchPart />
            <MyFilePage />
          </Grid>
          <Grid item xs={12} md={2}>
            <AllLinks />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default WorkSpaceOne;

import React from "react";
import WhatsNew from "./../Header/WhatsNew";
import { Grid, Box } from "@mui/material";
import SideBar from "./../WorkSpaceOne/SideBar";
import { useStyles } from "./Styles";
// import QuickLinksEditor from './QuickLinksEditor';
import { QuickLinkContentEditorPage } from "../../Pages";

const QuickContentPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        {/* <IconText /> */}
        <Grid item xs={12}>
          <WhatsNew />
        </Grid>
        <Box className={classes.m30}>
          <Grid container item xs={12} className={classes.bigPaper}>
            <Grid item xs={12} md={1}>
              <SideBar />
            </Grid>
            <Grid item xs={12} md={11}>
              <QuickLinkContentEditorPage />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default QuickContentPage;

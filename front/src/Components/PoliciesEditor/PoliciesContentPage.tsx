import React from "react";
import WhatsNew from "./../Header/WhatsNew";
import { Grid, Box } from "@mui/material";
import SideBar from "./../WorkSpaceOne/SideBar";
import { useStyles } from "./Styles";
import PoliciesEditor from "./PoliciesEditor";

const PoliciesContentPage = () => {
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
              <PoliciesEditor />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default PoliciesContentPage;

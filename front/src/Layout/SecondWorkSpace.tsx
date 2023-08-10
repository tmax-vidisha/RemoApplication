import React from "react";
import { Box, Grid } from "@mui/material";
import { useStyles } from "./Styles";
import LeftMenu from "./../Components/WorkSpaceOne/LeftMenu";
import SearchPart from "../Components/WorkSpaceOne/SearchPart";
import MyFilePage from "./../Pages/WorkSpace/OneDrive/MyFilePage";
import WhatsNew from "../Components/Header/WhatsNew";
import IconText from "../Components/Header/IconText";
import AllLinks from "../Components/Quicklinks/AllLinks";

const SecondWorkSpace = () => {
  const classes = useStyles();
  return (
    <div>
      <IconText />
      <WhatsNew />
      <Box style={{ margin: "20px" }}>
        <Grid container item xs={12} className={classes.bigPaper}>
          <Grid item xs={12} md={1.5} className={classes.pl30file}>
            <LeftMenu />
          </Grid>
          <Grid item xs={12} md={8} className={classes.pl8file}>
            <SearchPart />
            <MyFilePage />
          </Grid>
          <Grid item xs={12} md={2}>
            <AllLinks />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SecondWorkSpace;

import React from "react";
import { useStyles } from "./Styles";
import {
  Breadcrumbs,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
  Link,
} from "@mui/material";
import IconText from "../Header/IconText";
// import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import sustain from "../../Assets/Images/sustain.jpg";
import LeftPanel from "./LeftPanel";

const HRDepartment = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper elevation={0} sx={{ mb: 2 }}>
        <IconText />
      </Paper>
      <Container className={classes.contentEditorWidth}>
        <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">
                Department
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link className={classes.breadLinks} color="inherit" href="/">
                    Home
                  </Link>
                  <Typography>HR</Typography>
                </Breadcrumbs>
              </Typography>
            </Paper>
          </Paper>
        </Card>
        <Paper>
          <Grid container item xs={12} className={classes.mainDepart}>
            <Grid xs={12} md={4} className={classes.imgPart}>
              <img src={sustain} alt="department" className={classes.imgFlag} />
            </Grid>
            <Grid xs={12} md={8} className={classes.contentPart}>
              <h2>Information Technology: Building a sustainable future</h2>
              <p className={classes.PContent}>
                We are fully committed to protecting and preserving the natural
                environment and have the strictest policies in place at every
                stage of our value chain, from the extraction of raw materials,
                right the way through to final production and distribution.
              </p>
              <p className={classes.PContent}>
                Over 25 years ago, we were the first cable manufacturing company
                to have our Environmental Management System certified by BASEC
                to ISO:14001, and we were also recognised for our efforts and
                presented with the GCC Award for Environmental Excellence.
              </p>
              <p className={classes.PContent}>
                As part of our commitment to the environment, we have planted
                more than 500 trees at our Jebel Ali site. The trees are watered
                using domestic waste water, which is treated and recycled at our
                own sewage treatment plant.
              </p>
            </Grid>
          </Grid>
        </Paper>
        <Grid item xs={12}>
          <Grid xs={8} className={classes.PaperContent}>
            <Grid xs={2}>
              <LeftPanel />
            </Grid>
            <Grid xs={6}></Grid>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HRDepartment;

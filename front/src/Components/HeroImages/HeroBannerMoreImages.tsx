import React from "react";
import IconText from "../Header/IconText";
import {
  Container,
  Card,
  Paper,
  Typography,
  Link,
  Breadcrumbs,
  Grid,
  CardMedia,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useStyles } from "./Styles";
import { useLocation } from "react-router-dom";
//  import carVideo from '../../Assets/videos/Cars.mp4';
// import { VideoCard } from 'material-ui-player'
var moment = require("moment-timezone");
const HeroBannerMoreImages = () => {
  const classes = useStyles();
  let location = useLocation();
  console.log(location.state);
  //@ts-ignore
  const { folderData = {}, Title, Description, Modified } = location.state;

  console.log(folderData, Title, Description, Modified, "hrtret5ey   r6");
  return (
    <div>
      <IconText />
      <Container className={classes.contentEditorWidth}>
        <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">
                <Link className={classes.breadLinks} color="inherit" href="/">
                  Banner
                </Link>
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
                  <Link className={classes.breadLinks} color="inherit" href="/">
                    <Typography>BannerRead More </Typography>
                  </Link>
                </Breadcrumbs>
              </Typography>
            </Paper>
          </Paper>
        </Card>
        <Paper
          className={classes.cardHeight}
          elevation={0}
          sx={{ mb: 3, borderRadius: "10px" }}
        >
          <Grid item xs={12} style={{ backgroundColor: "white" }}>
            <Grid item xs={12}>
              <Card
                raised
                sx={{
                  width: "100%",
                  margin: "0 auto",
                  padding: "0.1em",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  // autoPlay
                  // controls
                  src={folderData}
                  className={classes.bannerHero}
                />
              </Card>
            </Grid>
            <Grid item xs={12} style={{ margin: "15px" }}>
              <Typography
                style={{
                  color: "#6c6565",
                  textAlign: "left",
                  fontSize: "20px",
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                {Title}
              </Typography>
              <Typography
                style={{
                  color: "#1BAAB5",
                  textAlign: "left",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                {moment(Modified).format("DD-MM-YYYY")}
              </Typography>
              <Typography
                style={{
                  color: "#606C74",
                  fontSize: "12px",
                  textAlign: "left",
                  paddingBottom: "20px",
                }}
              >
                {Description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default HeroBannerMoreImages;

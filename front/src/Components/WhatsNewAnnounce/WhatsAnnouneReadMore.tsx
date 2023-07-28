import React from "react";
import {
  Breadcrumbs,
  Card,
  Container,
  Grid,
  Paper,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "./Styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import IconText from "../Header/IconText";
import ship1 from "../../Assets/Images/ship1.png";
import ship2 from "../../Assets/Images/ship2.png";
import ship3 from "../../Assets/Images/ship3.png";
import ship4 from "../../Assets/Images/ship4.png";
import bigShip from "../../Assets/Images/bigShip.png";
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import comments from "../../Assets/Images/comments.svg";
import { useLocation } from "react-router-dom";
var moment = require("moment-timezone");

const WhatsAnnouneReadMore = () => {
  const classes = useStyles();
  let location = useLocation();

  console.log(location.state);

  const { data = [] } = location.state;
  console.log(data?.fields, "data");
  return (
    <div>
      <IconText />
      <Container className={classes.contentEditorWidth}>
        <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">
                Announcements
              </Typography>
              <Typography>
                <Breadcrumbs
                  className={classes.breadcrumbs}
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link to="/" className={classes.breadLinks}>
                    Home
                  </Link>
                  <Link to="/whatsNewAnnounce" className={classes.breadLinks}>
                    All Announcements
                  </Link>
                  <Typography className={classes.breadLinks}>
                    Announcements Read More
                  </Typography>
                </Breadcrumbs>
              </Typography>
            </Paper>
          </Paper>
        </Card>
        <Paper style={{ marginTop: "30px" }}>
          <Grid>
            <Grid>
              <img
                src={data?.fields.Image}
                alt=""
                style={{ width: "1100px", height: "250px" }}
              />
              <p style={{ fontSize: "20px" }}>{data?.fields.Title} </p>
              <div style={{ marginLeft: "30px" }}>
                <p className={classes.itemDate}>
                  {moment(data?.fields.Modified).format("DD-MM-YYYY")}
                </p>
                <p className={classes.itemDate}>{data?.fields.Description}</p>
              </div>
            </Grid>
          </Grid>
          <Grid className={classes.iconDiv}>
            <div className={classes.iconView}>
              <span>
                <img src={love} alt="" />
              </span>
              <span>10</span>
            </div>
            <div className={classes.iconView}>
              <span>
                <img src={comments} alt="" />
              </span>
              <span>10</span>
            </div>
            <div className={classes.iconView}>
              <span>
                {" "}
                <img src={view} alt="" />
              </span>
              <span>10</span>
            </div>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default WhatsAnnouneReadMore;

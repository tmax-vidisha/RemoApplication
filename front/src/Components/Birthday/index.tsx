import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  Link,
  Breadcrumbs,
} from "@mui/material";
import { Paper } from "@mui/material";
import IconText from "./../Header/IconText";
import { useStyles } from "./Styles";
import birthdayIcon from "../../Assets/Images/birthday.jpg";
import loveIcon from "../../Assets/Images/love.svg";
import { useLocation } from "react-router-dom";
import birthday from "../../Assets/Images/girl.jpg";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import likeActive from "../../Assets/Images/loveActive.svg";
// const Birthday = (props:any)=> {
//     const classes = useStyles();
//     let location = useLocation();

//     console.log(location.state);

//     //@ts-ignore
//     const { data, error, isLoading,onGetItem ,ItemData} =  props;
//     const { folderData = [] } = location.state;
//     console.log(folderData, 'birthday data');

// import { Navigate, useLocation, useNavigate } from 'react-router-dom';
const Birthday = () => {
  const classes = useStyles();

  let location = useLocation();
  console.log(location.state);
  //@ts-ignore
  const { Title, Dept, img, description, Name } = location.state;
  console.log(Title, Dept, img, description, Name, "birthday");

  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
    setIsActive(!isActive);

    // Store the updated like count in localStorage
    localStorage.setItem("likes", String(likes + (isClicked ? -1 : 1)));
  };

  const hide = () => {
    setIsActive(!isActive);
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    const storedLikes = localStorage.getItem("likes");
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, []);
  return (
    <div>
      <Paper elevation={0} sx={{ mb: 2 }}>
        <IconText />
      </Paper>
      <Container className={classes.contentEditorWidth}>
        <Paper>
          <Card className={classes.cardHeight} elevation={0}>
            <Paper className={classes.innerBackground}>
              <div className={classes.innerBannerOverlay}></div>
              <Paper className={classes.contentHeader} elevation={0}>
                <Typography className={classes.breadcrumbs} variant="h6">
                  Celebrating his Birthday on Today
                  {/* <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
                                    News
                                </Link> */}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  <Breadcrumbs
                    className={classes.breadcrumbs}
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                  >
                    <Link
                      className={classes.breadLinks}
                      color="inherit"
                      href="/"
                    >
                      Home
                    </Link>
                    <Typography>
                      <Link
                        className={classes.breadLinks}
                        color="inherit"
                        href="/birthday"
                      >
                        Banner Read More
                      </Link>
                    </Typography>
                  </Breadcrumbs>
                </Typography>
              </Paper>
            </Paper>
            <img
              src={img}
              alt="icon"
              style={{
                position: "sticky",
                width: "100px",
                borderRadius: "50%",
                marginTop: "-54px",
              }}
            />
          </Card>
          <Grid>
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "700",
                color: "rgb(2 51 73)",
              }}
            >
              {" "}
              {Name}
            </Typography>
            <Typography> {Dept}</Typography>
          </Grid>
          <Grid style={{ textAlign: "left", margin: "30px" }}>
            {description}
          </Grid>
          <Grid>
            <Button
              style={{
                border: "1px solid #1BAAB5",
                color: "#1BAAB5",
                borderRadius: "5px",
                marginBottom: "20px",
              }}
            >
              {/* <img
              src={loveIcon}
              alt="love"
              style={{ width: "15px", marginRight: "10px" }}
            />
            Let wish him */}

              {isActive ? (
                <div>
                  <img
                    src={likeActive}
                    alt=""
                    style={{ width: "15px", marginLeft: "15px" }}
                    onClick={hide}
                  />
                  <span
                    className="likes-counter"
                    style={{
                      fontSize: "12px",
                      marginLeft: "10px",
                      color: "#009BAD",
                      textTransform: "initial",
                    }}
                  >
                    {`${likes}`} likes
                  </span>
                </div>
              ) : (
                <div>
                  <img
                    src={loveIcon}
                    alt=""
                    style={{ width: "15px", marginRight: "15px" }}
                    className={`like-button ${isClicked && "liked"}`}
                    onClick={handleClick}
                  />
                  <span>Let wish him</span>
                </div>
              )}
            </Button>
          </Grid>
        </Paper>
        <Paper>
          <Grid></Grid>

          {/* <Box>
                        {folderData?.response &&
                             folderData?.response?.map((item: any, index: any) => {
                                const { fields = {} } = item;
                                var EmpTitle = fields?.Title;
                                var empName = fields?.Name;
                                var DeptVal = fields?.Dept;
                                var img = fields?.EmpImg

                                return (
                                    <div>
                                    <img src={item.fields?.EmpImg} alt="" />
                                    <p>{EmpTitle}</p>
                                    </div>

                                );
                            })}
                        
                    </Box>  */}
        </Paper>
      </Container>
    </div>
  );
};

export default Birthday;

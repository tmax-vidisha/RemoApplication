import React, { useRef } from 'react'
import { Fragment, useEffect, useState } from "react";
import {
    NavLink as RouterNavLink,

} from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useStyles } from "./Styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SkeletonAnimation from "../../Containers/Skeleton";
// import Carousel from 'react-grid-carousel';
import {
    Breadcrumbs,
    Card,
    CardContent,
    CardMedia,
    Container,
    Link,
    Grid,
    Paper,
    Typography,
    CardActionArea,
    Stack,
    ListItem,
    Box,
    ListItemText,
    List
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import rashid from '../../Assets/Images/rashid.jpg';
import scotish from '../../Assets/Images/scotish.jpg';
import recedent from '../../Assets/Images/recedent.jpg';
import flight from '../../Assets/Images/flight.jpg';
import prince from '../../Assets/Images/prince.jpg';
import clock from '../../Assets/Images/clock.svg';
import IconText from '../Header/IconText';
// import { Carousel } from '@trendyol-js/react-carousel';
//import Carousel from 'react-material-ui-carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const post = [
    {
        id: 1,
        image: <img src={scotish} alt="sco" style={{ width: "230px", height: "120px", borderRadius: "8px" }} />,
        name: "Scotish Oil worker home in Dubai after 11- months iraq ordeal",
        title: "science",
        time: "Few Mins ago"
    },
    {
        id: 2,
        image: <img src={recedent} alt="sco" style={{ width: "230px", height: "120px", borderRadius: "8px" }} />,
        name: "Fighting for water bottles, Dubai residents reveal uncomfortable quarantine in UK ",
        title: "science",
        time: "Few Mins ago"
    },
    {
        id: 3,
        image: <img src={flight} alt="sco" style={{ width: "230px", height: "120px", borderRadius: "8px" }} />,
        name: "Vatican honour for Crown Prince fills country with pride, Sheikha Fatima says",
        title: "Health",
        time: "Few Mins ago"
    },
    {
        id: 4,
        image: <img src={prince} alt="sco" style={{ width: "230px", height: "120px", borderRadius: "8px" }} />,
        name: "PepsiCo unveils Expo 2020 Dubai pavilions with once in a lifetime experiences",
        title: "Health",
        time: "Few Mins ago"
    },
    {
        id: 5,
        image: <img src={prince} alt="sco" style={{ width: "230px", height: "120px", borderRadius: "8px" }} />,
        name: "PepsiCo unveils Expo 2020 Dubai pavilions with once in a lifetime experiences",
        title: "Health",
        time: "Few Mins ago"
    },
    {
        id: 6,
        image: <img src={scotish} alt="sco" style={{ width: "230px", height: "120px", borderRadius: "8px" }} />,
        name: "Scotish Oil worker home in Dubai after 11- months iraq ordeal",
        title: "science",
        time: "Few Mins ago"
    },

]

const category = [
    {
        id: 1,
        name: "National",
        point: 20,
    },
    {
        id: 2,
        name: "Sports",
        point: 11,
    },
    {
        id: 3,
        name: "Science",
        point: 21,
    },
    {
        id: 4,
        name: "Technology",
        point: 14,
    },
    {
        id: 5,
        name: "Health",
        point: 16,
    },
    {
        id: 6,
        name: "Education",
        point: 30,
    },
    {
        id: 7,
        name: "Sports",
        point: 26,
    },
    {
        id: 8,
        name: "Government",
        point: 21,
    },
    {
        id: 9,
        name: "Transport",
        point: 20,
    },

]

const MoreNews = () => {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.contentEditorWidth}>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }}>
                    <IconText />
                </Paper>
                <Card className={classes.cardHeight} elevation={0}>
                    <Paper className={classes.innerBackground}>
                        <div className={classes.innerBannerOverlay}></div>
                        <Paper className={classes.contentHeader} elevation={0}>
                            <Typography className={classes.breadcrumbs} variant="h6">

                                <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
                                    News
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
                                    <Typography>
                                        <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
                                            News
                                        </Link></Typography>
                                    <Typography>National</Typography>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >

                    <Grid>
                        <Stack direction="row" spacing={2} style={{ backgroundColor: "white" }}>
                            <Grid item xs={10} style={{borderRight: "1px solid #e6e6e6", padding:"10px"}}>
                                <Box style={{ margin: "10px", textAlign: "left" }}><p style={{ color: "#39c8cf", }}>National</p></Box>
                                <Grid style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                                    {post.slice(0, 6).map((item: any) => (
                                        <Grid style={{ margin: "20px" }}>
                                            <Box style={{ width: "230px", height: "120px", }}>
                                                {item.image}
                                            </Box>
                                            <Typography style={{ width: "230px", fontSize: "12px", color: "gray" }}>{item.name} </Typography>
                                        </Grid>
                                    ))
                                    }
                                </Grid>


                            </Grid>
                            <Grid item xs={2}>
                                <Box style={{ margin: "10px", textAlign: "left" }}><p style={{ color: "#39c8cf", }}>Related Category</p></Box>
                                <>
                                    {
                                        category.map((item: any) => (
                                            <Grid style={{ display: "flex", justifyContent: "space-between", margin: "15px", width: "250px", color: "gray",borderBottom: "1px solid #e6e6e6" }}>
                                                <Typography style={{ fontSize: "12px" }}>{item.name}</Typography>
                                                <Typography style={{ fontSize: "12px" }}>{item.point}</Typography>
                                            </Grid>
                                        ))
                                    }
                                </>
                            </Grid>

                        </Stack>

                    </Grid >
                </Paper>

            </Container>
        </div>
    );
};

export default MoreNews;
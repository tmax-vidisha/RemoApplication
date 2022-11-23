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
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


var moment = require("moment-timezone");

// interface IFolderProps {
//     data: any,
//     error: any,
//     isLoading: any,
// }

const post = [
    {
        id: 1,
        image: <img src={scotish} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />,
        name: "Scotish Oil worker home in Dubai after 11- months iraq ordeal",
        title: "science",
        time: "Few Mins ago"
    },
    {
        id: 2,
        image: <img src={recedent} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />,
        name: "Fighting for water bottles, Dubai residents reveal uncomfortable quarantine in UK ",
        title: "science",
        time: "Few Mins ago"
    },
    {
        id: 3,
        image: <img src={flight} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />,
        name: "Vatican honour for Crown Prince fills country with pride, Sheikha Fatima says",
        title: "Health",
        time: "Few Mins ago"
    },
    {
        id: 4,
        image: <img src={prince} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />,
        name: "PepsiCo unveils Expo 2020 Dubai pavilions with once in a lifetime experiences",
        title: "Health",
        time: "Few Mins ago"
    },

]
const SubNews = () => {
    const classes = useStyles();
    // const { data, error, isLoading } = props;
    // console.log(data?.response1, 'nEWS');
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
                                News
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
                                    <Typography>News</Typography>
                                    <Typography>News Read More</Typography>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >

                    <Grid>
                        <Stack direction="row" spacing={2} style={{ backgroundColor: "white" }}>
                            <Grid item xs={6} style={{ borderRight: "1px solid #e6e6e6", paddingRight: "20px", marginRight: "50px" }}>
                                <Grid style={{ fontSize: "10px" }}>
                                    <Box style={{ margin: "10px", textAlign: "left" }}><p style={{ color: "#39c8cf", }}>National</p></Box>
                                    <Typography style={{ width: "350px", textAlign: "left", marginLeft: "10px", fontWeight: "600" }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Typography>

                                </Grid>
                                <Grid>
                                    <img src={prince} alt="image" style={{ minWidth: "450px", height: "280px", borderRadius: "10px" }} />
                                </Grid>
                                <Grid style={{ width: "150px", display: "flex", justifyContent: "space-between", color: "gray", marginLeft:"20px", marginBottom:"20px" }}>
                                    <Typography style={{fontSize: "8px"}}>2 hour ago</Typography>
                                    <Typography style={{fontSize: "8px"}}> 1k views</Typography>
                                </Grid>
                                <Grid style={{width:"500px", fontSize:"12px", textAlign:"left", margin:"20px"}}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </Grid>

                            </Grid>
                            <Grid item xs={6} >
                            <Typography style={{ textAlign: "left", color: "#39c8cf", fontSize: "12px", marginTop: "15px" }}><Link href="/MoreNews"> More News on National</Link></Typography>

                                <List>
                           
                            {post.slice(0,5).map((item: any) => (
                                
                                <ListItem  style={{ borderBottom: "1px solid #e6e6e6" }}>
                                    <Box>                                        
                                        {item.image}
                                        {/* <img src={item.image} alt="image" style={{ minWidth: "100px", height: "70px", borderRadius: "5px" , marginRight:"20px"}} /> */}
                                    </Box>
                                    <Box >
                                        <Typography style={{ fontSize: "12px" , color:"#8c8c8c", marginTop:"-33px"}}> {item.name}</Typography>
                                        <Typography style={{ fontSize: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}> <span style={{ color:"#39c8cf" }}>{item.title} </span> <span style={{color:"#8c8c8c"}}>{item.time}</span></Typography>
                                    </Box>
                                </ListItem>

                            ))}
                        </List>

                            </Grid>

                        </Stack>

                    </Grid >
                </Paper>

            </Container>
        </div>
    );
};

export default SubNews;

/*
 <ListItem style={{ borderBottom: "1px solid gray" }}>
                                <Box>
                                    <img src={recedent} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />
                                </Box>
                                <Box >
                                    <Typography style={{ fontSize: "12px" }}> Scotish Oil worker home in Dubai after 11- months iraq ordeal</Typography>
                                    <Typography style={{ fontSize: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}> <span style={{ color: "blue" }}>science </span> <span> Few Mins ago</span></Typography>
                                </Box>
                            </ListItem>
                            <ListItem style={{ borderBottom: "1px solid gray" }}>
                                <Box>
                                    <img src={flight} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />
                                </Box>
                                <Box >
                                    <Typography style={{ fontSize: "12px" }}> Scotish Oil worker home in Dubai after 11- months iraq ordeal</Typography>
                                    <Typography style={{ fontSize: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}> <span style={{ color: "blue" }}>science </span> <span> Few Mins ago</span></Typography>
                                </Box>
                            </ListItem>
                            <ListItem style={{ borderBottom: "1px solid gray" }}>
                                <Box>
                                    <img src={prince} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />
                                </Box>
                                <Box style={{ marginTop: "0px" }}>
                                    <Typography style={{ fontSize: "12px" }}> Scotish Oil worker home in Dubai after 11- months iraq ordeal</Typography>
                                    <Typography style={{ fontSize: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}> <span style={{ color: "blue" }}>science </span> <span> Few Mins ago</span></Typography>
                                </Box>
                            </ListItem>
*/
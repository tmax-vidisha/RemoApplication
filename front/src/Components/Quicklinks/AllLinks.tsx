import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import admin from "./../../Assets/Images/admin.svg";
import ITService from "./../../Assets/Images/IT-ervice.svg";
import sales from "./../../Assets/Images/sales.svg";
import vehicle from "./../../Assets/Images/vechicle-req.svg";
// import gallery from "./../../Assets/Images/gallery.svg";
// import Groups from "./../../Assets/Images/Groups.svg";
// import highlights from "./../../Assets/Images/highlights.svg";
// import logomaster from "./../../Assets/Images/logomaster.svg";
// import navigation from "./../../Assets/Images/navigation.svg";
// import news from "./../../Assets/Images/news.svg";
// import policies from "./../../Assets/Images/policies.svg";
// import quickLinks from "./../../Assets/Images/quicklinksBig.svg";
// import department from "./../../Assets/Images/departmentNew.svg";
import { Typography, Button } from '@mui/material';
import { useStyles } from './Styles';
import QuickLinks from './../Quicklinks/index';
import AppVideo from './../CeoMessage/AppVideo';
import { Link } from 'react-router-dom';
import LinkOffSharpIcon from '@mui/icons-material/LinkOffSharp';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';



const AllLinks = () => {
    const classes = useStyles();
    const [show, setShow] = useState(true);
    const [isShown, setIsShown] = useState(false);

    const handleClickOn = (event: any) => {
        // setIsShown(current => !current)
        setIsShown(true)
    }

    return (
        <Grid style={{paddingTop:"20px",backgroundColor:"white",width:"250px" }}>
            <Grid>
                {show ?
                    <div>
                        <Button className={classes.linkBtn} style={{ textTransform: "capitalize", height: "45px" }} onClick={() => setShow(!show)}>
                            <div onClick={handleClickOn}><span className={classes.quick} ><LinkOffSharpIcon /></span>Quick Links </div>
                        </Button>
                        {isShown && (
                            <div style={{marginTop:"30px"}}>
                                <Grid style={{textAlign:"left", fontSize:"15px", marginLeft:"15px"}}>
                                        Quick Link
                                    </Grid>
                                <Grid className={classes.mainPart}>
                                    
                                    <Box className={classes.boxContent}>
                                        <img src={admin} alt="admin" />
                                        <Grid component="p" className={classes.texts}>
                                            <Link to="/AnnoncementInput">IT -Service
                                            </Link></Grid>
                                    </Box>
                                    <Box className={classes.boxContent}>
                                        <img src={ITService} alt="ITService" />
                                        <Grid component="p" className={classes.texts}>
                                            <Link to="/CEOInput">
                                                Admin
                                            </Link></Grid>
                                    </Box>
                                    <Box className={classes.boxContent}>
                                        <img src={sales} alt="sales" />
                                        <Grid component="p" className={classes.texts}>
                                            <Link to="/ContentEditor">
                                                Sales
                                            </Link>
                                        </Grid>
                                    </Box>
                                    <Box className={classes.boxContent}>
                                        <img src={vehicle} alt="vehicle" />
                                        <Grid component="p" className={classes.texts}>
                                            <Link to="/AnnouncementReadMore">
                                                Vehicle Request
                                            </Link>

                                        </Grid>
                                    </Box>
                                    <Box className={classes.boxContent}>
                                        <img src={sales} alt="announce" />
                                        <Grid component="p" className={classes.texts}>

                                            <Link to="/EventsInput">
                                                Hub
                                            </Link>
                                        </Grid>
                                    </Box>
                                    <Box className={classes.boxContent}>
                                        <img src={ITService} alt="announce" />
                                        <Grid component="p" className={classes.texts}>
                                            <Link to="/ContentEditor">
                                                IT Service
                                            </Link>
                                        </Grid>
                                    </Box>
                                    <Box className={classes.boxContent}>
                                        <img src={admin} alt="announce" />
                                        <Grid component="p" className={classes.texts}>
                                            <Link to="/HeroInput">
                                                Admin
                                            </Link>
                                        </Grid>
                                    </Box>
                                    <Box className={classes.boxContent}>
                                        <img src={sales} alt="announce" />
                                        <Grid component="p" className={classes.texts}>
                                            <Link to="/EmpHighInput">
                                                Hub
                                            </Link> </Grid>
                                    </Box>
                                    <Box className={classes.boxContent}>
                                        <img src={vehicle} alt="announce" />
                                        <Grid component="p" className={classes.texts}>
                                            <Link to="/EmpHighInput">
                                                Vehicle Request
                                            </Link> </Grid>
                                    </Box>

                                    <Box className={classes.boxContent}>
                                        <img src={sales} alt="vehicle" />
                                        <Grid component="p" className={classes.texts}>
                                            <Link to="/AnnouncementReadMore">
                                                Hub
                                            </Link>

                                        </Grid>
                                    </Box>



                                </Grid>
                            </div>
                        )}
                    </div>
                    :
                    <div>
                        <Button onClick={() => setShow(!show)} style={{ color: "gray", textTransform: "capitalize", backgroundColor: " #e6ffe6", border: "5px solid white", maxHeight: "48px" }}>
                            <span className={classes.quick}><CalendarMonthOutlinedIcon /></span>
                            Daily Standup Meeting ...
                            {/* <StandUpCalendar/> */}
                        </Button>
                    </div>
                }
            </Grid>

        </Grid>
    );
};

export default AllLinks;
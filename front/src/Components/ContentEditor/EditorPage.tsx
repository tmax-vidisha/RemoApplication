import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import announcement from "./../../Assets/Images/AnnouncementBig.svg";
import CEO from "./../../Assets/Images/CEO.svg";
import contentEditor from "./../../Assets/Images/contentEditorNew.svg";
import events from "./../../Assets/Images/events.svg";
import gallery from "./../../Assets/Images/gallery.svg";
import Groups from "./../../Assets/Images/Groups.svg";
import highlights from "./../../Assets/Images/highlights.svg";
import logomaster from "./../../Assets/Images/logomaster.svg";
import navigation from "./../../Assets/Images/navigation.svg";
import news from "./../../Assets/Images/news.svg";
import policies from "./../../Assets/Images/policies.svg";
import quickLinks from "./../../Assets/Images/quicklinksBig.svg";
import department from "./../../Assets/Images/departmentNew.svg";
import { Typography } from '@mui/material';
import { useStyles } from './Styles';
import QuickLinks from './../Quicklinks/index';
import AppVideo from './../CeoMessage/AppVideo';
import { Link } from 'react-router-dom';


const EditorPage = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Grid className={classes.mainPart}>
                <Box className={classes.boxContent}>
                    <img src={announcement} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/tableAnnouncementPage">Announcement
                        </Link></Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={CEO} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/CEOInput">
                            CEO Message
                        </Link></Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={contentEditor} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/ContentEditor">
                            Content Editor
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={department} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/AnnouncementReadMore">
                            Department
                        </Link>

                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={gallery} alt="announce" />
                    <Grid component="p" className={classes.texts}>

                        <Link to="/EventsInput">
                            Events
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={events} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/ContentEditor">
                            Gallery
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={Groups} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/HeroInput">
                            Hero Banner
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={highlights} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/EmpHighInput">
                            Highlights
                        </Link> </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={logomaster} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/EmpHighInput">
                            Logo Master
                        </Link> </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={navigation} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/ContentEditor">
                            Navigation
                        </Link> </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={news} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/NewsInfo">
                            News
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={policies} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/Policy">
                            Policies & Procedure
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={quickLinks} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/userQuickLink">
                            Quick Links
                        </Link></Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <AppVideo />
                </Box>

            </Grid>
        </Grid>
    );
};

export default EditorPage;
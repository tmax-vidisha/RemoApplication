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
                        <Link to="/tableAnnouncementPage" className={classes.link}>Announcement
                        </Link></Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={announcement} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/birthdayContentPage" className={classes.link}>Birthday
                        </Link></Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={CEO} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/ceoContentPage" className={classes.link}>
                            CEO Message
                        </Link></Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={contentEditor} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/contentEditorPage" className={classes.link}>
                            Content Editor
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={department} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/departmentContentPage" className={classes.link}>
                            Department
                        </Link>

                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={gallery} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/eventsContentPage" className={classes.link}>
                            Events
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={events} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/galleryContentPage" className={classes.link}>
                            Gallery
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={Groups} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/heroContentPage" className={classes.link}>
                            Hero Banner
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={highlights} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/highlightsContentPage" className={classes.link}>
                            Highlights
                        </Link> </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={logomaster} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/logoContentPage" className={classes.link}>
                            Logo Master
                        </Link> </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={navigation} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/navigationContentPage" className={classes.link}>
                            Navigation
                        </Link> </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={news} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/newsContentPage" className={classes.link}>
                            News
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={policies} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/policiesContentPage" className={classes.link}>
                            Policies & Procedure
                        </Link>
                    </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={quickLinks} alt="announce" />
                    <Grid component="p" className={classes.texts}>
                        <Link to="/quickContentPage" className={classes.link}>
                            Quick Links
                        </Link></Grid>
                </Box>
                {/* <Box className={classes.boxContent}>
                    <AppVideo />
                </Box> */}

            </Grid>
        </Grid>
    );
};

export default EditorPage;
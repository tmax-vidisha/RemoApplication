import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import announcement from "./../../Assets/Images/AnnouncementBig.svg";
import announcementH from "./../../Assets/Images/announcement-h.svg";
import birthdayH from "./../../Assets/Images/birthday-h.svg";
import birthday from "./../../Assets/Images/birthday.svg";
import CEO from "./../../Assets/Images/CEO.svg";
import CEOh from "./../../Assets/Images/CEO-h.svg";
import contentEditor from "./../../Assets/Images/contentEditorNew.svg";
import contentH from "./../../Assets/Images/content-editor-h.svg";
import events from "./../../Assets/Images/events.svg";
import eventH from "./../../Assets/Images/events-h.svg";
import gallery from "./../../Assets/Images/gallery.svg";
import galleryH from "./../../Assets/Images/gallery-h.svg";
import Groups from "./../../Assets/Images/Groups.svg";
import highlights from "./../../Assets/Images/highlights.svg";
import highlightH from "./../../Assets/Images/highlights-h.svg";
import logomaster from "./../../Assets/Images/logomaster.svg";
import logomasterH from "./../../Assets/Images/logomaster-h.svg";
import navigation from "./../../Assets/Images/navigation.svg";
import navigationH from "./../../Assets/Images/navigation-h.svg";
import news from "./../../Assets/Images/news.svg";
import newsH from "./../../Assets/Images/news-h.svg";
import policies from "./../../Assets/Images/policies.svg";
import policiesH from "./../../Assets/Images/policies-h.svg";
import heroBannerH from "./../../Assets/Images/hero-banner-h.svg";
import quickLinks from "./../../Assets/Images/quicklinksBig.svg";
import quickLinkH from "./../../Assets/Images/quicklinks-h.svg";
import department from "./../../Assets/Images/departmentNew.svg";
import departmentH from "./../../Assets/Images/department-h.svg";
import { Typography } from '@mui/material';
import { useStyles } from './Styles';
import QuickLinks from './../Quicklinks/index';
import AppVideo from './../CeoMessage/AppVideo';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { height } from 'react-material-ui-carousel/node_modules/@mui/system';


const EditorPage = () => {
    const classes = useStyles();
    let navigate = useNavigate();

    const itemsList = [
        {
            id: 0,
            label: 'Announcement',
            Icon: announcement,
            iconHover: announcementH,
            onClick: () => navigate("/tableAnnouncementPage"),
            to: '/',
        },
        {
            id: 1,
            label: 'Birthday',
            Icon: birthday,
            iconHover: birthdayH,
            onClick: () => navigate("/birthdayContentPage"),
            to: '/birthdayContentPage',
        },
        {
            id: 2,
            label: 'CEO',
            Icon: CEO ,
            iconHover: CEOh ,
            onClick: () => navigate("/ceoContentPage"),
            to: '/ceoContentPage',

        },
        {
            id: 3,
            label: 'Content Editor',
            Icon: contentEditor,
            iconHover: contentH,
            onClick: () => navigate("/contentEditorPage"),
            to: '/contentEditorPage',
        },
        {
            id: 4,
            label: 'Department',
            Icon: department,
            iconHover: departmentH,
            onClick: () => navigate("/departmentContentPage"),
            to: '/departmentContentPage',

        },
        {
            id: 5,
            label: 'Events',
            Icon:highlights,
            iconHover: highlightH,
            onClick: () => navigate("/eventsContentPage"),
            to: '/eventsContentPage',

        },
        {
            id: 6,
            label: 'Gallery',
            Icon:gallery,
            iconHover: highlightH,
            onClick: () => navigate("/highlightsContentPage"),
            to: '/highlightsContentPage',

        },
        {
            id: 6,
            label: 'Highlights',
            Icon:highlights,
            iconHover: highlightH,
            onClick: () => navigate("/highlightsContentPage"),
            to: '/highlightsContentPage',

        },
        {
            id: 6,
            label: "Quick Links",
            Icon: quickLinks,
            iconHover: quickLinkH,
            onClick: () => navigate("/quickContentPage"),
            to: '/quickContentPage',
        },
        {
            id: 7,
            label: "gallery",
            Icon: gallery,
            iconHover: galleryH,
            onClick: () => navigate("/quickLinks"),
            to: '/quickLinks',
        },
    ];

    return (
        <Grid>
            <Grid className={classes.mainPart}>
                <Box className={classes.boxContent}>
                    <Link to="/tableAnnouncementPage" className={classes.link}>
                        <img src={announcement} alt="announce" className={classes.topImg} />
                        <img src={announcementH} alt="announce" className={classes.topImgH} />
                        <p className={classes.texts}>
                            Announcement
                        </p>
                    </Link>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={birthday} alt="announce" />
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
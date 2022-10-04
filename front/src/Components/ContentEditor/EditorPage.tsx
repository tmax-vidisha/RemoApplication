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


const EditorPage = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Grid className={classes.mainPart}>
                <Box className={classes.boxContent}>
                    <img src={announcement} alt="announce" />
                    <Grid component="p" className={classes.texts}>Announcement </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={CEO} alt="announce" />
                    <Grid component="p" className={classes.texts}>CEO Message </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={contentEditor} alt="announce" />
                    <Grid component="p" className={classes.texts}>Content Editor </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={department} alt="announce" />
                    <Grid component="p" className={classes.texts}>Department </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={gallery} alt="announce" />
                    <Grid component="p" className={classes.texts}>Events </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={events} alt="announce" />
                    <Grid component="p" className={classes.texts}>Gallery</Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={Groups} alt="announce" />
                    <Grid component="p" className={classes.texts}>Hero Banner</Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={highlights} alt="announce" />
                    <Grid component="p" className={classes.texts}>Highlights </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={logomaster} alt="announce" />
                    <Grid component="p" className={classes.texts}>Logo Master</Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={navigation} alt="announce" />
                    <Grid component="p" className={classes.texts}>Navigation </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={news} alt="announce" />
                    <Grid component="p" className={classes.texts}>News</Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={policies} alt="announce" />
                    <Grid component="p" className={classes.texts}>Policies & Procedure </Grid>
                </Box>
                <Box className={classes.boxContent}>
                    <img src={quickLinks} alt="announce" />
                    <Grid component="p" className={classes.texts}>Quick Links</Grid>
                </Box>

            </Grid>
        </Grid>
    );
};

export default EditorPage;
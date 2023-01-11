import React from 'react';
import { Container, Box, Grid, Typography, Card, Link, Breadcrumbs } from '@mui/material';
import { Paper } from '@mui/material';
import IconText from './../Header/IconText';
import { useStyles } from './Styles';
import admin from "./../../Assets/Images/admin.svg";
import ITService from "./../../Assets/Images/IT-ervice.svg";
import sales from "./../../Assets/Images/sales.svg";
import vehicle from "./../../Assets/Images/vechicle-req.svg";
import add from "./../../Assets/Images/addmore.svg";
import { useLocation } from 'react-router-dom';
import birthday from "../../Assets/Images/girl.jpg";
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import QuickLinks from './../Quicklinks/index';

const QuicklinksPage = () => {

    const classes = useStyles();

    let location = useLocation();
    console.log(location.state);

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
                                    Quicklinks
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
                                        <Typography> Quicklinks  </Typography>
                                    </Link>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
                    <Grid item xs={12} style={{ backgroundColor: "white" }}>
                        <Grid className={classes.bigBox}>
                            <p className={classes.addedText}>Added Quicklinks</p>
                            <p className={classes.dragText}> you can drag and drop to change position</p>
                        </Grid>

                        <Grid item xs={12} className={classes.bigBox}>
                            <Box className={classes.boxIcon}>
                                <img src={ITService} alt="" />
                                <p className={classes.iconTitle}>IT Service </p>
                            </Box>
                            <Box className={classes.boxIcon}>
                                <img src={admin} alt="" />
                                <p className={classes.iconTitle}>Admin </p>
                            </Box>
                            <Box className={classes.boxIcon}>
                                <img src={vehicle} alt="" />
                                <p className={classes.iconTitle}>Vehicle Request</p>
                            </Box>
                            <Box className={classes.boxIcon} style={{ border: "1px solid gray" }}>
                                <img src={add} alt="" />
                                <p className={classes.iconTitle}>QuickLinks</p>
                            </Box>
                            <Box className={classes.boxIcon} style={{ border: "1px solid gray" }}>
                                <img src={add} alt="" />
                                <p className={classes.iconTitle}>QuickLinks</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

            </Container>
        </div>
    );
};

export default QuicklinksPage;
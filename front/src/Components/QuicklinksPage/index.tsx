import React from 'react';
import { Container, Box, Grid, Typography, Card, Link, Breadcrumbs, Icon, Button } from '@mui/material';
import { Paper } from '@mui/material';
import IconText from './../Header/IconText';
import { useStyles } from './Styles';
import admin from "./../../Assets/Images/admin.svg";
import ITService from "./../../Assets/Images/IT-ervice.svg";
import sales from "./../../Assets/Images/sales.svg";
import vehicle from "./../../Assets/Images/vechicle-req.svg";
import add from "./../../Assets/Images/addmore.svg";
import hub from "./../../Assets/Images/hub.svg";
import dragDrop from "./../../Assets/Images/dragdropIcon.svg";
import { useLocation } from 'react-router-dom';
import birthday from "../../Assets/Images/girl.jpg";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import QuickLinks from './../Quicklinks/index';
import { useState } from 'react';

const QuicklinksPage = () => {

    const classes = useStyles();

    let location = useLocation();
    console.log(location.state);

    const itemList = [
        {
            id: 0,
            icon: vehicle,
            text: 'Vehicle'
        },
        {
            id: 1,
            icon: ITService,
            text: 'IT Service'
        },
        {
            id: 2,
            icon: sales,
            text: 'Sales'
        },
        {
            id: 3,
            icon: hub,
            text: 'Hub'
        },
        {
            id: 4,
            icon: admin,
            text: 'Admin'
        },
        {
            id: 5,
            icon: add,
            text: 'Quicklnks'
        },

    ]
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(true)
    }

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
                            <div>
                                <p className={classes.addedText}>Added Quicklinks</p>
                            </div>
                            <div>
                                <p className={classes.dragText}><img src={dragDrop} alt="" />you can drag and drop to change position</p> 
                                {show ?
                                    <Button style={{color:"white",
                                    backgroundColor: "#009BAD",}}>Apply</Button> : <></>
                                }

                            </div>


                        </Grid>

                        <Grid className={classes.bigBox}>
                            {
                                itemList.map((item) => (
                                    <Box className={classes.boxIcon}>
                                        <img src={item.icon} alt="" onClick={handleClick} />
                                        <p className={classes.iconTitle}>{item.text} </p>
                                    </Box>
                                ))
                            }
                        </Grid>
                        {/* <Grid item xs={12} className={classes.bigBox}>

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
                        </Grid> */}
                    </Grid>
                    <Grid item xs={12} style={{ backgroundColor: "white" }}>
                        <Grid className={classes.bigBox} style={{ width: "40%" }}>
                            <p className={classes.addedText}>Quicklinks</p>
                            <p className={classes.dragText}>Select any 5 links to show in a Home page</p>
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
                            <Box className={classes.boxIcon} >
                                <img src={sales} alt="" />
                                <p className={classes.iconTitle}>Sales</p>
                            </Box>
                            <Box className={classes.boxIcon}>
                                <img src={hub} alt="" />
                                <p className={classes.iconTitle}>Hub</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

            </Container>
        </div>
    );
};

export default QuicklinksPage;
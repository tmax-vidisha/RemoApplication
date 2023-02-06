import React from 'react';
import { Grid, ListItem } from '@mui/material';
import { Box } from '@mui/material';
import admin from "./../../Assets/Images/admin.svg";
import ITService from "./../../Assets/Images/IT-ervice.svg";
import sales from "./../../Assets/Images/sales.svg";
import vehicle from "./../../Assets/Images/vechicle-req.svg";
import { useStyles } from './Styles';
import { Link } from 'react-router-dom';

const WorkspaceQuicklinks = () => {
    const classes = useStyles();
    return (
        <div>
           <div style={{ marginTop: "30px" }}>
                                <Grid style={{ textAlign: "left", fontSize: "15px", marginLeft: "15px" }}>
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
        </div>
    );
};

export default WorkspaceQuicklinks;
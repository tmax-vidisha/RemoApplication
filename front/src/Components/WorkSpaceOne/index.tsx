import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import LeftMenu from './LeftMenu';
import SearchPart from './SearchPart';
// import {MyFilesPage} from './MyFilesPage';
import SideBar from './SideBar';
import { useStyles } from './Styles';
import { Box } from '@mui/material';
import announcementIcon from "./../../Assets/Images/announcement.svg";
import { NavLink } from "react-router-dom";
import IconText from '../Header/IconText';
import MyFilePage from './../../Pages/WorkSpace/OneDrive/MyFilePage';
import AllLinks from './../Quicklinks/AllLinks';



const WorkSpaceOne = () => {
    const classes = useStyles();

    // const activeLink = style={{color:"red"}};
    // const normalLink = style={{color:"blue"}};
    return (
        <Grid>
            <Grid container item xs={10}>
                <IconText />
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ height: "50px", display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "20px" }} elevation={0}>

                    <Typography style={{ textAlign: "center", marginLeft: "30px", marginRight: "30px" }}><span> <img src={announcementIcon} alt="" /></span> <b>WHAT'S NEW</b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus   </Typography>

                </Paper>
            </Grid>
            <Box style={{ margin: "30px" }}>

                <Grid container item xs={12} className={classes.bigPaper}>
                    <Grid item xs={1} >
                        <SideBar />
                    </Grid>
                    <Grid item xs={1} style={{ marginRight: "20px" }}>
                        <LeftMenu />
                    </Grid>
                    <Grid item xs={9} style={{ paddingLeft: "8px" }}>
                       
                        <SearchPart />
  
                        <MyFilePage />
                        {/* <div>
                            {
                                SidebarData.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <NavLink to={item.path}
                                                // className={({ isActive }) =>
                                                //     isActive ? activeLink : normalLink}

                                            >
                                                <span>{item.icon}</span>
                                                <span>{item.title}</span>
                                            </NavLink>

                                        </div>
                                    )
                                })
                            }

                        </div> */}
                    </Grid>
                    {/* <Grid item xs={2}>
                       <AllLinks/>
                    </Grid> */}
                </Grid>
            </Box>

            {/* <Grid container spacing={2} item xs={12} >
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={9}>
                    
                </Grid>
            </Grid> */}
        </Grid>
    );
};

export default WorkSpaceOne;
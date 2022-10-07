import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import LeftMenu from './LeftMenu';
import SearchPart  from './SearchPart';
// import {MyFilesPage} from './MyFilesPage';
import SideBar from './SideBar';
import MyFilePage from './../../Pages/WorkSpace/OneDrive/MyFilePage';
import { useStyles } from './Styles';
import IconText from './../Header/IconText';
import { Box } from '@mui/material';
import announcementIcon from "./../../Assets/Images/announcement.svg";



const WorkSpaceOne = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Grid container item xs={10}>
                <IconText />
            </Grid>
            <Grid item xs={12}>
                <Paper style={{ height: "50px", display: "flex", justifyContent: "flex-start",  alignItems: "center", marginBottom: "20px" }} elevation={0}>

                    <Typography style={{textAlign:"center", marginLeft:"30px", marginRight:"30px"}}><span> <img src={announcementIcon} alt="" /></span> <b>WHAT'S NEW</b>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatibus   </Typography>

                </Paper>
            </Grid>
            <Box style={{ margin: "30px" }}>

                <Grid container item xs={12} className={classes.bigPaper}>
                    <Grid item xs={1} >
                        <SideBar />
                    </Grid>
                    <Grid item xs={2}>
                        <LeftMenu />
                    </Grid>
                    <Grid item xs={9} style={{ paddingLeft: "8px" }}>
                        <SearchPart />

                        <MyFilePage />
                    </Grid>
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
import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { useStyles } from './../Styles';
import SideBar from '../SideBar';
import LeftMenu from '../LeftMenu';
import SearchPart from '../SearchPart';
import announcementIcon from "../../../Assets/Images/announcement.svg";
// import StarredOne from './StarredOne';
import AllLinks from '../../Quicklinks/AllLinks';
import { StarredPage } from '../../../Pages';
import WhatsNew from '../../Header/WhatsNew';

const StarredFile = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid>
                {/* <Grid container item xs={10}>
                    <IconText /> 
                </Grid>*/}
                <Grid item xs={12}>
                    <WhatsNew/>
                </Grid>
                <Box style={{ margin: "20px" }}>

                    <Grid container item xs={12} className={classes.bigPaper}>
                        <Grid item xs={1} >
                            <SideBar />
                        </Grid>
                        <Grid item xs={1.5}>
                            <LeftMenu />
                        </Grid>
                        <Grid item xs={7} style={{ paddingLeft: "8px" }}>
                            <SearchPart />
                            <StarredPage />
                        </Grid>
                        <Grid item xs={2}>
                            <AllLinks />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};

export default StarredFile;
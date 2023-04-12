import React from 'react'
import { Grid, Typography, Paper, Box } from '@mui/material';
import SearchPart from '../SearchPart';
import SideBar from '../SideBar';
import LeftMenu from '../LeftMenu';
import announcementIcon from "../../../Assets/Images/announcement.svg";
import { useStyles } from './Styles';
import TrashFiles from './TrashFiles';
import AllLinks from '../../Quicklinks/AllLinks';
import {TrashedPage} from '../../../Pages';
import WhatsNew from '../../Header/WhatsNew';
const Trash = () => {
    const classes = useStyles();
    return (
        <Grid>
             {/*<Grid item xs={10}>
                <IconText /> 
            </Grid>*/}
            <Grid item xs={12}>
                    <WhatsNew />
                </Grid>
            <Box style={{ margin: "20px" }}>

                <Grid container item xs={12} className={classes.bigPaper}>
                    <Grid item xs={1} >
                        <SideBar />
                    </Grid>
                    <Grid item xs={1.5}>
                        <LeftMenu />
                    </Grid>
                    <Grid item xs={7} style={{ paddingLeft: "8px", }}>
                        <SearchPart />
                        <TrashedPage />
                    </Grid>
                    <Grid item xs={2}>
                            <AllLinks />
                        </Grid>
                </Grid>
            </Box>

        </Grid>
    )
}



export default Trash;
import { Grid, Typography, Paper, Box } from '@mui/material';
import React from 'react'
import SearchPart from '../SearchPart';
import SideBar from '../SideBar';
import LeftMenu from '../LeftMenu';
import announcementIcon from "../../../Assets/Images/announcement.svg";
import { useStyles } from './Styles';

import Documents from './Documents';
import AllLinks from '../../Quicklinks/AllLinks';
import WhatsNew from '../../Header/WhatsNew';
import { DocumentPage } from '../../../Pages';

const DocumentLibrary = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Grid item xs={12}>
                <WhatsNew />
            </Grid>
            <Box style={{ margin: "30px", }}>

                <Grid container item xs={12} className={classes.bigPaper}>
                    <Grid item xs={1} >
                        <SideBar />
                    </Grid>
                    <Grid item xs={1.5}>
                        <LeftMenu />
                    </Grid>
                    <Grid item xs={7} style={{ paddingLeft: "8px", }}>

                        <SearchPart />
                        {/* <Documents /> */}
                        <DocumentPage/>
                    </Grid>
                    <Grid item xs={2}>
                        <AllLinks />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}


export default DocumentLibrary;
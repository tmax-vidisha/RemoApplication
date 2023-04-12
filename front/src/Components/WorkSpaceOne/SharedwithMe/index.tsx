import React from 'react';
import { Grid, Box } from '@mui/material';
import IconText from '../../Header/IconText';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import SideBar from '../SideBar';
import LeftMenu from '../LeftMenu';
import SearchPart from '../SearchPart';
import { useStyles } from './Styles';
import announcementIcon from "../../../Assets/Images/announcement.svg";
// import  FileSharedPage from './FileSharedPage';
import SharedFilePage from '../../../Pages/WorkSpace/OneDrive/SharedFilePage';
import AllLinks from '../../Quicklinks/AllLinks';
import WhatsNew from '../../Header/WhatsNew';

const SharedWithMe = () => {
    const classes = useStyles();
    return (   
         <Grid>
        {/* <Grid container item xs={10}>
              <IconText />
         </Grid> */}
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
                     <SearchPart/>
                     <SharedFilePage />
                 </Grid>
                 <Grid item xs={2}>
                        <AllLinks />
                    </Grid>
             </Grid>
         </Box>
     </Grid>
    );
};

export default SharedWithMe;
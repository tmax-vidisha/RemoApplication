import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';
import LeftMenu from './../Components/WorkSpaceOne/LeftMenu';
import SearchPart from '../Components/WorkSpaceOne/SearchPart';
import MyFilePage from './../Pages/WorkSpace/OneDrive/MyFilePage';
import WhatsNew from '../Components/Header/WhatsNew';
import IconText from '../Components/Header/IconText';
import AllLinks from '../Components/Quicklinks/AllLinks';

const SecondWorkSpace = () => {
    const classes=useStyles();
    return (
        <div>
            <IconText/>
            <WhatsNew/>
            <Grid container item xs={12} className={classes.bigPaper}>
                <Grid item xs={1.5} style={{paddingLeft:"30px"}}>
                    <LeftMenu />
                </Grid>
                <Grid item xs={8} style={{ paddingLeft: "8px" }}>
                    <SearchPart />
                    <MyFilePage />
                </Grid>
                <Grid item xs={2}>
                       <AllLinks/>
                    </Grid>
            </Grid>
        </div>
    );
};

export default SecondWorkSpace;
import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';
import LeftMenu from './../Components/WorkSpaceOne/LeftMenu';
import SearchPart from '../Components/WorkSpaceOne/SearchPart';
import MyFilePage from './../Pages/WorkSpace/OneDrive/MyFilePage';
import WhatsNew from '../Components/Header/WhatsNew';
import IconText from '../Components/Header/IconText';

const SecondWorkSpace = () => {
    const classes=useStyles();
    return (
        <div>
            <IconText/>
            <WhatsNew/>
            <Grid container item xs={12} className={classes.bigPaper}>
                <Grid item xs={1} style={{marginLeft:"30px"}}>
                    <LeftMenu />
                </Grid>
                <Grid item xs={9} style={{ paddingLeft: "8px" }}>
                    <SearchPart />

                    <MyFilePage />
                </Grid>
            </Grid>
        </div>
    );
};

export default SecondWorkSpace;
import React from 'react';
import WhatsNew from './../Header/WhatsNew';
import { Grid ,Box } from '@mui/material';
import SideBar from './../WorkSpaceOne/SideBar';
import { useStyles } from './Styles';
// import CeoEditor from './CeoEditor';
import { CeoContentEditorPage } from '../../Pages';
const CeoContentPage = () => {
    const classes=useStyles()
    return (
        <div>
            <Grid>

                {/* <IconText /> */}
                <Grid item xs={12}>
                    <WhatsNew />
                </Grid>
                <Box style={{ margin: "30px"}}>

                    <Grid container item xs={12} className={classes.bigPaper}>
                        <Grid item xs={1} >
                            <SideBar />
                        </Grid>
                        <Grid item xs={11} >
                            <CeoContentEditorPage />
                        </Grid>
                       
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};

export default CeoContentPage;
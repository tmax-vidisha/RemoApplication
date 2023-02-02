import React from 'react';
import WhatsNew from './../Header/WhatsNew';
import { Grid ,Box } from '@mui/material';
import SideBar from './../WorkSpaceOne/SideBar';
import { useStyles } from './Styles';
import EditorContent from './EditorContent';
import { ContentEditorMasterPage } from '../../Pages';

const ContentEditorPage = () => {
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
                            <ContentEditorMasterPage />
                        </Grid>
                       
                    </Grid>
                </Box>
            </Grid>
        </div>
    );
};



export default ContentEditorPage;
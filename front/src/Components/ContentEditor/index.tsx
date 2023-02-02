import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import SideBar from './../WorkSpaceOne/SideBar';
import LeftPage from './LeftPage';
// import EditorPage from './EditorPage';
import { useStyles } from './Styles';
import { ContentEditorDashBoardPage } from '../../Pages';
const ContentEditor = () => {
    const classes=useStyles();
    return (
        <Grid>
            <Grid>
                <Box style={{ margin: "30px" }}>

                    <Grid container item xs={12} className={classes.bigPaper}>
                        <Grid item xs={1} >
                            <SideBar/>
                        </Grid>
                        <Grid item xs={2}>
                            <LeftPage/>
                        </Grid>
                        <Grid item xs={9} style={{ paddingLeft: "8px" }}>
                            {/* <SearchPart /> */}

                            <ContentEditorDashBoardPage/>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ContentEditor;
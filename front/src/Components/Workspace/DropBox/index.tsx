import React from 'react'
import  { useEffect, useState } from 'react';

import { Container, Grid, IconButton, Paper, Typography, } from '@mui/material';
import { useStyles } from './Styles';
import { initializeFileTypeIcons, } from '@fluentui/react-file-type-icons';
import { useGetRecentFilesQuery } from '../../../services/APIs'
import Box from '@mui/material/Box';
import { AuthenticatedTemplate } from '@azure/msal-react';
import CachedIcon from '@mui/icons-material/Cached';
import WorkspaceNavigation from '../WorkspaceNavigation';
var moment = require('moment-timezone');

initializeFileTypeIcons(undefined);
const WPDropBox = () => {
    const { data, error, isLoading } =   useGetRecentFilesQuery('')
    const classes = useStyles();
  return (
    <AuthenticatedTemplate>
            <Container className={classes.root}>
                <Paper elevation={0}>
                    <Grid container className={classes.bannerTop} >
                        <Grid item xs={1}>
                            <WorkspaceNavigation />
                        </Grid>
                        <Grid item xs={11}>

                            <Grid container className={classes.workspaceHeader}>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="h3"
                                        className={classes.workspaceTopHeader}
                                        component="h3">
                                        Drop Box
                                        <Typography variant="caption" component="span">
                                            (35 Items)
                                        </Typography>
                                    </Typography>
                                </Grid>
                                <Box sx={{ flexGrow: 1 }}></Box>
                                <Grid item xs={1}>
                                    <IconButton color="primary"
                                        sx={{ padding: '0', float: 'right' }}>
                                        <CachedIcon sx={{ color: '#333333', opacity: 0.5 }} />
                                    </IconButton>
                                </Grid>
                            </Grid>

                            <Box>
                                <Grid container>
                                Drop Box
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </AuthenticatedTemplate>
  )
}

export default WPDropBox
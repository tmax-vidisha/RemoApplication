import React, { useEffect, useState } from 'react';
import { CardContent, Container, Grid, IconButton, Link, List, ListItem, ListItemText, Paper, Typography, } from '@mui/material';
import { useStyles } from './Styles';
import Box from '@mui/material/Box';
import CachedIcon from '@mui/icons-material/Cached';
// import { AccessTime24Filled } from "@fluentui/react-icons";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useGetRecentFilesQuery } from '../../../services/APIs'
import WorkspaceNavigation from '../WorkspaceNavigation';
import AllFiles from './AllFiles';



var moment = require('moment-timezone');
const WPOneDrive = () => {
    const { data, error, isLoading } = useGetRecentFilesQuery('')
    console.log(data, 'uuuuuu')
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

                            <Grid container spacing={2} className={classes.workspaceHeader}>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="h3"
                                        className={classes.workspaceTopHeader}
                                        component="h3">
                                        OneDrive
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
                                    <Grid item xs={12}>
                                        <CardContent sx={{ pb: '4px!important' }}>
                                            <Typography

                                                variant="h6"
                                                component="h6"
                                                color="secondary"
                                                className={classes.rectHeader}
                                            >
                                                OneDrive
                                            </Typography>
                                            <AllFiles/>
                                            <List className={classes.topList}>
                                                {data &&
                                                    data?.map((item: any, index: any) => {
                                                        let IconFileType;
                                                        const { remoteItem = {} } = item;
                                                        var createdDate = moment(
                                                            remoteItem?.lastModifiedDateTime
                                                        ).fromNow();
                                                        let fileName = remoteItem?.name;

                                                        let fileExt = fileName?.substr(fileName?.lastIndexOf('.') + 1);
                                                        let fileUrl = remoteItem?.webUrl;

                                                        // if (IconFileType != 'undefined') {
                                                        //     if (fileExt === 'docx') {
                                                        //         IconFileType = (
                                                        //             <Icon
                                                        //                 {...getFileTypeIconProps({
                                                        //                     extension: 'docx',
                                                        //                     size: 40,
                                                        //                     imageFileType: 'png',
                                                        //                 })}
                                                        //             />
                                                        //         );
                                                        //     } else if (fileExt === 'pdf') {
                                                        //         IconFileType = (
                                                        //             <Icon
                                                        //                 {...getFileTypeIconProps({
                                                        //                     extension: 'pdf',
                                                        //                     size: 40,
                                                        //                     imageFileType: 'png',
                                                        //                 })}
                                                        //             />
                                                        //         );
                                                        //     } else if (fileExt === 'txt') {
                                                        //         IconFileType = (
                                                        //             <Icon
                                                        //                 {...getFileTypeIconProps({
                                                        //                     extension: 'txt',
                                                        //                     size: 40,
                                                        //                     imageFileType: 'png',
                                                        //                 })}
                                                        //             />
                                                        //         );
                                                        //     } else if (fileExt === 'xlsx') {
                                                        //         IconFileType = (
                                                        //             <Icon
                                                        //                 {...getFileTypeIconProps({
                                                        //                     extension: 'xlsx',
                                                        //                     size: 40,
                                                        //                     imageFileType: 'png',
                                                        //                 })}
                                                        //             />
                                                        //         );
                                                        //     } else if (fileExt === 'csv') {
                                                        //         IconFileType = (
                                                        //             <Icon
                                                        //                 {...getFileTypeIconProps({
                                                        //                     extension: 'csv',
                                                        //                     size: 40,
                                                        //                     imageFileType: 'png',
                                                        //                 })}
                                                        //             />
                                                        //         );
                                                        //     } else if (fileExt === 'zip') {
                                                        //         IconFileType = (
                                                        //             <Icon
                                                        //                 {...getFileTypeIconProps({
                                                        //                     extension: 'zip',
                                                        //                     size: 40,
                                                        //                     imageFileType: 'png',
                                                        //                 })}
                                                        //             />
                                                        //         );
                                                        //     } else if (fileExt === 'one') {
                                                        //         IconFileType = (
                                                        //             <Icon
                                                        //                 {...getFileTypeIconProps({
                                                        //                     extension: 'one',
                                                        //                     size: 40,
                                                        //                     imageFileType: 'png',
                                                        //                 })}
                                                        //             />
                                                        //         );
                                                        //     } else if (fileExt === 'png') {
                                                        //         IconFileType = (
                                                        //             <Icon
                                                        //                 {...getFileTypeIconProps({
                                                        //                     extension: 'png',
                                                        //                     size: 40,
                                                        //                     imageFileType: 'png',
                                                        //                 })}
                                                        //             />
                                                        //         );
                                                        //     }
                                                        // }
                                                        return (
                                                            <>
                                                                <Box>
                                                                    <Grid>
                                                                        <Grid item xs={10}>
                                                                            <ListItem
                                                                                divider={true}
                                                                                className={classes.recLinksItem}
                                                                            >
                                                                                {/* <AccessTime24Filled /> */}
                                                                                <ListItemText>
                                                                                    <Link
                                                                                        href={`${fileUrl}`}
                                                                                        underline="none"
                                                                                        target="_blank"
                                                                                    >
                                                                                        <div className={`clearfix ${classes.fileName}`}>
                                                                                            <div className={classes.recentFileIcon}>
                                                                                                {/* {IconFileType} */}
                                                                                            </div>
                                                                                            <div className={classes.recentFileDesc}>
                                                                                                <span className={classes.fileNameLink}>
                                                                                                    {fileName}
                                                                                                </span>

                                                                                                <span className={classes.createdTime}>
                                                                                                    {createdDate}
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </ListItemText>
                                                                            </ListItem>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Box>
                                                            </>
                                                        );
                                                    })}
                                            </List>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </AuthenticatedTemplate>
    )
}

export default WPOneDrive
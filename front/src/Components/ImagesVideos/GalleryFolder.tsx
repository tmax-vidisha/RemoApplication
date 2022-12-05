import React from 'react';
import { Container, Paper, Card, Typography, Link, Grid, Box } from '@mui/material';
import IconText from '../Header/IconText';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useStyles } from './Styles';
import { useState } from 'react';
import PluginImgVideo from './PluginImgVideo';
// import SimpleReactLightbox from 'simple-react-lightbox';

const GalleryFolder = () => {

    const classes = useStyles();
    const [show, setShow] = useState<boolean>(false);
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
        <div>

            <Container className={classes.contentEditorWidth}>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }}>
                    <IconText />
                </Paper>
                <Card className={classes.cardHeight} elevation={0}>
                    <Paper className={classes.innerBackground}>
                        <div className={classes.innerBannerOverlay}></div>
                        <Paper className={classes.contentHeader} elevation={0}>
                            <Typography className={classes.breadcrumbs} variant="h6">

                                <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
                                    News
                                </Link>
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                <Breadcrumbs
                                    className={classes.breadcrumbs}
                                    separator={<NavigateNextIcon fontSize="small" />}
                                    aria-label="breadcrumb"
                                >
                                    <Link className={classes.breadLinks} color="inherit" href="/">
                                        Home
                                    </Link>
                                    <Link className={classes.breadLinks} color="inherit" href="/GalleryFolder">
                                        <Typography>Gallery Folders </Typography>
                                    </Link>
                                    <Typography>Images </Typography>
                                    <Typography>Videos </Typography>

                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
                    <Grid item xs={12} style={{ backgroundColor: "white" }}>
                        <Box style={{ margin: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}>

                            <p style={{ color: "#39c8cf", }} onClick={onClick}>Images</p>
                            {showResults ? <p>Hello</p> : null

                            }
                            <p style={{ color: "#39c8cf", }}>Videos</p>
                        </Box>

                    </Grid>
                </Paper>
                <Paper>
                   
                        <PluginImgVideo />
                   
                </Paper>
            </Container>
        </div>
    );
};

export default GalleryFolder;
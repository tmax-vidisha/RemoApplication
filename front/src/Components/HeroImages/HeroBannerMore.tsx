import React from 'react';
import IconText from '../Header/IconText';
import { Container, Card, Paper, Typography, Link, Breadcrumbs, Grid, CardMedia } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useStyles } from './Styles';
import {useLocation } from 'react-router-dom';
//  import carVideo from '../../Assets/videos/Cars.mp4';
// import { VideoCard } from 'material-ui-player'
var moment = require("moment-timezone");
const HeroBannerMore = () => {
    const classes = useStyles();
    let location = useLocation();
    console.log(location.state);
    //@ts-ignore
    const { folderData= {},Title,Description,Modified } = location.state;

    console.log(folderData,Title,Description,Modified,'hrtret5ey   r6')
    return (
        <div>
            <IconText />
            <Container className={classes.contentEditorWidth}>
                <Card className={classes.cardHeight} elevation={0}>
                    <Paper className={classes.innerBackground}>
                        <div className={classes.innerBannerOverlay}></div>
                        <Paper className={classes.contentHeader} elevation={0}>
                            <Typography className={classes.breadcrumbs} variant="h6">

                                <Link className={classes.breadLinks} color="inherit" href="/">
                                    Banner
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
                                    <Link className={classes.breadLinks} color="inherit" href="/">
                                        <Typography>BannerRead More </Typography>
                                    </Link>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
                    <Grid item xs={12} style={{ backgroundColor: "white" }}>
                        {/* <video src={carVideo} width="320" height="240" controls /> */}
                        {/* <CardMedia
                            component="video"
                            height="140"
                            image="../../Assets/videos/Cars.mp4"
                            title="Contemplative Reptile"
                        /> */}
                        <Grid item xs={12}>
                            <Card
                                raised
                                sx={{
                                    width: '100%',
                                    margin: "0 auto",
                                    padding: "0.1em",
                                }}
                            >
                                <CardMedia
                                    component="video"
                                    autoPlay
                                    controls
                                    src={folderData}

                                   style={{width:'1100px', height:"200px"}}

                                    width="840"
                                    height="300"

                                />
                            </Card>
                        </Grid>

                        {/* <Card>
                            <VideoCard src={'https://youtu.be/nvzkHGNdtfk'}   />
                        </Card> */}
                        <Grid item xs={12} style={{ margin: "30px" }}>
                            <Typography style={{ color: "#606C74", textAlign: "left" }}>{Title}</Typography>
                            <Typography style={{ color: "#1BAAB5", textAlign: "left" }}>{moment(Modified).format('DD-MM-YYYY')}</Typography>
                            <Typography style={{color: "#606C74",}}>
                               {Description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>

            </Container>
        </div>
    );
};

export default HeroBannerMore;
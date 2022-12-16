import React from 'react';
import IconText from '../Header/IconText';
import { Container, Card, Paper, Typography, Link, Breadcrumbs, Grid, CardMedia } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useStyles } from './Styles';
//  import carVideo from '../../Assets/videos/Cars.mp4';
import { VideoCard } from 'material-ui-player'

const HeroBannerMore = () => {
    const classes = useStyles();

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
                                    maxWidth: 800,
                                    margin: "0 auto",
                                    padding: "0.1em",
                                }}
                            >
                                <CardMedia
                                    component="video"
                                    autoPlay
                                    controls
                                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                    width="840"
                                    height="300"
                                />
                            </Card>
                        </Grid>

                        {/* <Card>
                            <VideoCard src={'https://youtu.be/nvzkHGNdtfk'}   />
                        </Card> */}
                        <Grid item xs={12} style={{ margin: "30px" }}>
                            <Typography style={{ color: "#606C74", textAlign: "left" }}>Technology thats designed  to help us all live</Typography>
                            <Typography style={{ color: "#1BAAB5", textAlign: "left" }}>Today</Typography>
                            <Typography style={{color: "#606C74",}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>

            </Container>
        </div>
    );
};

export default HeroBannerMore;
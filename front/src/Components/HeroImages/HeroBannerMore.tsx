import React from 'react';
import IconText from '../Header/IconText';
import { Container, Card, Paper, Typography, Link, Breadcrumbs, Grid, CardMedia } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useStyles } from './Styles';
//  import carVideo from '../../Assets/videos/Cars.mp4';

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
                        <CardMedia
                            component="video"
                            height="140"
                            image="../../Assets/videos/Cars.mp4"
                            title="Contemplative Reptile"
                        />
                    </Grid>
                </Paper>

            </Container>
        </div>
    );
};

export default HeroBannerMore;
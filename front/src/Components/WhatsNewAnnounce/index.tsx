import React from 'react';
import {
    Breadcrumbs,
    Card,
    Container,
    Grid,
    Paper,
    Box,
    TextField,
    Typography,
} from "@mui/material";
import { useStyles } from "./Styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from 'react-router-dom';
import IconText from '../Header/IconText';
import ship1 from "../../Assets/Images/ship1.png"
import ship2 from "../../Assets/Images/ship2.png"
import ship3 from "../../Assets/Images/ship3.png"
import ship4 from "../../Assets/Images/ship4.png"


const itemLists = [
    {
        image: ship1,
        date: "Dec 26, 2022",
        title: "Adnoc announce $548m contract for gas line at lower Zakum field",
    },
    {
        image: ship2,
        date: "Nov 26, 2022",
        title: "Adnoc announce $548m contract for gas line at lower Zakum field",
    },
    {
        image: ship3,
        date: "Jan 26, 2023",
        title: "Adnoc announce $548m contract for gas line at lower Zakum field",
    },
    {
        image: ship4,
        date: "Feb 2, 2023",
        title: "Adnoc announce $548m contract for gas line at lower Zakum field",
    },
]


const WhatsNewAnnounce = () => {
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
                                Announcements
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                <Breadcrumbs
                                    className={classes.breadcrumbs}
                                    separator={<NavigateNextIcon fontSize="small" />}
                                    aria-label="breadcrumb"
                                >
                                    <Link to="/" className={classes.breadLinks} >
                                        Home
                                    </Link>
                                    <Typography className={classes.breadLinks}>All Announcements</Typography>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper style={{ marginTop: "30px" }}>
                    <Grid>
                        <Grid className={classes.anTitle}>Announcements</Grid>

                        <Grid className={classes.bigContent}>
                            {
                                itemLists.map((item) => (
                                    <Box className={classes.boxContent}>
                                        <img src={item.image} alt="img" style={{width:"250px"}} />
                                        <p className={classes.itemDate}>{item.date}</p>
                                        <p className={classes.itemDate}>{item.title}</p>
                                    </Box>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default WhatsNewAnnounce;

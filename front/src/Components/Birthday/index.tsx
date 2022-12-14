import React from 'react';
import { Container, Box, Grid, Typography, Card, Link, Breadcrumbs } from '@mui/material';
import { Paper } from '@mui/material';
import IconText from './../Header/IconText';
import { useStyles } from './Styles';
import birthdayIcon from '../../Assets/Images/birthday.jpg'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import birthday from "../../Assets/Images/girl.jpg";
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Birthday = (props:any)=> {
    const classes = useStyles();
    let location = useLocation();

    console.log(location.state);

    //@ts-ignore
    const { data, error, isLoading,onGetItem ,ItemData} =  props;
    const { folderData = [] } = location.state;
    console.log(folderData, 'birthday data');

    return (
        <div>
            <Paper elevation={0} sx={{ mb: 2 }}>
                <IconText />
            </Paper>
            <Container className={classes.contentEditorWidth}>
                <Paper>
                    <Card className={classes.cardHeight} elevation={0}>
                        <Paper className={classes.innerBackground}>
                            <div className={classes.innerBannerOverlay}></div>
                            <Paper className={classes.contentHeader} elevation={0}>
                                <Typography className={classes.breadcrumbs} variant="h6">
                                    Celebrating his Birthday on Today
                                    {/* <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
                                    News
                                </Link> */}
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
                                        <Typography>
                                            <Link className={classes.breadLinks} color="inherit" href="/birthday">
                                                Banner Read More
                                            </Link></Typography>

                                    </Breadcrumbs>
                                </Typography>
                            </Paper>

                        </Paper>
                        <img src={birthday} alt="icon" style={{ position: "sticky", width: "100px", borderRadius: "50%", marginTop: "-54px" }} />

                    </Card>
                    <Grid>
                        <Typography style={{ fontSize: '25px', fontWeight: "700", color: "rgb(2 51 73)" }}> Ayesha Siddiqa</Typography>
                        <Typography> College Student</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "left", margin: "30px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Grid>
                    <Grid>
                        <Button style={{ border: "1px solid blue" }}> Let wish him</Button>
                    </Grid>
                </Paper>
                <Paper>
                    <Box>
                        {folderData?.response &&
                             folderData?.response?.map((item: any, index: any) => {
                                const { fields = {} } = item;
                                var EmpTitle = fields?.Title;
                                var empName = fields?.Name;
                                var DeptVal = fields?.Dept;
                                var img = fields?.EmpImg

                                return (
                                    <div>
                                    <img src={item.fields?.EmpImg} alt="" />
                                    <p>{EmpTitle}</p>
                                    </div>

                                );
                            })}
                        
                    </Box> 
                </Paper>
            </Container>
        </div>
    );
};

export default Birthday;
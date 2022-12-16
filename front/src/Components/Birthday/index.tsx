import React from 'react';
import { Container, Box, Grid, Typography, Card, Link, Breadcrumbs } from '@mui/material';
import { Paper } from '@mui/material';
import IconText from './../Header/IconText';
import { useStyles } from './Styles';
import birthdayIcon from '../../Assets/Images/birthday.jpg'
import loveIcon from '../../Assets/Images/love.svg'
import { useLocation } from 'react-router-dom';
import birthday from "../../Assets/Images/girl.jpg";
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


// const Birthday = (props:any)=> {
//     const classes = useStyles();
//     let location = useLocation();

//     console.log(location.state);

//     //@ts-ignore
//     const { data, error, isLoading,onGetItem ,ItemData} =  props;
//     const { folderData = [] } = location.state;
//     console.log(folderData, 'birthday data');

// import { Navigate, useLocation, useNavigate } from 'react-router-dom';
const Birthday = () => {

    const classes = useStyles();

    let location = useLocation();
  console.log(location.state);
  //@ts-ignore
  const { folderData = [] } = location.state;
 console.log(folderData?.response,'yyjyjyjyjyyjdata')


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
                        <img src={folderData?.response?.fields.EmpImg} alt="icon" style={{ position: "sticky", width: "100px", borderRadius: "50%", marginTop: "-54px" }} />

                    </Card>
                    <Grid>
                        <Typography style={{ fontSize: '25px', fontWeight: "700", color: "rgb(2 51 73)" }}> {folderData?.response?.fields.Name}</Typography>
                        <Typography> {folderData?.response?.fields.Dept}</Typography>
                    </Grid>
                    <Grid style={{ textAlign: "left", margin: "30px" }}>
                        {folderData?.response?.fields.Description}
                    </Grid>
                    <Grid>                        
                        <Button style={{ border: "1px solid #1BAAB5", color: "#1BAAB5", }}>
                        <img src ={loveIcon} alt="love" style={{width:"15px", marginRight:"10px"}}/>
                             Let wish him</Button>
                    </Grid>
                </Paper>
                <Paper>

                    <Grid>

                    </Grid>

                    {/* <Box>
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
                        
                    </Box>  */}
                </Paper>
            </Container>
        </div>
    );
};

export default Birthday;
import React, { useCallback } from 'react';
import { Container, Paper, Card, Typography, Link, Breadcrumbs, Grid, Box, Stack, createMuiTheme } from '@mui/material';
import { useStyles } from './Styles';
import IconText from '../Header/IconText';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
// import ruLocale from "date-fns/locale/ru";
import { useState } from 'react';
import { enIN } from 'date-fns/locale';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import meeting from "../../Assets/Images/meeting.jpg";
import { List, ListItem } from '@mui/material';
import CalendarEvent from './CalendarEvent';
import { Calendar } from 'react-calendar';
// import "moment-timezone"
var moment = require("moment-timezone");

const lists = [
    {
        image: <img src={meeting} alt="image" style={{ width: "100px" }} />,
        title: "General Board Meeting",
        time: "10:00 PM",
        details: " We Launch matter 2021 with a virtual meeting ceremony this year. Our CEO and Chairman, Tariq -al- Ghusain, delivered a welcome  address via zoom to the participating student"
    },
    {
        image: <img src={meeting} alt="image" style={{ width: "100px" }} />,
        title: "Review Meeting with corporate manager",
        time: "12:00 PM",
        details: " We Launch matter 2021 with a virtual meeting ceremony this year. Our CEO and Chairman, Tariq -al- Ghusain, delivered a welcome  address via zoom to the participating student"
    },
    {
        image: <img src={meeting} alt="image" style={{ width: "100px" }} />,
        title: "Meeting with corporate manager",
        time: "17:00 PM",
        details: " We Launch matter 2021 with a virtual meeting ceremony this year. Our CEO and Chairman, Tariq -al- Ghusain, delivered a welcome  address via zoom to the participating student"
    },

]
interface IFolderProps {
    data: any,
    error: any,
    isLoading: any
    onClick: (Date: any) => void;
    // onDownload?: (id: string) => void;
    // onDelete?: (id: string) => void;
    // onRename?: (id: string, name: string) => void;
    // onShare?: (id: string) => void;
}

// const ViewAllEvents = () => {
const ViewAllEvents: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const { data, error, isLoading, onClick } = props
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [value, setValue] = useState();
    const handleDateChange = (date: any) => {
        setSelectedDate(date);
        // console.log("Date is: ", date);
        const localDate = new Date(date).toLocaleDateString();

        console.log(localDate);
    };

    const color = "#00b8e6";

    // const customTheme = createMuiTheme({
    //     palette: {
    //         primary: {
    //             main: '#00b8e6',
    //             light: '#00b8e6',
    //             dark: ' #00b8e6'
    //         },
    //         secondary: {
    //             main: '#00b8e6',
    //         },
    //     },
    // })
    const onChange = useCallback(
        (value: any) => {
          setValue(value);
        //   const localDate = new Date(value).toLocaleDateString();
        //   console.log(localDate)
          onClick?.(value)
        },
        [setValue],
      );
    console.log(data?.response)

    return (
        <div>

            <Container className={classes.contentEditorWidth}>
              

            <IconText/>
             <Container className={classes.contentEditorWidth}>

                <Card className={classes.cardHeight} elevation={0}>
               
                    <Paper className={classes.innerBackground}>
                        <div className={classes.innerBannerOverlay}></div>
                        <Paper className={classes.contentHeader} elevation={0}>
                            <Typography className={classes.breadcrumbs} variant="h6">
                                <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
                                    Events
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
                                    <Typography>
                                        <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
                                            Events
                                        </Link></Typography>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                    
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
                    <Grid>
                        <Stack direction="row" spacing={2} style={{ backgroundColor: "white" }}>
                            <Grid item xs={6} style={{ padding: "30px" }}>
                                <Box>

                                    {/* <ThemeProvider theme={customTheme}>

                                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enIN}>
                                            <Paper style={{ overflow: "hidden" }}>
                                                <Calendar date={selectedDate} onChange={handleDateChange}
                                                />
                                            </Paper>
                                        </MuiPickersUtilsProvider>

                                    </ThemeProvider> */}
                                    {/* <CalendarEvent onClick={onClick}/> */}
                                    <div>
                                        <Box>

                                           
                                            <Calendar
                                                // className={classes.border}
                                                onChange={onChange}
                                                value={value}
                                            />
                                        </Box>
                                    </div>

                                </Box>
                            </Grid>
                            <Grid item xs={6}>


                                {/* <List style={{border:"1px solid #e6e6e6", margin:"20px"}}>
                                <Grid style={{borderBottom:"1px solid #e6e6e6", color:'#4ddbff'}}> 9th July</Grid>
                                    {
                                        data?.response &&
                                        data?.response?.map((list:any) => (
                                            <ListItem style={{ width:"600px", borderBottom:"1px solid #e6e6e6"}}>
                                                <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <Grid style={{marginRight:"30px"}}> {list.image}</Grid>
                                                    <Grid>
                                                    <Typography style={{fontSize:"12px", color:"#666666"}}>{moment(list.fields?.EventDate).format('HH:mm A')}</Typography>
                                                    <Typography style={{fontSize:"15px", color:"#666666", fontWeight:600}}> {list.fields?.Title}</Typography>
                                                    <Typography style={{fontSize:"12px", color:"#666666"}}>{list.fields?.Description} </Typography>
                                                </Grid>
                                                </Grid>
                                            </ListItem>
                                        ))
                                    }
                                   
                                </List> */}
                                {data?.response?.length > 0 ?

                                    (
                                        <List style={{ border: "1px solid #e6e6e6", margin: "20px" }}>
                                            <Grid style={{ borderBottom: "1px solid #e6e6e6", color: '#4ddbff' }}> {moment(value).format("DD")} { moment(value).format("MMM")}</Grid>
                                            {
                                                data?.response &&
                                                data?.response?.map((list: any) => {
                                                    // const { fields = {} } = item;

                                                    // let eventTitle = fields.Title;
                                                    let evenDesc = list.fields?.Description;
                                                    let myEvents = evenDesc.replace(/<[^>]+>/g, '')
                                                    console.log(myEvents)
                                                    // let eventMonth = moment(fields?.EventDate).format("MMM");
                                                    // let eventYear = moment(fields?.EventDate).format("YYYY");
                                                    return (
                                                        <ListItem style={{ width: "600px", borderBottom: "1px solid #e6e6e6" }}>
                                                            <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                                                                <Grid style={{ marginRight: "30px" }}> {list.image}</Grid>
                                                                <Grid>
                                                                    <Typography style={{ fontSize: "12px", color: "#666666" }}>{moment(list.fields?.EventDate).format('HH:mm A')}</Typography>
                                                                    <Typography style={{ fontSize: "15px", color: "#666666", fontWeight: 600 }}> {list.fields?.Title}</Typography>
                                                                    <Typography style={{ fontSize: "12px", color: "#666666" }}>{myEvents} </Typography>
                                                                </Grid>
                                                            </Grid>


                                                        </ListItem>
                                                    )
                                                })
                                            }

                                        </List>
                                    ) : (
                                        <List style={{ border: "1px solid #e6e6e6", margin: "20px" }}>
                                            <Grid style={{ borderBottom: "1px solid #e6e6e6", color: '#4ddbff' }}>{moment(value).format("DD")} { moment(value).format("MMM")} </Grid>
                                            <Typography>No Events</Typography>
                                        </List>

                                   )}

                            </Grid>

                        </Stack>

                    </Grid >
                </Paper>

            </Container>
        </div>
    );
};

export default ViewAllEvents;
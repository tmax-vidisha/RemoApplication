import React, { useCallback, useState } from 'react';
import { Grid, ListItem } from '@mui/material';
import { Box } from '@mui/material';
import admin from "./../../Assets/Images/admin.svg";
import ITService from "./../../Assets/Images/IT-ervice.svg";
import sales from "./../../Assets/Images/sales.svg";
import vehicle from "./../../Assets/Images/vechicle-req.svg";
import { Calendar } from 'react-calendar';
// import gallery from "./../../Assets/Images/gallery.svg";
// import Groups from "./../../Assets/Images/Groups.svg";
// import highlights from "./../../Assets/Images/highlights.svg";
// import logomaster from "./../../Assets/Images/logomaster.svg";
// import navigation from "./../../Assets/Images/navigation.svg";
// import news from "./../../Assets/Images/news.svg";
// import policies from "./../../Assets/Images/policies.svg";
// import quickLinks from "./../../Assets/Images/quicklinksBig.svg";
// import department from "./../../Assets/Images/departmentNew.svg";
import { Typography, Button, List, ListItemAvatar, ListItemText } from '@mui/material';
import { useStyles } from './Styles';
import QuickLinks from './../Quicklinks/index';
import AppVideo from './../CeoMessage/AppVideo';
import { Link } from 'react-router-dom';
import LinkOffSharpIcon from '@mui/icons-material/LinkOffSharp';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { MeetingsPage } from '../../Pages';
import WorkspaceQuicklinks from './WorkspaceQuicklinks';




const AllLinks = () => {
    const classes = useStyles();
    const [show, setShow] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const [isShown, setIsShown] = useState(false);

    const handleClickOn = (event: any) => {
        // setIsShown(current => !current)
        setIsShown(true)
    }
    const [value, setValue] = useState();

    const onChange = useCallback(
        (value: any) => {
            setValue(value);
        },
        [setValue],
    );
    const [showResults, setShowResults] = React.useState(false)
    const onClickShowResults = () =>{ 
        setShowResults(true)
    };
    return (
        <Grid >
            <Grid className={classes.quickLinkDiv}>
                {show ?
                    <div>
                        <Button className={classes.linkBtn} style={{ textTransform: "capitalize", height: "45px", width: "70%" }} onClick={() => setShow(!show)}>
                            <Grid onClick={handleClickOn} className={classes.quick}>
                                <Grid><LinkOffSharpIcon /></Grid>
                                <Grid style={{ textAlign: "right", marginLeft: "30px" }}>Quick Links</Grid>
                            </Grid>
                        </Button>
                        {isShown && (
                           <WorkspaceQuicklinks/>
                        )}
                    </div>
                    :
                    <div>
                        <Button onClick={() => setShow(!show)} style={{ color: "gray", textTransform: "capitalize", backgroundColor: " #e6ffe6", border: "5px solid white", maxHeight: "55px", width: "auto" }}>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <CalendarMonthOutlinedIcon />
                                    </ListItemAvatar>
                                    <ListItemText primary="Daily Standup Meeting..." secondary="Tomorrow 10 AM" className={classes.ListItemText} />
                                </ListItem>
                            </List>

                        </Button>
                        {
                            isShown &&
                            <div>
                                <Grid style={{ display: "flex", justifyContent: "flex-start" }}>
                                    <Grid style={{ textTransform: "capitalize", marginRight: "20px" }} className={classes.todo}  >
                                        <div onClick={onClickShowResults}> Calendar </div>
                                    </Grid>
                                    {/* <Grid style={{ textTransform: "capitalize" }} className={classes.todo} >
                                        <div onClick={() => setShow(!show)}>To do </div>
                                    </Grid> */}
                                </Grid>

                                {showResults ?
                                    <div>
                                        <Calendar onChange={onChange} value={value} className={classes.calendar} />
                                    </div> : null}

                                <MeetingsPage />
                                <WorkspaceQuicklinks/>
                            </div>

                        }
                    </div>
                }
            </Grid>

        </Grid>
    );
};

export default AllLinks;
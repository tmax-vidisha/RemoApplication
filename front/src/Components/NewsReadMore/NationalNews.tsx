import React from 'react';
import { Grid, Stack, Box, Typography } from '@mui/material';
import rashid from '../../Assets/Images/rashid.jpg';
import scotish from '../../Assets/Images/scotish.jpg';
import recedent from '../../Assets/Images/recedent.jpg';
import flight from '../../Assets/Images/flight.jpg';
import prince from '../../Assets/Images/prince.jpg';
import clock from '../../Assets/Images/clock.svg';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';

const post = [
    {
        id: 1,
        image: <img src={scotish} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }}  />,
        name: "Scotish Oil worker home in Dubai after 11- months iraq ordeal",
        title: "science",
        time: "Few Mins ago"
    },
    {
        id: 2,
        image: <img src={recedent} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />,
        name: "Fighting for water bottles, Dubai residents reveal uncomfortable quarantine in UK ",
        title: "science",
        time: "Few Mins ago"
    },
    {
        id: 3,
        image: <img src={flight} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />,
        name: "Vatican honour for Crown Prince fills country with pride, Sheikha Fatima says",
        title: "Health",
        time: "Few Mins ago"
    },
    {
        id: 4,
        image: <img src={prince} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />,
        name: "PepsiCo unveils Expo 2020 Dubai pavilions with once in a lifetime experiences",
        title: "Health",
        time: "Few Mins ago"
    },

]



const NationalNews = () => {
    
    return (
        <div>
            <Grid>
                <Stack direction="row" spacing={2} style={{ backgroundColor: "white" }}>
                    <Grid style={{ borderRight: "1px solid gray", paddingRight: "20px", marginRight: "50px" }}>
                        <Grid>
                            <img src={rashid} alt="image" style={{ minWidth: "450px", height: "280px", borderRadius: "10px" }} />
                        </Grid>
                        <Grid style={{ display: "flex", justifyContent: "space-between", fontSize: "10px" }}>
                            <Box><Link to="/">National</Link></Box>
                            <Box>
                                {/* <span><AccessTimeIcon style={{ width: "13px" }} /> <span>Few Mins Ago</span></span> */}
                                <List>
                                    <ListItem disablePadding>
                                        <img src={clock} alt="clock" style={{ width: "14px" }} />
                                        <ListItemText secondary="Few Mins Ago" secondaryTypographyProps={{
                                            fontSize: 11,
                                            color: 'gray',
                                            marginLeft: "10px"
                                        }} />
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Typography style={{ width: "350px", textAlign: "left", margin: "10px" }}>
                            Mohammed Bin Rashid approves new federal department board appointments
                        </Typography>

                    </Grid>
                    <Grid >
                        <List>
                            {/* @ts-ignore */}
                            {post.map((item: any) => (

                                <ListItem  style={{ borderBottom: "1px solid gray" }}>
                                    <Box>
                                        {/* <img src={scotish} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} /> */}
                                        {item.image}
                                    </Box>
                                    <Box >
                                        <Typography style={{ fontSize: "12px" }}> {item.name}</Typography>
                                        <Typography style={{ fontSize: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}> <span style={{ color: "blue" }}>{item.title} </span> <span> {item.time}</span></Typography>
                                    </Box>
                                </ListItem>

                            ))}
                        </List>


                    </Grid>

                </Stack>

            </Grid >

        </div >
    );
};

export default NationalNews;

/*
 <ListItem style={{ borderBottom: "1px solid gray" }}>
                                <Box>
                                    <img src={recedent} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />
                                </Box>
                                <Box >
                                    <Typography style={{ fontSize: "12px" }}> Scotish Oil worker home in Dubai after 11- months iraq ordeal</Typography>
                                    <Typography style={{ fontSize: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}> <span style={{ color: "blue" }}>science </span> <span> Few Mins ago</span></Typography>
                                </Box>
                            </ListItem>
                            <ListItem style={{ borderBottom: "1px solid gray" }}>
                                <Box>
                                    <img src={flight} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />
                                </Box>
                                <Box >
                                    <Typography style={{ fontSize: "12px" }}> Scotish Oil worker home in Dubai after 11- months iraq ordeal</Typography>
                                    <Typography style={{ fontSize: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}> <span style={{ color: "blue" }}>science </span> <span> Few Mins ago</span></Typography>
                                </Box>
                            </ListItem>
                            <ListItem style={{ borderBottom: "1px solid gray" }}>
                                <Box>
                                    <img src={prince} alt="sco" style={{ width: "100px", height: "70px", marginRight: "20px" }} />
                                </Box>
                                <Box style={{ marginTop: "0px" }}>
                                    <Typography style={{ fontSize: "12px" }}> Scotish Oil worker home in Dubai after 11- months iraq ordeal</Typography>
                                    <Typography style={{ fontSize: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}> <span style={{ color: "blue" }}>science </span> <span> Few Mins ago</span></Typography>
                                </Box>
                            </ListItem>

*/
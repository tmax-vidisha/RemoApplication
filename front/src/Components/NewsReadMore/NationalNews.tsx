import React from "react";
import { Grid, Stack, Box, Typography } from "@mui/material";
import rashid from "../../Assets/Images/rashid.jpg";
import scotish from "../../Assets/Images/scotish.jpg";
import recedent from "../../Assets/Images/recedent.jpg";
import flight from "../../Assets/Images/flight.jpg";
import prince from "../../Assets/Images/prince.jpg";
import clock from "../../Assets/Images/clock.svg";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useStyles } from "./Styles";
var moment = require("moment-timezone");

const post = [
  {
    id: 1,
    image: (
      <img
        src={scotish}
        alt="sco"
        style={{ width: "100px", height: "70px", marginRight: "20px" }}
      />
    ),
    name: "Scotish Oil worker home in Dubai after 11- months iraq ordeal",
    title: "science",
    time: "Few Mins ago",
  },
  {
    id: 2,
    image: (
      <img
        src={recedent}
        alt="sco"
        style={{ width: "100px", height: "70px", marginRight: "20px" }}
      />
    ),
    name: "Fighting for water bottles, Dubai residents reveal uncomfortable quarantine in UK ",
    title: "science",
    time: "Few Mins ago",
  },
  {
    id: 3,
    image: (
      <img
        src={flight}
        alt="sco"
        style={{ width: "100px", height: "70px", marginRight: "20px" }}
      />
    ),
    name: "Vatican honour for Crown Prince fills country with pride, Sheikha Fatima says",
    title: "Health",
    time: "Few Mins ago",
  },
  {
    id: 4,
    image: (
      <img
        src={prince}
        alt="sco"
        style={{ width: "100px", height: "70px", marginRight: "20px" }}
      />
    ),
    name: "PepsiCo unveils Expo 2020 Dubai pavilions with once in a lifetime experiences",
    title: "Health",
    time: "Few Mins ago",
  },
];

interface IFolderProps {
  data: any;
  error: any;
  isLoading: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}

const NationalNews: React.FC<IFolderProps> = (props: IFolderProps) => {
  const { data, error, isLoading } = props;
  console.log(data?.response1, "nEWS");
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.upperContent}>
        <Grid container item xs={12} className={classes.firstContent}>
          <Grid item xs={12} md={6}>
            <img
              src={data?.response1[0].fields.NewsImage}
              alt="national"
              className={classes.naNewsImage}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "10px",
              }}
            >
              <Box style={{ margin: "10px" }}>
                <Link to="/SubNews" style={{ color: "#39c8cf" }}>
                  {data?.response1[0].fields.Reference}
                </Link>
              </Box>
              <Box>
                {/* <span><AccessTimeIcon style={{ width: "13px" }} /> <span>Few Mins Ago</span></span> */}
                <List>
                  <ListItem disablePadding>
                    <img src={clock} alt="clock" style={{ width: "14px" }} />
                    <ListItemText
                      style={{ textDecoration: " none !important" }}
                      secondary={moment(
                        data?.response1[0].fields?.Modified
                      ).fromNow()}
                      secondaryTypographyProps={{
                        fontSize: 11,
                        color: "#8c8c8c",
                        marginLeft: "10px",
                      }}
                    />
                  </ListItem>
                </List>
              </Box>
            </div>
            <div>
              <p className={classes.bigText}>
                {data?.response1[0].fields.Title}
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {data?.response &&
                data?.response?.slice(1, 5).map((item: any) => (
                  <ListItem style={{ borderBottom: "1px solid #e6e6e6" }}>
                    <Box>
                      {/* {item.fields.NewsImage} */}
                      <img
                        src={item.fields.NewsImage}
                        alt="news"
                        style={{
                          minWidth: "100px",
                          height: "70px",
                          borderRadius: "5px",
                          marginRight: "20px",
                        }}
                      />
                    </Box>
                    <Box>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#8c8c8c",
                          marginTop: "0px",
                        }}
                      >
                        {item.fields.Title}
                      </div>
                      <div className={classes.refText}>
                        <p style={{ color: "#39c8cf" }}>
                          {item.fields.Reference}
                        </p>
                        <p style={{ color: "#8c8c8c" }}>
                          {moment(item.fields?.Modified).fromNow()}
                        </p>
                      </div>
                    </Box>
                  </ListItem>
                ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </div>
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

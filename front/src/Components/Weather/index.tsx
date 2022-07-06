/* eslint-disable */
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import { Paper, Typography } from "@mui/material";
import { useStyles } from "./Styles";

export default function Weather() {
  var classes = useStyles();

  return (
    <Paper elevation={0}>
      <List className={classes.root}>
        <ListItem className={classes.weather}>
          <Typography component="h4">Dubai, UAE</Typography>
          <Typography component="h1">32.01C</Typography>

          <Typography
            variant="caption"
           
            component="div"
            sx={{ opacity: 0.6 }}
          >
            Sunny
          </Typography>
        </ListItem>
        <Divider component="span" orientation="vertical" flexItem />
        <ListItem className={classes.weather}>
          <Typography component="h4">Next Prayer</Typography>
          <Typography component="h1">16:45</Typography>

          <Typography
            variant="caption"
         
            component="div"
            sx={{ opacity: 0.6 }}
          >
            Asher
          </Typography>
        </ListItem>
        <Divider component="span" orientation="vertical" flexItem />
        <ListItem className={classes.currency}>
          <Typography component="h4">1.00 AED is</Typography>
          <Typography component="h1"> 0.27 </Typography>

          <Typography
            variant="caption"
          
            component="div"
            sx={{ opacity: 0.6 }}
          >
            USD
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
}

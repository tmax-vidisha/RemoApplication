/* eslint-disable */
import React, { useState } from "react";
import Calendar from "react-calendar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import { Paper, Stack, Typography } from "@mui/material";
import { useStyles } from "./Styles";
import "react-calendar/dist/Calendar.css";
import SkeletonAnimation from "../../Containers/Skeleton";
import { useGetQuickLinksQuery,useUpdateQuicklinkTokenMutation,useGetAllQuickLinkQuery } from '../../services/APIs';

export default function Weather() {
  var classes = useStyles();
  const [value, onChange] = useState(new Date());
  const [token, setToken] = useState<string>();
  const { data, error, isLoading } = useGetAllQuickLinkQuery(token);
  return (
    <Paper elevation={0}>
      {isLoading ? (
          <SkeletonAnimation />
        ) : (
      <List className={classes.root}>
        {/*  <ListItem className={classes.weather}>
          <Typography component="h4">kkjhjkhjkh, UAE</Typography>
          <Typography component="h1">32.01C</Typography>

          <Typography variant="caption" component="div" sx={{ opacity: 0.6 }}>
            Sunny
          </Typography>
        </ListItem>
        <Divider component="span" orientation="vertical" flexItem />
        <ListItem className={classes.weather}>
          <Typography component="h4">Next Prayer</Typography>
          <Typography component="h1">16:45</Typography>

          <Typography variant="caption" component="div" sx={{ opacity: 0.6 }}>
            Asher
          </Typography>
        </ListItem>
        <Divider component="span" orientation="vertical" flexItem />
        <ListItem className={classes.currency}>
          <Typography component="h4">1.00 AED is</Typography>
          <Typography component="h1"> 0.27 </Typography>

          <Typography variant="caption" component="div" sx={{ opacity: 0.6 }}>
            USD
          </Typography>
        </ListItem> */}

        <div className={classes.Calendar}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography
              className={classes.calenderHeader}
              variant="h6"
              component="h6"
              color="secondary"
            >
              Events Calendar
            </Typography>

            <Typography
              className={classes.calenderHeader2}
              variant="h6"
              component="h1"
              color="secondary"
            >
              View All Events
            </Typography>
          </Stack>
          <Calendar
            className={classes.border}
            onChange={onChange}
            value={value}
          />
        </div>
      </List>
       )}
    </Paper>
  );
}

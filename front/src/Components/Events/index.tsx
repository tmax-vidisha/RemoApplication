import React, { useEffect, useState } from 'react'
import { useGetEventsQuery, useUpdateTokenMutation, useGetAllEventsQuery, useGetAllEvtQuery } from '../../services/APIs'
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  NavLink as RouterNavLink
} from "react-router-dom";
import SkeletonAnimation from "../../Containers/Skeleton";
import {
  Paper,
  Typography,
  Stack,
  List,
  Link,
  TextField
} from "@mui/material";
import { useStyles } from "./Styles";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import "react-calendar/dist/Calendar.css";
import Calendar from 'react-calendar';
import SubCalendar from './SubCalendar';
// import SubComponentsPickers from './SubComponentsPickers';

// import { CalendarPicker } from '@mui/x-date-picker/CalendarPicker'
// import { CalendarPicker} from '@mui/x-date-picker-pro'

//@ts-ignore

interface IFolderProps {
  // event: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
  data: any,
  error: any,
  isLoading: any,

}


var moment = require("moment-timezone");

const Events: React.FC<IFolderProps> = (props: IFolderProps) => {

  const { data, isLoading, error } = props;
  const classes = useStyles();
   const [value, onChange] = useState(new Date());
  const pca = new PublicClientApplication(configuration);
  return (
    <AuthenticatedTemplate>
      <Paper elevation={0}>
        <List className={classes.root}>
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
              <Link href="/viewAllEvents"  className={classes.calenderHeader2}>
              <Typography
                variant="h6"
                component="h1"
                color="secondary"
                className={classes.calenderHeader2}
              >
                 View All Events
              </Typography>
              </Link>
            </Stack>
            <Calendar
           className={classes.border}
              onChange={onChange}
              value={value}
            />
            {/* <SubCalendar/> */}
            {/* @ts-ignore */}
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              
              <CalendarPicker date={date} onChange={(newDate: any) => setDate(newDate)} />
            </LocalizationProvider> */}

            {/* <SubComponentsPickers/> */}

          </div>
        </List>
        {data?.response &&
          data?.response?.map((item: any, index: any) => {
            const { fields = {} } = item;
            //   console.log(fields);
            let eventTitle = fields.Title;
            let evenDesc = fields?.Description;
            let eventMonth = moment(fields?.EventDate).format("MMM");
            let eventYear = moment(fields?.EventDate).format("YYYY");
            let eventDate = moment(fields?.EventDate).format("DD");
            let eventDay = moment(fields?.EventDate).format('dddd');
            return (
              <div key={index} >
                {/* <Box className={classes.evenLeft}>
                        <h2>{eventDate}</h2>
                        <p>{eventMonth}</p>
                      </Box>
                      <Box className={classes.evenRight}>
                        <RouterNavLink className={classes.eventLink} to={{ pathname: '/EventReadMore' }} state={fields?.id }> 
                          <Typography
                            variant="subtitle1"
                            component="div"
                            color="black"
                            className={classes.headRow}
                          >
                            {eventTitle}
                          </Typography>

                          <Typography
                            variant="caption"
                            color="textSecondary"
                            component="span"
                            className={classes.eventDesc}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: `${evenDesc}`,
                              }}
                            />
                          </Typography>
                        </RouterNavLink>
                      </Box>
                      <Box className={classes.eventClear}></Box> */}
                <Typography className={classes.calenderinfo}>
                  <li >
                    {/* General Board Meeting */}
                    {eventTitle}
                  </li>
                  <li className={classes.list}>
                    {eventDay}  {eventDate}  {eventMonth}  {eventYear}
                  </li>
                </Typography>

                {/* <Typography className={classes.calenderinfo}>
                  <li>Review Meeting with corporate manager</li>
                  <li className={classes.list}>Thursday, June 06, 2022</li>
                </Typography> */}
              </div>
            );
          })}

      </Paper>
    </AuthenticatedTemplate>

  )
}

export default Events

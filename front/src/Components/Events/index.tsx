import React, { useEffect, useState, useCallback } from "react";
import {
  useGetEventsQuery,
  useUpdateTokenMutation,
  useGetAllEventsQuery,
  useGetAllEvtQuery,
} from "../../services/APIs";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { NavLink as RouterNavLink } from "react-router-dom";
import SkeletonAnimation from "../../Containers/Skeleton";
import {
  Paper,
  Typography,
  Stack,
  List,
  Link,
  TextField,
  Box,
} from "@mui/material";
import { useStyles } from "./Styles";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import SubCalendar from "./SubCalendar";
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
  data: any;
  error: any;
  isLoading: any;
  onClick: (Date: any) => void;
}

var moment = require("moment-timezone");

const Events: React.FC<IFolderProps> = (props: IFolderProps) => {
  const { data, isLoading, error, onClick } = props;
  const classes = useStyles();
  const [value, setValue] = useState();
  const pca = new PublicClientApplication(configuration);

  const onChange = useCallback(
    (value: any) => {
      setValue(value);
      //   const localDate = new Date(value).toLocaleDateString();
      //   console.log(localDate)
      onClick?.(value);
    },
    [setValue]
  );
  console.log(data?.response, "ryerytuAaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  return (
    <AuthenticatedTemplate>
      <Paper elevation={0}>
        <List className={classes.root}>
          <div className={classes.Calendar}>
            <Box className={classes.calContent}>
              <Typography
                className={classes.calenderHeader}
                variant="h6"
                component="h6"
                color="secondary"
              >
                Events Calendar
              </Typography>
              <Typography>
                <Link href="/viewAllEvents" className={classes.calenderHeader2}>
                  <Typography
                    variant="h6"
                    component="h1"
                    color="secondary"
                    className={classes.calenderHeader2}
                  >
                    View All Events
                  </Typography>
                </Link>
              </Typography>
            </Box>
            <Calendar
              className={classes.calendar}
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
        {data?.response?.length > 0 ? (
          <>
            {data?.response &&
              data?.response?.map((item: any, index: any) => {
                const { fields = {} } = item;

                let eventTitle = fields.Title;
                let evenDesc = fields?.Description;
                let eventMonth = moment(fields?.EventDate).format("MMM");
                let eventYear = moment(fields?.EventDate).format("YYYY");
                let eventDate = moment(fields?.EventDate).format("DD");
                let eventDay = moment(fields?.EventDate).format("dddd");
                return (
                  <div key={index}>
                    <Typography className={classes.calenderinfo}>
                      <li>{eventTitle}</li>
                      <li className={classes.list}>
                        {eventDay} {eventDate} {eventMonth} {eventYear}
                      </li>
                    </Typography>
                  </div>
                );
              })}
          </>
        ) : (
          <Typography>No Events</Typography>
        )}
      </Paper>
    </AuthenticatedTemplate>
  );
};

export default Events;

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
  TextField
} from "@mui/material";
import { useStyles } from "./Styles";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import "react-calendar/dist/Calendar.css";
// import SubComponentsPickers from './SubComponentsPickers';

// import { CalendarPicker } from '@mui/x-date-picker/CalendarPicker'
// import { CalendarPicker} from '@mui/x-date-picker-pro'
import { Calendar } from 'react-calendar';

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
// const Events = () => {

const Events: React.FC<IFolderProps> = (props: IFolderProps) => {

  const { data, isLoading, error } = props;
  const classes = useStyles();
   const [value, onChange] = useState(new Date());
  const pca = new PublicClientApplication(configuration);
  // const [value, setValue] = useState(new Date())
  //  const [updateToken,{data,isLoading} ] = useUpdateTokenMutation();
  //  console.log(data?.response,'ytjyjyjytjyjyjyjyj')
  // const [token, setToken] = useState<string>();
  //  const accounts = pca.getAllAccounts();
  //  useEffect(() => {
  //   async function getAccessToken() {
  //     if (accounts.length > 0) {
  //       const request = {
  //         scopes: ['user.read'],
  //         account: accounts[0]
  //       }
  //       const accessToken = await pca.acquireTokenSilent(request).then((response) => {

  //         // updateToken(response.accessToken);
  //            setToken(response.accessToken)
  //         // console.log(token,'uuuuuu')
  //       }).catch(error => {
  //         // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
  //         console.log(error);
  //         return null;
  //       });


  //     }

  //     return null;
  //   }
  //   getAccessToken();
  //   // async function aaaa(){
  //   //   // console.log(token)
  //   //   await updateToken(token)
  //   // }
  //   // aaaa();
  //   // setDatas(data.Event)
  //   // console.log(datas.Event)
  //   // function send (){
  //   //       if (token) {


  //   //         const requestOptions = {
  //   //           method: 'POST',
  //   //           headers: { 'Content-Type': 'application/json' },
  //   //           body: JSON.stringify({ token })
  //   //         };
  //   //         // fetch('http://localhost:4000/user/post', requestOptions)
  //   //         fetch(`http://localhost:4000/api/v1/token/folder`, requestOptions)
  //   //         // .then(response => console.log(response))
  //   //          .then(response => response.json())
  //   //          .then(data =>setData1(data));

  //   //       }

  //   //     }
  //   //     send();

  //   // const response ='evendgdsgdgdgdgdgffgfgrgrgrts'
  //   // setToken(response);
  // }, [])

  // const { data, error, isLoading } = useGetAllEventsQuery(token)
  //  console.log(data,'88888ttuytuytu888')
  //  const {event} = props;
  // console.log(event)
  //  const Data = event.Event
  // const [data,setData] = useState<any>([]);
  // useEffect(()=>{
  //       setData(event.Event)
  // },[])
  // console.log(data);
  

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
import React from 'react'
import { Fragment, useEffect, useState } from "react";
import { NavLink as RouterNavLink, useLocation, } from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";

import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import { INITIAL_EVENTS, createEventId } from './eventUtil'
import { useStyles } from "./Styles";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import { useGetEventsQuery,useUpdateTokenMutation,useGetAllEventsQuery } from "../../services/APIs";
var moment = require("moment-timezone");

const events = [
    {
      start: '2015-07-20',
      end: '2015-07-02',
      eventClasses: 'optionalEvent',
      title: 'test event',
      description: 'This is a test description of an event',
    },
    {
      start: '2015-07-19',
      end: '2015-07-25',
      title: 'test event',
      description: 'This is a test description of an event',
      data: 'you can add what ever random data you may want to use later',
    },
  ];
  interface IFolderProps {
    event: any;
    // onClick: any;
    // onDownload?: (id: string) => void;
    // onDelete?: (id: string) => void;
    // onRename?: (id: string, name: string) => void;
    // onShare?: (id: string) => void;
  }

const EventsReadMore = () => {
// const EventsReadMore: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    // const { data, error, isLoading } = useGetEventsQuery('');
    const locationProps: any = useLocation();
    // const {event} = props;
    const pca = new PublicClientApplication(configuration);
    const [token, setToken] = useState<string>();
    //  const [updateToken,{data,isLoading} ] = useUpdateTokenMutation();
    //  console.log(data?.response,'ytjyjyjytjyjyjyjyj')
     const accounts = pca.getAllAccounts();
     useEffect(() => {
      async function getAccessToken() {
        if (accounts.length > 0) {
          const request = {
            scopes: ['user.read'],
            account: accounts[0]
          }
          const accessToken = await pca.acquireTokenSilent(request).then((response) => {
           
            // updateToken(response.accessToken);
            setToken(response.accessToken)
            // console.log(token,'uuuuuu')
          }).catch(error => {
            // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
            console.log(error);
            return null;
          });
  
  
        }
  
        return null;
      }
      getAccessToken();
      // async function aaaa(){
      //   // console.log(token)
      //   await updateToken(token)
      // }
      // aaaa();
      // setDatas(data.Event)
      // console.log(datas.Event)
      // function send (){
      //       if (token) {
        
        
      //         const requestOptions = {
      //           method: 'POST',
      //           headers: { 'Content-Type': 'application/json' },
      //           body: JSON.stringify({ token })
      //         };
      //         // fetch('http://localhost:4000/user/post', requestOptions)
      //         fetch(`http://localhost:4000/api/v1/token/folder`, requestOptions)
      //         // .then(response => console.log(response))
      //          .then(response => response.json())
      //          .then(data =>setData1(data));
        
      //       }
        
      //     }
      //     send();
       
      
    }, [])
    const { data, error, isLoading } =  useGetAllEventsQuery(token);
     console.log(data,'888ddd88ttuytuytu888')
  return (
    <AuthenticatedTemplate>
      <Container className={classes.contentEditorWidth}>
        <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">
                Events
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
                  <Typography>Events</Typography>
                </Breadcrumbs>
              </Typography>
            </Paper>
          </Paper>
        </Card>

        <Paper elevation={0} sx={{ mt: 3 }}>
          <div style={{ display: "flex" }}>
            <Paper elevation={0} sx={{ width: "75%", p: 2, pt: 3 }}>
              {/* <Calendar /> */}

              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                // weekends={this.state.weekendsVisible}
                initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                // select={this.handleDateSelect}
                // eventContent={renderEventContent} // custom render function
                // eventClick={this.handleEventClick}
                // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}

                */
                events={events}

              />

            </Paper>
            <Paper elevation={0} sx={{ width: "25%", p: 2, pt: 3 }}>
              {data?.response &&
                data?.response?.map((item: any, index: any) => {
                  const { fields = {} } = item;
                  const selectItemId = locationProps?.state;
                  if (selectItemId == fields.id) {
                    let eventTitle = fields.Title;
                    let eventMonth = moment(fields?.EventDate).format("MMM");
                    let eventDate = moment(fields?.EventDate).format("DD");

                    return (
                      <div key={index}>
                        <CardContent className={classes.root}>
                          <Box className={classes.evenLeft}>
                            <h2>{eventDate}</h2>
                            <p>{eventMonth}</p>
                          </Box>
                          <Box className={classes.evenRight}>
                            <Typography
                              variant="subtitle1"
                              component="h6"
                              color="secondary"
                              className={classes.eventTitle}
                            >
                              {eventTitle}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="textSecondary"
                              component="span"
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: `${fields.Description}`,
                                }}
                              />
                            </Typography>
                          </Box>
                        </CardContent>
                        <Divider
                          variant="inset"
                          component="li"
                          className={classes.itemStyle}
                        />
                      </div>
                    );
                  }
                })}
            </Paper>
          </div>
        </Paper>
      </Container>
    </AuthenticatedTemplate>
  )
}

export default EventsReadMore
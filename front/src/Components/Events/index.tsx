import React, { useEffect, useState } from 'react'
import { useGetEventsQuery,useUpdateTokenMutation } from '../../services/APIs'
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  NavLink as RouterNavLink
} from "react-router-dom";
import SkeletonAnimation from "../../Containers/Skeleton";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Paper,
    Typography,
  } from "@mui/material";
import { useStyles } from "./Styles";
interface IFolderProps {
  event: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}




var moment = require("moment-timezone");
  // const Events = () => {
  
  const Events: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    // const { data, error, isLoading } = useUpdateTokenMutation();
    // console.log(data,'88888888')
     const {event} = props;
    // console.log(event)
//  const Data = event.Event
    // const [data,setData] = useState<any>([]);
    // useEffect(()=>{
    //       setData(event.Event)
    // },[])
    // console.log(data)
  return (
    // <div>Events</div>
    <AuthenticatedTemplate>
      <Paper elevation={0}>
        {/* {isLoading ? (
          <SkeletonAnimation />
        ) : ( */}
          <>
            <CardContent sx={{ pb: "16px!important" }} className={classes.rootTitle}>
              <Typography
                variant="h6"
                component="h6"
                color="secondary"
                className={classes.eventHeader}
              >
                Latest Events
              </Typography>

              {event &&
                event?.map((item: any, index: any) => {
                  const { fields = {} } = item;
                //   console.log(fields);
                  let eventTitle = fields.Title;
                  let evenDesc = fields?.Description;
                  let eventMonth = moment(fields?.EventDate).format("MMM");
                  let eventDate = moment(fields?.EventDate).format("DD");

                  return (
                    <div key={index} className={classes.eventTop}>
                      <Box className={classes.evenLeft}>
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
                      <Box className={classes.eventClear}></Box>
                    </div>
                  );
                })}
            </CardContent>
          </>
        {/* )} */}
      </Paper>
    </AuthenticatedTemplate>
    // <>dfgdfgggtrghthgt</>
  )
}

export default Events
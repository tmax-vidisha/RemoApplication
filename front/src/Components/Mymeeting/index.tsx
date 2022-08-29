import React, { useEffect, useState } from "react";
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import AccessTimeIcon from "@mui/icons-material/Event";
import {
  useGetAllMeetingsQuery
} from "../../services/APIs";
import { useStyles } from "./Styles";
import useCustom from "../../useCustom";
import SkeletonAnimation from "../../Containers/Skeleton";
var moment = require("moment-timezone");
interface IFolderProps {
  data:any, 
  error:any,
  isLoading:any
}

// const Mymeeting = () => {
const Mymeeting: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  // const {token} = useCustom();
  // const { data, error, isLoading } = useGetAllMeetingsQuery(token)
  const { data, error, isLoading } =  props
  // console.log(data,'meetingsssssssssssss')
  return (
    // <div>News</div>

    <AuthenticatedTemplate>
      <Paper style={{ maxWidth: "100%",height:"120px" }} elevation={0}>
       
          <>
            <CardContent sx={{ pb: "16px!important" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  color="secondary"
                  className={classes.meetHeader}
                >
                  My Meetings
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  color="secondary"
                  className={classes.meetHeader}
                >
                  June 12, 2022
                </Typography>
              </Stack>
              {data?.response &&
          data?.response?.map((item: any, index: any) => {
            const time = item.start.dateTime
            // moment(fields?.EventDate).format("MMM");
            // let eventYear  = moment(fields?.EventDate).format("YYYY");
            // var formatted = moment(time, "HH:mm").format("hh:mm A");
            var formatted = moment(time).format("MMM");
            console.log(formatted,'ffffffffffffffffff')
               return (
                
                
                <Grid container item xs={12} spacing={0}>
                <Grid item xs={0.8}>
                  <Typography className={classes.meetTime} >{formatted}</Typography>
                 
                </Grid>
                <Grid className={classes.meetBorder} item xs={0.2}>

                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.meetText}>{item.subject}</Typography>
                  
                </Grid>

              </Grid>

               )


           })}
              {/* <Grid container item xs={12} spacing={0}>
                <Grid item xs={0.8}>
                  <Typography className={classes.meetTime} >09 AM</Typography>
                  <Typography className={classes.meetTime} >10 AM</Typography>
                  <Typography className={classes.meetTime} >11 AM</Typography>
                </Grid>
                <Grid className={classes.meetBorder} item xs={0.2}>

                </Grid>
                <Grid item xs={10}>
                  <Typography className={classes.meetText}>General Board Meeting</Typography>
                  <Typography className={classes.meetText}>REeview Meeting with Corporate Mamager</Typography>
                  <Typography className={classes.meetText}>General Board Meeting</Typography>
                </Grid>

              </Grid> */}
            </CardContent>
          </>
        
      </Paper>
    </AuthenticatedTemplate>
  );
};

export default Mymeeting;

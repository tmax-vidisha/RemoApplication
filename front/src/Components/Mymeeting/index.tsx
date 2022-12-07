import React, { useEffect, useState } from "react";
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import AccessTimeIcon from "@mui/icons-material/Event";
import {
  useGetAllMeetingsQuery
} from "../../services/APIs";
import { useStyles } from "./Styles";
import useCustom from "../../hooks/useCustom";
import SkeletonAnimation from "../../Containers/Skeleton";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Calendar from 'react-calendar';
import AddIcon from '@mui/icons-material/Add';

var moment = require("moment-timezone");


interface IFolderProps {
  data: any,
  error: any,
  isLoading: any
}

// const Mymeeting = () => {
const Mymeeting: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  // const {token} = useCustom();
  // const { data, error, isLoading } = useGetAllMeetingsQuery(token)
  const { data, error, isLoading } = props
  // console.log(data,'meetingsssssssssssss')

  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };
  const [isShown, setIsShown] = useState(false);
  const [show, setShow] = useState(false);

  const [value, onChange] = useState(new Date());

  return (

    <AuthenticatedTemplate>
      <Paper style={{ maxWidth: "100%", height: "auto" }} elevation={0}>

        <>
          <CardContent sx={{ pb: "16px!important" }}>
            <Stack

              direction="row"
              justifyContent="space-between"
              alignItems="left"
              spacing={2}
            >
              <Typography
                variant="h6"
                component="h6"
                color="secondary"
                className={classes.meetHeader}
              >
                Meetings Info
              </Typography>

            </Stack>
            <Grid >
              {/* <Grid style={{ display: "flex", justifyContent: "flex-start" }}>
                <Grid style={{ textTransform: "capitalize", marginRight:"20px" }} className={classes.todo}  >
                  <div onClick={() => setIsShown(!isShown)}> Calendar </div>
                </Grid>
                <Grid style={{ textTransform: "capitalize" }} className={classes.todo} >
                 <div onClick={() => setShow(!show)}>To do </div> 
                </Grid>
              </Grid> 

              {isShown && (
                  <div>
                    <Calendar onChange={onChange} value={value} className={classes.calendar} />
                  </div>
                )}
                */}
                {/* <div>
              { show && (
                <Grid style={{ overflowY: "scroll", overflowX: "hidden", height: "60px", marginTop: "30px" }}>
                {data?.response &&
                  data?.response?.map((item: any, index: any) => {
                    const time = item.start.dateTime
                    // moment(fields?.EventDate).format("MMM");
                    // let eventYear  = moment(fields?.EventDate).format("YYYY");
                    // var formatted = moment(time, "HH:mm").format("hh:mm A");
                    var formatted = moment(time).format("MMM");
                    console.log(formatted, 'ffffffffffffffffff')
                    return (


                      <Grid container item xs={12} spacing={0}  >
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

              </Grid>
              )}
              
            </div> */}
            </Grid>

            <Grid>
              
            
                <div> 
                {/* <div className={classes.task}>
                <span><AddIcon/></span> <span>Add Task </span>
               </div> */}
                <Grid style={{ overflowY: "hidden", overflowX: "hidden", height: "60px", marginTop: "30px" }}>
                {data?.response &&
                  data?.response?.map((item: any, index: any) => {
                    const time = item.start.dateTime
                    // moment(fields?.EventDate).format("MMM");
                    // let eventYear  = moment(fields?.EventDate).format("YYYY");
                    // var formatted = moment(time, "HH:mm").format("hh:mm A");
                    var formatted = moment(time).format("MMM");
                    console.log(formatted, 'ffffffffffffffffff')
                    return (


                      <Grid container item xs={12} spacing={0}  >
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

              </Grid>
              </div>
             
              
            </Grid>
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

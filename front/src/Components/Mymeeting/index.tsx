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
            <Grid style={{marginBottom:"20px"}}>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="left" aria-label="left aligned" style={{ textTransform: "capitalize" }} className={classes.todo}>
                  Calendar
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered" style={{ border: "none", height: "30px", textTransform: "capitalize" }}>
                  To do
                </ToggleButton>
              </ToggleButtonGroup>

            </Grid>

            <Grid>
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

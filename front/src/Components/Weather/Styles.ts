/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "95%",
    display: "flex",
    overflowY: 'hidden',
    bgcolor: "background.paper",
     paddingTop: "16px!important",
   marginBottom: "16px!important",
    top:"-6px",
    "& > li": {
      // width: "33.3%",
       float: "left",
      // textAlign: "center",
    },
  },
  weather: {
    display: "inline-block !important",
    paddingTop: "0px!important",
    paddingBottom: "0!important",
    "& > h4": {
      fontSize: "12px",
      marginBottom: "10px",
    },
    "& > h1": {
      fontSize: "15px",
      color: "#009BAD",
     
    },
    "& > div": { 
      lineHeight: "13px",
      paddingTop: "3px",
    },
  },
  currency: {
    display: "inline-block !important",
    paddingTop: "0px!important",
    paddingBottom: "0!important",
    "& > h4": {
      fontSize: "12px",
      marginBottom: "10px",
    },
    "& > h1": {
      fontSize: "15px",
      color: "#009BAD",
      marginBottom: "5px",
      lineHeight: "26px",
    },
    "& > div": {
      lineHeight: "13px",
      paddingTop: "3px",
     
    },
  },
});

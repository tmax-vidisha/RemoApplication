/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },

  meetHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },

  meetTime: {
    fontSize: "11px !important",
    color: "#B2B2B2 !important",
    marginBottom: "8px !important",
  },
  meetText: {
    fontSize: "12px !important",
    color: "black !important",
    opacity:"85%",
    marginBottom: "6px !important",
  },
  meetBorder:{
    borderLeft:"1px solid #DDDDDD  !important",
    // height:"63px",
    opacity:"5",
    marginBottom:"10px !important",
    paddingBottom:"10px !important",
    marginLeft:"10px !important"
  },
  todo:{
    border:"none",
     height:"30px",
    fontSize:"12px",
    
    color:"gray",
    ": hover":{
      color:"blue",
      backgroundColor:"indigo"
    }
  }
});

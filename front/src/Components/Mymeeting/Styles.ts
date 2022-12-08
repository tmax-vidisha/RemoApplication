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
    textAlign:"left"
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
     textAlign:"center",
    fontSize:"12px",
    width:"70px",
    color:"gray",
    "& : hover":{
      color:"blue", 
    },
    backgroundColor:"white",
    "& :hover":{
      backgroundColor:"#e1f5f3",
      height:"30px",
    }
    
  },

  calendar:{
    width: "240px",
      maxWidth: "240px",
      marginTop:"50px",
      border: "none",
      fontSize:"10px",
      color:'#bab4b4',
    "& react-calendar":{
      width: "240px",
      maxWidth: "240px",
      background: "white",
      border: "none",
      lineHeight: "1.125em",
    }
  },

  task:{
    display:"flex",
     justifyContent:"flex-start",
      marginTop:"15px",
       color:"blue",
       fontSize:"15px",
       "& span":{
        marginRight:"10px",
       }
  }
});

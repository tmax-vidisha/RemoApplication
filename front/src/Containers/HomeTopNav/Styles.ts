/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  topItems: {
    display: "flex",
    justifyContent: "space-around",
    
  },
  button: {
    // borderRadius: 14,
    // width: 280,
    // height: 50,
    border:"1px solid #c9c9c9",
    boxShadow:"-0.5px 2px 5px 2px #cccccc",
    textTransform:"none",
    "& .MuiTabs-indicator": {
      display: "none",
      backgroundColor: "orange"
    },
  //   '&:hover': {
  //     backgroundColor: '#004C9B',
  //     color: 'white',
  //     opacity: 1,
  //  },
     
  },

  topClear: {
    justifyContent: "end !important",
    padding: "0 !important",
    right: "15px",
  },
  topClearLink: {
    display: "flex",
    background: "#f3f3f3",
    padding: "5px 9px",
    marginRight:"45px",
    borderRadius: "30px",
    color: "#333333!important",
    fontSize: "14px",
    textDecoration: "none!important",
    alignItems: "end",
    "& svg": {
      fontSize: "14px !important",
      paddingLeft: "6px !important",
    },
  },
  topLink: {
    fontSize: "12px",
    color: "#333333 !important",
    textDecoration: "none !important",
    "& .topImg": {
      margin: "auto",
      display: "block",
    },
    "& .topImgH": {
      margin: "auto",
      display: "none",
    },
  },
  topMenu:{
    "&:hover a .topImg":{
      display:"none !important",
    },
    "&:hover a .topImgH":{
      display:"block !important"
    },
    "&:hover a p":{
      color:"#009BAD"
    },
  },
  topText: {
    margin: 0,
    marginTop: "16px",
    fontSize: "13px",
    color: "#acacac",
  },

  
  block :{
    backgroundColor: "#D25A1E",
    minHeight: "40px",
    // minWidth: "30%",
    width: "calc(50% - 25px)",
    position: "relative",
    
  },
  
  blockLeft :{
    clipPath: "polygon(0 0, 100% 0, calc(100% - 3rem) 100%, 0% 100%)",
  },
  
  blockRight :{
    marginLeft: "-2rem",
    clipPath: "polygon(3rem 0, 100% 0, 100% 100%, 0% 100%)",
  }
});

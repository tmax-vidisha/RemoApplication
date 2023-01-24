/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  topItems: {
    display: "flex",
    justifyContent: "space-around",
    // "& ul":{
    //   "& li":{
    //     "& a":{
    //       textDecorationLine: 'none'
    //     }
    //   }
    // }
    
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
      display: "block !important",
      width:"25px"
    },
    "& .topImgH": {
      margin: "auto",
      color:"#009BAD",
      display: "none !important",
      width:"25px"
    },
  },
  topImg:{
    margin: "auto",
      display: "block !important",
      // width:"25px"
  },

  topImgH:{
    margin: "auto",
    color:"#009BAD",
    display: "none !important",
    // width:"20px",
    // height:"20px"
    
  },
  topMenu:{
    "&:hover a p":{
      color:"#009BAD",
      textDecoration: "none !important",
    },
    "& a":{
      textDecorationLine: "none !important",
      "&:hover .topImgH":{
        display:"block !important",       
     },
     "&:hover .topImg":{
      display:"none !important",
   
    },
    }
  },
  topText: {
    margin: 0,
    marginTop: "16px",
    fontSize: "13px",
    color: "#acacac",
    "& a p":{
      textDecoration: "none !important",
    }
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
  },

  root: {
    flexGrow: 1,
    backgroundColor: " white"
  },
  indicator: {
    backgroundColor: "yellow"
  },
  tabRoot: {
    backgroundColor: " red",
    "&:hover": {
      color: "yellow",
      opacity: 1
    }
  },
  selectedTab: {
    color: "yellow"
  },
  tabs: {
    boxShadow: "0px 0px 11px 0px #b7b1b1",
    "& .MuiTabs-indicator": {
      display: "none",
      //backgroundColor: "orange"
    },
    "& .MuiButtonBase-root.MuiTab-root": {
      fontSize: "12px",
      width:"50%",
      height:"30px"
      
    },
    "& .Mui-selected": {
      // textDecoration: "underline",
      color:"white",
      backgroundColor:"#009BAD",
     
    },
    "& .MuiTab-root.Mui-selected": {
      color: 'white'
    }
  
  }
  
});

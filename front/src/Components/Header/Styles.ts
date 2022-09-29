/* eslint-disable */
import { AppBar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import { makeStyles } from "@mui/styles";


export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: "inherit",
  background:"#02354D !important",
  "& .MuiButtonBase-root": {
    color: "#fff",
  },
  "& .MuiTypography-root": {
    color: "#fff",
  },
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiSvgIcon-root": {
    color: "#fff",
  },


}));



export const useStyles = makeStyles({

footer:{
    backgroundColor:"White",
    boxShadow: "0 1px 10px 0 rgba(0, 0, 0, 0.12)",
    boxSizing:"border-box",
    width:"100%",
    textAlign:"center",
    padding: "30px 50px",
},

footerLeft:{
"& p":{
     color:"#009BAD ",
     fontSize:"16px",
     margin: "0",
     fontFamily:"roboto"


},

},

  root: {
     width: "150px",
    height: "30px",
    padding: "0px",
    marginRight:"50px",
    marginTop:"15px",
    // border:"1px solid red"
  },
  switchBase: {
    color: "#818181",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#23bf58",

      }
    }
  },
  thumb: {
    color: "white",
    width: "20px",
    height: "20px",
    margin: "1px"
  },
  track: {
    width:"100px",
    borderRadius: "20px",
    backgroundColor: "#818181",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "11px",
      position: "absolute",
      top: "6px"
    },
    "&:after": {
      content: "'On'",
      left: "8px"
    },
    "&:before": {
      content: "'Off'",
      right: "7px"
    }
  },
  checked: {
    color: "#23bf58 !important",
    transform: "translateX(26px) !important"
  }


 
});
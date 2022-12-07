/* eslint-disable */
import { AppBar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import { makeStyles } from "@mui/styles";


export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: "inherit",
  background: "#02354D !important",
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

  footer: {
    backgroundColor: "White",
    boxShadow: "0 1px 10px 0 rgba(0, 0, 0, 0.12)",
    boxSizing: "border-box",
    width: "100%",
    textAlign: "center",
    padding: "30px 50px",
  },

  footerLeft: {
    "& p": {
      color: "#009BAD ",
      fontSize: "16px",
      margin: "0",
      fontFamily: "roboto"


    },

  },

  MuiSwitch: {
    width: "0px",
    height: "30px",
    padding: "0px",
    margin: "auto",
    border: "1px solid red",
    "& css-julti5-MuiSwitch-root": {
      width: "150px",
      height: "45px",
      display: "inline-flex",
      overflow: "hidden",
      padding: "11px",
    }
  },
  switchBase: {
    color: "#818181",
    width: "100px",
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
    width: "100px",
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
      left: "18px"
    },
    "&:before": {
      content: "'Off'",
      right: "17px"
    }
  },
  checked: {
    color: "#23bf58 !important",
    transform: "translateX(26px) !important"
  },

  textPart: {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
     height: "30px",
    fontSize: "12px",
    marginTop: "10px"
  },

  link:{
    color: "#666666",
     textDecoration: "none"
  },

  profile: {
    fontSize: "12px !important",

    "& img": {
      width: "12px",
      marginRight: "10px",
    },


  }

});
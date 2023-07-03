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
  MuiSwitch: {
    // width: "100px",
    // height: "30px",
    // padding: "0px",
    // margin: "auto",
    // border: "1px solid red",
    "& css-julti5-MuiSwitch-root": {
      width: "150px",
      height: "45px",
      display: "inline-flex",
      overflow: "hidden",
      padding: "11px",
    },
  },
  switchBase: {
    color: "#818181",
    width: "130px",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#23bf58",
      },
    },
  },
  thumb: {
    color: "white",
    width: "20px",
    height: "20px",
    margin: "1px",
  },
  track: {
    width: "150px",
    borderRadius: "20px",
    backgroundColor: "#818181",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "11px",
      position: "absolute",
      top: "6px",
    },
    "&:after": {
      content: "'On'",
      left: "18px",
    },
    "&:before": {
      content: "'Off'",
      right: "17px",
    },
  },
  checked: {
    color: "#23bf58 !important",
    transform: "translateX(26px) !important",
  },

  textPart: {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    height: "25px",
    fontSize: "12px",
    // marginTop: "10px"
  },

  link: {
    color: "#666666",
    textDecoration: "none",
  },

  profile: {
    fontSize: "12px !important",

    "& img": {
      width: "12px",
      marginRight: "10px",
    },
  },

  badge: {
    "& link": {
      "& span": {
        "& span": {
          color: "#009BAD",
        },
      },
    },
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  what: {
    boxShadow: "10px 1px 30px -10px #858080fc",
    height: "40px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    marginTop: "0px",
    marginBottom: "16px",
    paddingLeft: "20px",
  },
  bdayText: {
    color: "gray !important",
    fontSize: "12px !important",
  },
  wish: {
    color: "#009BAD !important",
    fontSize: "12px !important",
  },
  header: {
    width: "100%",
    position: "static",
    backgroundColor: "#02354D !important",
    color: "white",
    ["@media (max-width:768px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "100% !important",
      color: "white",
      paddingRight: "0px",
    },
  },
  midHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  pl50: {
    paddingLeft: "50px",
    paddingTop: "7px",
  },
  pTpl20: {
    paddingLeft: "20px",
    paddingTop: "20px",
  },
  ml80pt20: {
    marginLeft: "80px",
    // paddingTop:"20px",
    ["@media (max-width:768px)"]: {
      marginLeft: "30px",
    },
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#02354D !important",
    },
  },
});

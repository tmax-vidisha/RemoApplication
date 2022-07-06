import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    background: "#009BAD !important",
    color: "#ffffff !important",
    height: "315px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  annHeader: {
    paddingLeft: "16px",
    paddingTop: "15px",
    fontSize: "1rem !important",
    color: "#ffffff !important",
  },
  annTitle: {
    lineHeight: "24px!important",
    height: "50px",
    overflow: "hidden",
    color: "#ffffff !important",
    marginBottom: "10px",
    fontSize: "20px !important",
    textDecoration:"none",
    "& a":{
      color: "#ffffff !important",
      textDecoration:"none",
    }
  },
  annContents: {
    overflow: "hidden",
    color: "#ffffff !important",
    marginBottom: "10px",
    opacity: 0.8,
    "& a": {
      color: "#ffffff !important",
      textDecoration: "none",
    },
    "& a:focus": {
      color: "#ffffff !important",
    },
    "& a:hover": {
      color: "#ffffff !important",
    },
  },
  annDesc:{
    opacity:0.8,
    height:"161px",
    overflow:"hidden",
  },
  readMore: {
    fontSize: " 12px",
    color: "#089DE3",
    "& span": {
      display: " inline-block",
      verticalAlign: " middle",
    },
    "& svg": {
      display: "inline-block",
      verticalAlign: "middle",
      fontSize: "18px",
    },
  }
});

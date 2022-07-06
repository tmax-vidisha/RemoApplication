/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  rootTitle: {
    // display: "flex",
    // padding:"10px!important",
    "& :last-child": {
      borderBottom: "none!important",
      marginBottom: 0,
      paddingBottom: 0,
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  evenLeft: {
    width: "70px",
    height: "70px",
    background: "#F0F9FA",
    color: "#009bad",
    borderRadius: "50%",
    textAlign: "center",
    float: "left",
    fontSize: "26px",
    "& h2": {
      fontSize: "26px",
      fontWeight: 400,
      marginTop: "10px",
      marginBottom: 0,
    },
    "& p": {
      fontSize: "13px",
      opacity: 0.8,
      marginTop: "4px !important",
    },
  },
  evenRight: {
    width: "calc(100% - 85px)",
    float: "left",
    paddingLeft: "15px",
    paddingTop: "0px",
    paddingBottom: "12px",
  },
  itemStyle: {
    listStyle: "none",
  },
  eventTitle: {
    height: "29px",
    overflow: "hidden",
  },
  eventHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  eventContents: {
    height: "25px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginBottom: "5px",
    "& a": {
      color: "#333333",
      textDecoration: "none",
    },
    "& a:focus": {
      color: "#23527c",
    },
    "& a:hover": {
      color: "#23527c",
    },
  },
  eventTop: {
    //  "& > div ": { borderBottom: "1px solid gray"},
    marginBottom: "8px",
    paddingBottom: "8px",
    borderBottom: "1px solid #f1f1f1",
  },
  eventDesc: {
    height: "38px",
    overflow: "hidden",
    display: "block",
    opacity: 0.6,

    color: "#333333 !important",
  },
  eventClear: {
    display: "table",
    content: "",
    clear: "both",
  },
  headRow: {
    fontSize: "0.87rem !important",
    // marginBottom: "10px!important",
    lineHeight: "20px!important",

    textDecoration: "none",
    height: "20px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: " ellipsis",
  },
  eventLink: {
    textDecoration: "none",
  },
});

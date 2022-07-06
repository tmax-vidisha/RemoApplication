/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  newsImg: {
    paddingTop: "56.25%",
    borderRadius: "8px",
  },
  createdDate: {
    paddingTop: "7px",
    alignItems: "center",
    display: "flex !important",
    color: " #333333!important",
    opacity: 0.7,
    fontSize: " 12px!important",
    "& svg": {
      paddingRight: "7px",
      opacity: 0.6,
    },
  },
  newsHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  newsContents: {
    height: "38px",
    overflow: "hidden",
    display: "block",
    marginBottom: "7px !important",
    marginTop: "15px!important",
    "& a": {
      color: "#333333",
      textDecoration: "none",
    },
    "& a:focus": {
      color: "#009BAD",
    },
    "& a:hover": {
      color: "#009BAD",
    },
  },
});

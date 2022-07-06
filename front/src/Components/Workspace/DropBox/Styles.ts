/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  bannerTop: {
    marginTop: 5,
  },
  workspaceHeader: {
    display: "flex",
    marginBottom: "7px",
  },
  workspaceTopHeader: {
    fontSize: "1.1rem !important",
    color: "#02354d !important",
    "& span": {
      paddingLeft: "8px",
      opacity: 0.8,
      verticalAlign: "middle",
    },
  },
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  nested: {
    //  paddingLeft: theme.spacing(4),
  },
  fileName: {
    fontSize: "14px",
    "& i": {
      marginRight: "15px",
      fontSize: "20px",
    },
  },
  recLinksItem: {
    paddingLeft: "0px !important",
    borderBottom: "1px solid #f1f1f1 !important",
    paddingTop: "6px",
    paddingBottom: "5px",
    "& :hover": {
      background: "#f8f8f8 !important",
    },
  },
  rectHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  topList: {
    padding: "0px !important",
    display:"flex",
    "& :last-child": {
      borderBottom: "none !important",
    },
  },
  linkItem: {
    paddingBottom: "0px!important",
    padding: "5px !important",
  },
  iconApp: {
    fontSize: "25px",
    minWidth: "35px",
  },

  createdTime: {
    display: "block",
    color: "#333333",
    fontSize: "12px",
    opacity: 0.5,
  },
  fileNameLink: {
    color: "#333333",
    display: "block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden;",
  },
  recentFileIcon: {
    float: "left",
    width: "38px",
  },
  recentFileDesc: {
    float: "left",
    width: "calc(100% - 55px)",
    paddingLeft: "15px",
  },
});

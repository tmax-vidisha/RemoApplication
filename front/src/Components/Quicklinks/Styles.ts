/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 360,
  },

  menuName: {
    color: "#333333",
    fontSize: "14px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    padding: "0",
    "& > a svg": {
      marginRight: "15px",
    },
  },
  linkHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  linkItem: {
    paddingBottom: "0px!important",
    padding: "5px !important",
  },
  iconApp: {
    fontSize: "25px",
    minWidth: "35px",
  },
  listItems: {
    margin: "15px",
    "& > :nth-child(odd)": { background: "#f4f4f6" },
  },
  quickLinksItem: {
    padding: "18px 15px",
    "& > :hover div": {
      color: "#009BAD !important",
    },
  },
  
});

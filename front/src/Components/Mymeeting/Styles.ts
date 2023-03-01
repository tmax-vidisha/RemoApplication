/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },

  meetHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  meetHeader2: {
    fontSize: "12px !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
    backgroundColor: "#e6ffe6",
    padding: "3px"
  },

  meetTime: {
    fontSize: "11px !important",
    color: "#B2B2B2 !important",
    marginBottom: "8px !important",
  },
  meetText: {
    fontSize: "12px !important",
    color: "black !important",
    opacity: "85%",
    // marginBottom: "6px !important",
    textAlign: "left"
  },
  meetBorder: {
    borderLeft: "1px solid #DDDDDD  !important",
    // height:"63px",
    opacity: "5",
    marginBottom: "10px !important",
    paddingBottom: "10px !important",
    marginLeft: "10px !important"
  },
  todo: {
    border: "none",
    height: "30px",
    textAlign: "center",
    fontSize: "12px",
    width: "70px",
    color: "gray",
    "& : hover": {
      color: "blue",
    },
    backgroundColor: "white",
    "& :hover": {
      backgroundColor: "#e1f5f3",
      height: "30px",
    }

  },

  task: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "15px",
    color: "blue",
    fontSize: "15px",
    "& span": {
      marginRight: "10px",
    },
  },
  calendarRoot: {
    "& .MuiInputBase-root": {
      border: "0",
      outline:"none",
      padding: "1px !important",
      fontSize: "12px",
      "& css-nxo287-MuiInputBase-input-MuiOutlinedInput-input":{
        padding:"1px !important",
      },
      "& .MuiInputBase-input": {
        padding: "1px !important"
      }

    },
  },
});

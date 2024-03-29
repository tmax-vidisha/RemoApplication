/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    margin: "auto",
    paddingLeft: "0px !important",
    ".css-1oqqzyl-MuiContainer-root": {
      // maxWidth: "1200px"
    },
  },
  marginDiv: {
    marginLeft: "20px",
    ["@media (max-width:768px)"]: {
      marginLeft: "5px",
    },
  },
  divContainer: {
    marginTop: "0px",
    marginRight: "0px",
    marginLeft: "0px",
    marginBottom: "0px",
    width: "100%",
    ["@media (max-width:768px)"]: {
      marginTop: "16px",
    },
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: "center",
  },
  bannerTop: {
    marginTop: 0,
  },
  containerWidth: {
    width: "90%",
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
    ["@media (max-width:768px)"]: {
      paddingLeft: "5px",
    },
  },
  bdayText: {
    color: "gray !important",
    fontSize: "12px !important",
  },
  wish: {
    color: "#009BAD !important",
    fontSize: "12px !important",
  },
});

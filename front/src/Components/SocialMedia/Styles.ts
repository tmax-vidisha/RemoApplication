/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "auto",
    //  maxwidth: "100%",
    //backgroundColor: theme.palette.background.paper,
  },
  tabWidth: {
    Width: "100%",
  },
  tabHeader: {
    borderRadius: "4px",
    backgroundColor: "transparent!important",
  },
  tab1Header: {
    minWidth: "68px !important",
    padding: "10px !important",
    // borderBottom:' 2px solid #00acee',
    backgroundColor: "#F5F7FB !important",
    color: "#00acee",
    ["@media (max-width:768px)"]: {
      minWidth: "68px !important",
      padding: "5px !important",
    },
  },
  tab2Header: {
    // minWidth: "68px!important",
    // borderBottom:' 2px solid #bc2a8d',
    backgroundColor: "#F5F7FB !important",
    color: "#bc2a8d",
    ["@media (max-width:768px)"]: {
      minWidth: "68px !important",
      padding: "5px !important",
    },
  },
  tab3Header: {
    // minWidth: "68px!important",
    // borderBottom:' 2px solid #bc2a8d',
    backgroundColor: "#F5F7FB !important",
    color: "#4267B2",
    ["@media (max-width:768px)"]: {
      minWidth: "68px !important",
      padding: "5px !important",
    },
  },
  tab4Header: {
    //minWidth: "68px!important",
    // borderBottom:' 2px solid #bc2a8d',
    backgroundColor: "#F5F7FB !important",
    color: "#0077b5",
    ["@media (max-width:768px)"]: {
      minWidth: "68px !important",
      padding: "5px !important",
    },
  },
  HeaderCta: {
    display: "flex",
    flex: " 1 1 auto",
    flexFlow: "row",
    justifyContent: "space-between !important",
    marginLeft: "15px",
    marginRight: "0px",
    ["@media (max-width:768px)"]: {
      display: "flex",
      justifyContent: "space-between !important",
      width: "100%",
      marginRight: " 34px",
      marginLeft: "0px",
    },
  },
  Header: {
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    height: "54px",
    padding: "10px",
    width: "285px",
    ["@media (max-width:768px)"]: {
      width: "85% !important",
    },
  },
  _aa4c: {
    width: "100%",
    ["@media (max-width:768px)"]: {
      width: "95%",
      minWidth: "280px !important",
    },
  },
});

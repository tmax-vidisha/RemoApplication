/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  MainPart: {
    height: "400px",
    width: "100%",
    backgroundColor: "white",
    marginLeft: "20px",
    paddingRight: "10px",
    //  padding: "30px",
    // margin:"30px",
    // marginRight:"50px",
    // paddingRight: '10px',
    //  border: "1px solid red",
    borderTopRightRadius: "9px",
    "@media (max-width:768px)": {
      marginLeft: "10px",
      paddingRight: "0px",
      marginRight: "10px",
      height: "400px",
    },
  },
  Section: {
    height: "auto",
    width: "100%",
    backgroundColor: "#d1eae33b",
    paddingRight: "55px",
    marginTop:"30px",
    // marginRight: '50px',
    //  border: "1px solid red",
    borderTopRightRadius: "9px",
    "@media (max-width:768px)": {
      paddingRight: "0px",
    },
  },
  bigPart: {
    marginRight: "25px",
    backgroundColor: "white",
    // marginTop: "20px",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "10px 1px 30px -10px #c2bcbc",
    ["@media (max-width:768px)"]: {
      marginRight: "0px",
    },
  },
  divFile: {
    color: "#009BAD",
    marginLeft: "30px",
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "left",
    ["@media (max-width:768px)"]: {
      marginLeft: "0px",
    },
  },
  mr10File: {
    marginRight: "10px",
    ["@media (max-width:768px)"]: {
      marginRight: "0px",
    },
  },
  breadcrumb: {
    color: "#009BAD",
  },
  // menuImage: {
  //   marginRight: "20px"
  // },
  // menu: {
  //   marginTop: "15px"
  // },

  // customMenuPopover: {
  //   // take note of !important because default z-index is applied inline
  //   zIndex: "1900 !important"
  // },

  // lastMenu: {
  //   marginTop: "107px",
  //   backgroundColor: "#e9fbfb",
  //   display: "flex",
  //   justifyContent:"center",
  //   padding: "10px",
  //   width: "100px",
  //   marginLeft:"77px"
  // },
  // items: {

  //   fontSize: "12px",

  //   "& img": {

  //     width: "10px",

  //     marginRight:"10px",

  //   }

  // }
});

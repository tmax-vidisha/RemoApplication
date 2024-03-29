/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  topItems: {
    display: "flex",
    justifyContent: "space-around",
  },

  button: {
    borderRadius: 14,
    width: 80,
    height: 50,
  },

  topClear: {
    justifyContent: "end !important",
    padding: "0 !important",
    right: "15px",
  },
  topClearLink: {
    display: "flex",
    background: "#f3f3f3",
    padding: "5px 9px",
    borderRadius: "30px",
    color: "#333333!important",
    fontSize: "14px",
    textDecoration: "none!important",
    alignItems: "end",
    "& svg": {
      fontSize: "14px !important",
      paddingLeft: "6px !important",
    },
  },
  topLink: {
    fontSize: "12px",
    color: "#333333 !important",
    textDecoration: "none !important",
    "& .topImg": {
      margin: "auto",
      display: "block",
    },
    "& .topImgH": {
      margin: "auto",
      display: "none",
    },
  },
  topMenu: {
    "&:hover a .topImg": {
      display: "none !important",
    },
    "&:hover a .topImgH": {
      display: "block !important",
    },

    "&:hover a p": {
      color: "#009BAD",
    },
  },
  topText: {
    margin: 0,
    marginTop: "16px",
    fontSize: "13px",
    color: "#acacac",
  },

  linkPart: {
    backgroundColor: "#33adff",
    color: "white",
    textTransform: "capitalize",
  },
  plus: {
    textAlign: "center",
    marginTop: "5px",
    marginRight: "10px",
    // backgroundColor:" white !important",
    color: "white !important",
  },

  quick: {
    marginTop: "5px",
    marginRight: "10px",
  },
  myFile: {
    display: "flex",
    justifyContent: "space-between",
  },
  create: {
    // backgroundColor: "rgb(50 168 189) !important",
    color: "white !important",
    marginRight: "15px !important",
    padding: "3px 8px !important",
  },

  createNew: {
    // backgroundColor: "rgb(50 168 189) !important",
    color: "white !important",
    // marginRight: "15px !important",
    padding: "3px 8px !important",
  },

  linkBtn: {
    backgroundColor: "rgb(50 168 189) !important",
    color: "white !important",
    marginRight: "30px !important",
    padding: "5px 10px !important",
  },
  bigPart: {
    backgroundColor: "white",
    marginTop: "20px",
    borderRadius: "10px",
    padding: "10px",
    ["@media (max-width:768px)"]: {},
  },
  divFile: {
    color: "#1b6189",
    marginLeft: "20px",
    marginTop: "20px",
    textAlign: "left",
    ["@media (max-width:768px)"]: {
      marginLeft: "0px",
    },
  },
  pl8file:{
    paddingLeft: "8px",
    ["@media (max-width:768px)"]: {
      paddingLeft: "0px",
    },
  },
  menuImage: {
    marginRight: "20px",
  },
  menu: {
    marginTop: "15px",
  },

  customMenuPopover: {
    // take note of !important because default z-index is applied inline
    zIndex: "1900 !important",
  },

  lastMenu: {
    // marginTop: "107px",
    backgroundColor: "#e9fbfb",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    width: "100px",
    // marginLeft: "77px"
  },

  items: {
    fontSize: "12px",
    "& img": {
      width: "10px",
      marginRight: "10px",
    },
  },
  dialogTitle: {
    position: "relative",
    fontFamily: "DM Sans , sans-serif !important",
    color: "#222222",
    fontSize: "20px !important",
    textAlign: "center",
    width: "80px",
    // verticalAlign: "center",
    // horizontalAlign: "center",
    alignItems: "center",

    "& img": {
      width: "80px",
    },
  },
  menuImageDelete: {
    marginRight: "20px",
    // position:"absolute",
    textTransform: "capitalize",
  },
  dialogFull: {
    position: "relative",
    width: "570px",
    borderRadius: "20px",
  },

  textListItem: {
    fontSize: "11px",
    marginLeft: "10px",
    color: "#606c74",
    "& span": {
      fontSize: "11px",
      textDecoration: "none",
      color: "#606c74",
    },
    "& span:hover": {
      color: "#009BAD",
    },

    "& img": {
      color: "#606c74",
      width: "15px",
    },
    "& img:hover": {
      color: "#009BAD",
    },
  },

  MuiListItemIcon: {
    minWidth: "25px !important",
    fontSize: "12px",
    color: "#333333 !important",
    "& .active": {
      color: "red",
    },
    textDecoration: "none !important",
    "& .topImg": {
      margin: "auto",
      display: "block !important",
      width: "15px",
    },
    "& .topImgH": {
      margin: "auto",
      color: "#009BAD",
      display: "none !important",
      width: "15px",
    },
  },
  leftMenu: {
    color: "#606C74",
    "&:hover": {
      color: "#1BAAB5",
    },
  },
  active: {
    color: "#009BAD",
    backgroundColor: "white",
  },

  topImg: {
    margin: "auto",
    display: "block !important",
    width: "15px",
  },

  topImgH: {
    margin: "auto",
    color: "#009BAD",
    display: "none !important",
    width: "15px",
  },

  LeftMenu: {
    // background: "#f8f8f8",
    // borderTop: "1px solid #d8d8dd",
    marginTop: "10px",
    paddingTop: "15px",
    marginBottom: "15px",
    margin: "0 -15px",
    AlignItems: "center",
    marginLeft: "5px",
    "& li": {
      padding: "15px 0px",
      textAlign: "center",
      // display: "flex !important",
      // borderBottom: "1px solid #f0ebeb",
      color: "#606C74",
      "&:hover": {
        color: "#1BAAB5",
      },

      // "&:hover": {
      //   color: "#1BAAB5",
      // },
    },
  },
  FirstLeftList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ["@media (max-width:768px)"]: {},
  },
  sideIcon: {
    marginBottom: "20px !important",
  },

  bigPaper: {
    //border: "1px solid #f1f1f1",
    boxShadow: "10px 1px 30px -10px #c2bcbc",
    //paddingTop:"40px",
    borderRadius: "20px",
    //paddingBottom: "20px",
    //marginTop: "20px",
    padding: "0px",
    margin: "50px",
    backgroundColor: "#d1eae33b",
    background: "#d1eae33b",
  },
  sideBar: {
    // marginLeft: "25px",
    height: "100%",
    backgroundColor: "#02354d",
    textAlign: "center",
    // width:"75px",
    borderRadius: " 20px 1px 1px 20px",
    ["@media (max-width:768px)"]: {
      height: "auto",
      width: "100%",
    },
  },
  mt210: {
    marginTop: "210",
    ["@media (max-width:768px)"]: {
      marginTop: "1px",
    },
  },

  flexEnd: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    ["@media (max-width:768px)"]: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  },
  boxContent: {
    width: "60px",
    height: "70px",
    border: "1px solid #eee7e7",
    boxShadow: "5px 3px 10px 4px #eee7e7",
    margin: "15px",
    padding: "10px",
    backgroundColor: "#e6ffff",
    borderRadius: "10px",
  },
  mainPart: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "20px",
    backgroundColor: "white",
    width: "300px",
  },
  texts: {
    fontSize: "12px",
    marginTop: "10px",
    color: "#1BAAB5",
    // color: "#606C74",
    // "&:hover": {
    //   color: "#1BAAB5",
    // },

    "& div": {
      fontSize: "12px",
      "& p": {
        fontSize: "12px",
      },
    },
  },
  upperSearch: {
    marginTop: "20px !important",
    position: "static",
    display: "flex",
    justifyContent: "flex-end",
    ["@media (max-width:768px)"]: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  },
  mbSearch: {
    marginBottom: "0px",
    ["@media (max-width:768px)"]: {
      marginBottom: "20px",
    },
  },
  shortSpan: {
    color: "#606c74",
    fontSize: "13px",
    marginRight: "10px",
  },
  shortBy: {
    color: "#606c74",
    fontSize: "14px",
  },
});

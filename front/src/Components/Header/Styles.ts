/* eslint-disable */
import { AppBar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import { makeStyles } from "@mui/styles";


export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: "inherit",
  background: "#02354D !important",
  "& .MuiButtonBase-root": {
    color: "#fff",
  },
  "& .MuiTypography-root": {
    color: "#fff",
  },
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiSvgIcon-root": {
    color: "#fff",
  },


}));



export const useStyles = makeStyles({

  footer: {
    backgroundColor: "White",
    boxShadow: "0 1px 10px 0 rgba(0, 0, 0, 0.12)",
    boxSizing: "border-box",
    width: "100%",
    textAlign: "center",
    padding: "30px 50px",
  },

  footerLeft: {
    "& p": {
      color: "#009BAD ",
      fontSize: "16px",
      margin: "0",
      fontFamily: "roboto"


    },

  },

  MuiSwitch: {
    // width: "100px",
    // height: "30px",
    // padding: "0px",
    // margin: "auto",
    // border: "1px solid red",
    "& css-julti5-MuiSwitch-root": {
      width: "150px",
      height: "45px",
      display: "inline-flex",
      overflow: "hidden",
      padding: "11px",
    }
  },
  switchBase: {
    color: "#818181",
    width: "130px",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#23bf58",

      }
    }
  },
  thumb: {
    color: "white",
    width: "20px",
    height: "20px",
    margin: "1px"
  },
  track: {
    width: "150px",
    borderRadius: "20px",
    backgroundColor: "#818181",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "white",
      fontSize: "11px",
      position: "absolute",
      top: "6px"
    },
    "&:after": {
      content: "'On'",
      left: "18px"
    },
    "&:before": {
      content: "'Off'",
      right: "17px"
    }
  },
  checked: {
    color: "#23bf58 !important",
    transform: "translateX(26px) !important"
  },

  textPart: {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    height: "30px",
    fontSize: "12px",
    marginTop: "10px"
  },

  link: {
    color: "#666666",
    textDecoration: "none"
  },

  // root: {
  //   width: "140px",
  //   height: "40px",
  //   padding: "0px"
  // },
  // switchBase: {
  //   color: "#818181",
  //   padding: "1px",
  //   "&$checked": {
  //     "& + $track": {
  //       backgroundColor: "#23bf58"
  //     }
  //   }
  // },
  // thumb: {
  //   color: "white",
  //   width: "20px",
  //   height: "20px",
  //   margin: "1px"
  // },
  // track: {
  //   borderRadius: "20px",
  //   backgroundColor: "#818181",
  //   opacity: "1 !important",
  //   "&:after, &:before": {
  //     color: "white",
  //     fontSize: "11px",
  //     position: "absolute",
  //     top: "6px"
  //   },
  //   "&:after": {
  //     content: "'On'",
  //     left: "8px"
  //   },
  //   "&:before": {
  //     content: "'Off'",
  //     right: "7px"
  //   }
  // },
  // checked: {
  //   color: "#23bf58 !important",
  //   transform: "translateX(26px) !important"
  // },


  profile: {
    fontSize: "12px !important",

    "& img": {
      width: "12px",
      marginRight: "10px",
    },
  },

  badge: {
    "& link": {
      "& span": {
        "& span": {
          color: "#009BAD"
        }
      }
    }
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
  // switch:{
  //   "& switch-left-right": {
  //     " & switch-label":{
  //      overflow: "hidden",

  //     },

  //     "& switch-label:before":{
  //       width: "20px",
  //       height: "20px",
  //       top: "4px",
  //       left:" 0",
  //       right: "0",
  //       bottom:" 0",
  //       padding: "11px 0 0 0",
  //       textIndent: "-12px",
  //       borderRadius: "20px",
  //       boxShadow: "inset 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 0 3px rgba(0, 0, 0, 0.1)",
  //     },
  //     "& switch-label:after":{
  //       width: "20px",
  //       height: "20px",
  //       top: "4px",
  //       left:" 0",
  //       right: "0",
  //       bottom:" 0",
  //       padding: "11px 0 0 0",
  //       textIndent: "-12px",
  //       borderRadius: "20px",
  //       boxShadow: "inset 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 0 3px rgba(0, 0, 0, 0.1)",
  //     },     
  //    },  
  //    "& switch-left-right, & switch-label:before": {
  //     background: "#eceeef",
  //     textAlign: "left",
  //     paddingLeft: "80px",
  //   },
  //   "& switch-left-right , & switch-input:checked ~ & switch-label:before ":{
  //     opacity: 1,
  //     left: "100px",
  //   },
  //   "& switch-left-right , & switch-input:checked ~ & switch-label:after ":{
  //     left: 0,
  //   },
  //   "switch-left-right .switch-input:checked ~ .switch-label":{
  //     background: "inherit",
  //   }

  // }
  
  // .switch-left-right .switch-label:before, .switch-left-right .switch-label:after {
  //   width: 20px;
  //   height: 20px;
  //   top: 4px;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   padding: 11px 0 0 0;
  //   text-indent: -12px;
  //   border-radius: 20px;
  //   box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 0 3px rgba(0, 0, 0, 0.1);
  // }
  // .switch-left-right .switch-label:before {
  //   background: #eceeef;
  //   text-align: left;
  //   padding-left: 80px;
  // }
  // .switch-left-right .switch-label:after {
  //   text-align: left;
  //   text-indent: 9px;
  //   background: #FF7F50;
  //   left: -100px;
  //   opacity: 1;
  //   width: 100%;
  // }
  // .switch-left-right .switch-input:checked ~ .switch-label:before {
  //   opacity: 1;
  //   left: 100px;
  // }
  // .switch-left-right .switch-input:checked ~ .switch-label:after {
  //   left: 0;
  // }
  // .switch-left-right .switch-input:checked ~ .switch-label {
  //   background: inherit;
  // }


});
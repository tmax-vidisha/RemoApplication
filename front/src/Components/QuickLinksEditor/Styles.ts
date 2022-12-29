import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    background: "#009BAD !important",
    color: "#ffffff !important",
    height: "315px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  annHeader: {
    paddingLeft: "16px",
    paddingTop: "15px",
    fontSize: "1rem !important",
    color: "#ffffff !important",
  },
  annTitle: {
    lineHeight: "24px!important",
    height: "50px",
    overflow: "hidden",
    color: "#ffffff !important",
    marginBottom: "10px",
    fontSize: "20px !important",
    textDecoration: "none",
    "& a": {
      color: "#ffffff !important",
      textDecoration: "none",
    }
  },
  annContents: {
    overflow: "hidden",
    color: "#ffffff !important",
    marginBottom: "10px",
    opacity: 0.8,
    "& a": {
      color: "#ffffff !important",
      textDecoration: "none",
    },
    "& a:focus": {
      color: "#ffffff !important",
    },
    "& a:hover": {
      color: "#ffffff !important",
    },
  },
  annDesc: {
    opacity: 0.8,
    height: "161px",
    overflow: "hidden",
  },
  readMore: {
    fontSize: " 12px",
    color: "#089DE3",
    "& span": {
      display: " inline-block",
      verticalAlign: " middle",
    },
    "& svg": {
      display: "inline-block",
      verticalAlign: "middle",
      fontSize: "18px",
    },
  },
  MainPart: {
     height: 550,
     width: '100%',
    backgroundColor: "white",
    marginLeft:"20px",
    paddingRight:"10px",
    //  padding: "30px",
    // margin:"30px",
    // marginRight:"50px",
    // paddingRight: '10px',
    //  border: "1px solid red",
    borderTopRightRadius: '9px',
  },
 Section: {
    height: 'auto',
     width: '100%',
    backgroundColor: "#d1eae33b",
   paddingRight: "55px",
    // marginRight: '50px',
    //  border: "1px solid red",
    borderTopRightRadius: '9px',
  },

  upperPart: {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px",
    paddingTop: "30px"
  },
  new: {
    width: "100px",
    backgroundColor: "#009BAD",
    borderRadius: "5px",
    marginRight: "20px",
    "& MuiButton": {
      color: "white !important",
      backgroundColor: "#009BAD",
      "& span": {
        color: "white !important",
        backgroundColor: "#009BAD",
      }
    }

  },
  create: {
    // backgroundColor: "rgb(50 168 189) !important",
    color: "white !important",
    marginRight: "15px !important",
    padding: "3px 8px !important",
  },
  plus: {
    textAlign: "center",
    marginTop: "5px",
    marginRight: "10px",
    // backgroundColor:" white !important",
    color: "white !important"
  },
  newPosOfDialog: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "1000%",
    width: "700%",
    overflowY: "hidden",
  },
  dropZone: {
    padding: "20px",
    textAlign: "center",
    border: "3px dashed #eeeeee",
    color: "#bdbdbd",
    backgroundColor: "#fafafa",
    marginBottom: "20px"

  },
  label: {
    float: "left",
    color: "#606C74 !important",
    textAlign: "left",
    margin: "10px !important",
    fontSize: "12px !important"

  },
  bigPaper: {
    //border: "1px solid #f1f1f1",
    boxShadow: "10px 1px 30px -10px #c2bcbc",
    //paddingTop:"40px",
    borderRadius: "20px",
    //paddingBottom: "20px",
    //marginTop: "20px",
    paddingRight: "50px",
    // margin: "30px",
    // marginRight:"0px",
    backgroundColor: "#d1eae33b",
    background: "#d1eae33b",
  },
  sideBar: {
    // marginLeft: "25px",
    height: "100%",
    backgroundColor: "#02354d",
    textAlign: "center",
    //width:"50px",
    borderRadius: " 20px 1px 1px 20px",

  },

  span: {
    display: "block",
    overflow: "hidden",
    color: "gray",
    // padding: "0px 4px 0px 6px"

    "& .MuiInputBase-root": {
      height: 30,
      color: "gray",
    }
  },

  file: {
    "& MuiBox-root .css-1ubo7yp": {
      borderColor: "red",
      "& MuiFormControl-root": {

        "& MuiSvgIcon": {
          color: "black",
          backgroundColor: "black"
        }
      }
    },

  },
  svg: {
    // display: "none !important",
    alignItems: "left",
    " & span": {
      display: "none !important",
    },
    "& button": {
      display: "block",
      color: "white",
      backgroundColor: "#b8bdc1",
      fontSize:"12px"
    }
  },

  backgroundImage: {
    backgroundSize: "cover",
    textAlign: "center",
    borderRadius: "8px",
    position: "relative",
    width: "500px"
  },
  girl: {
    position: "sticky", width: "100px", borderRadius: "50%", marginTop: "-54px"
  },
  iconDiv: {
    display: "flex", justifyContent: "space-between", width: "200px", margin: "15px"
  },
  iconView: {
    display: "flex", justifyContent: "space-between", width: "50px"
  },
  actionPart: {
    display: "flex", justifyContent: "space-between", width: "200px", marginRight: "350px"
  },
  saveBtn: {
    backgroundColor: "#009BAD !important",
    color: "white !important",
    textDecoration: "none"
  },
  cancelBtn: {
    backgroundColor: "#606C74 !important", color: "white !important"
  },
  actionDivTwo: {
    display: "flex", justifyContent: "space-between", width: "400px", marginRight: "150px"
  },
  titleIcon: {
    width: "13px",
    marginRight: "5px"
  },
  checkLike: {
    width: "15px",
    marginRight: "15px"
  },
  dialogTitle: {
    display: "flex", justifyContent: "space-between",
  },

  dialogBtn: {
    color: "#606C74 !important",
    fontSize: "12px"
  }


});
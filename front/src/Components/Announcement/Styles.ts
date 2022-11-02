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
    textDecoration:"none",
    "& a":{
      color: "#ffffff !important",
      textDecoration:"none",
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
  annDesc:{
    opacity:0.8,
    height:"161px",
    overflow:"hidden",
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
MainPart:{
  height: 450,
   width: '100%',
    backgroundColor:"white",
    padding:"30px",
},
upperPart:{
  display:"flex",
  justifyContent:"space-between",
margin:"30px",
paddingTop:"30px"
},
new:{
  width:"100px",
  backgroundColor:"#1dd0d8",
  
  borderRadius:"20px",
 "& MuiButton":{
  color:"white !important",
  }

},
newPosOfDialog: {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height:"1000%",
  width:"700%",
  overflowY:"hidden",
},
dropZone:{
  padding:"20px",
  textAlign:"center",
  border: "3px dashed #eeeeee",
  color: "#bdbdbd",
  backgroundColor:"#fafafa",
  marginBottom:"20px"

},
label: {
  float: "left"
},

span: {
  display: "block",
  overflow: "hidden",
  padding: "0px 4px 0px 6px"
}

});

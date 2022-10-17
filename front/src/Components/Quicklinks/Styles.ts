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
  boxContent:{
    width:"90px",
    height:"95px",
    border:"1px solid #eee7e7",
    boxShadow:"5px 3px 10px 4px #eee7e7",
    margin:"15px",
    padding:"10px",
    backgroundColor:"#e6ffe6",
    borderRadius:"10px",
    marginLeft:"5px"
  },
  mainPart:{
    display:"grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding:"20px",
    backgroundColor:"white",
    width:"250px",
    paddingTop:"5px"
  },
  texts:{
    fontSize:"12px",
    marginTop:"10px",
    color: "#1BAAB5",
    // color: "#606C74",
    // "&:hover": {
    //   color: "#1BAAB5",
    // },

    "& div":{
        fontSize:"12px",
        "& p":{
            fontSize:"12px",

        }
    }
  },

  linkPart: {
    backgroundColor: "#33adff",
    color: "white",
    textTransform: "capitalize"
  },
  plus: {
    textAlign: "center",
    marginTop: "5px",
    marginRight: "10px",
    // backgroundColor:" white !important",
    color: "white !important"
  },

  quick: {
    // marginTop: "5px",
    // marginRight: "10px"
    display:"flex",
    justifyContent:"space-between",

  },
  
  linkBtn: {
    backgroundColor: "rgb(50 168 189) !important",
    color: "white !important",
    marginRight: "30px !important",
    padding: "5px 10px !important"
  },
  ListItemText:{
    "& span":{
      fontSize:"12px",
    },
    " & p":{
      fontSize:"12px",
    }
  },
  meeting:{
    "& MuiButtonBase":{
      color: "gray !important", 
      textTransform: "capitalize !important",
       backgroundColor: " #e6ffe6 !important",
        border: "5px solid white !important",
         maxHeight: "55px !important", 
         width: "auto !important",
    },
    "& css-1e6y48t-MuiButtonBase-root-MuiButton-root":{
      color: "gray ", 
      textTransform: "capitalize ",
       backgroundColor: " #e6ffe6 ",
        border: "5px solid white ",
         maxHeight: "55px ", 
         width: "auto ",
    }
    
  }
});

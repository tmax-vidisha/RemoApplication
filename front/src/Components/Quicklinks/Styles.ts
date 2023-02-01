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
    width:"80px",
    height:"80px",
    border:"1px solid #eee7e7",
    boxShadow:"5px 3px 10px 4px #eee7e7",
    margin:"10px",
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
  quickLinkDiv:{
    paddingTop: "20px", 
    backgroundColor: "white",
     width: "260px", 
     borderRadius: "20px"
  },
  
  // boxContent:{
  //   width:"90px",
  //   height:"95px",
  //   border:"1px solid #eee7e7",
  //   boxShadow:"5px 3px 10px 4px #eee7e7",
  //   margin:"15px",
  //   padding:"10px",
  //   backgroundColor:"#e6ffe6",
  //   borderRadius:"10px",
  //   marginLeft:"5px"
  // },
  // mainPart:{
  //   display:"grid",
  //   gridTemplateColumns: "repeat(2, 1fr)",
  //   padding:"20px",
  //   backgroundColor:"white",
  //   width:"250px",
  //   paddingTop:"5px"
  // },
  // texts:{
  //   fontSize:"12px",
  //   marginTop:"10px",
  //   color: "#1BAAB5",
  //   // color: "#606C74",
  //   // "&:hover": {
  //   //   color: "#1BAAB5",
  //   // },

  //   "& div":{
  //       fontSize:"12px",
  //       "& p":{
  //           fontSize:"12px",

  //       }
  //   }
  // },

  // linkPart: {
  //   backgroundColor: "#33adff",
  //   color: "white",
  //   textTransform: "capitalize"
  // },
  // plus: {
  //   textAlign: "center",
  //   marginTop: "5px",
  //   marginRight: "10px",
  //   // backgroundColor:" white !important",
  //   color: "white !important"
  // },

  // quick: {
  //   // marginTop: "5px",
  //    //marginRight: "10px",
  //   display:"flex",
  //   justifyContent:"space-around",

  // },
  // linkBtn: {
  //   backgroundColor: "rgb(50 168 189) !important",
  //   color: "white !important",
  //   marginRight: "30px !important",
  //   padding: "5px 10px !important"
  // },

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
    
  },

  calendar:{
    fontSize:"12px",
    width:"240px",
    margin:"5px",
    border:"none",
    height:"275px",
    "& .react-calendar":{
      fontSize:"12px",
      maxWidth:"200px !important",
      width:"240px",
      "& .react-calendar__navigation":{
        display: "flex",
        height: "35px !important",
        marginBottom:" 1em",
      },
      "& .react-calendar__month-view__weekdays":{
        textTransform:"capitalize",
      },
      "& .react-calendar__month-view__days":{
        "& .react-calendar__tile ":{
          fontSize:"9px",
        }
      },
      "& .react-calendar button":{
        fontSize:"9px",
      }
    }
  },
  todo:{
    border:"none",
     height:"30px",
     textAlign:"center",
    fontSize:"12px",
    width:"70px",
    color:"gray",
    "& : hover":{
      color:"blue", 
    },
    backgroundColor:"white",
    "& :hover":{
      backgroundColor:"#e1f5f3",
      height:"30px",
    }
    
  },
});

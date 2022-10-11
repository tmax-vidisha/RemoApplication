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
    width:"60px",
    height:"70px",
    border:"1px solid #eee7e7",
    boxShadow:"5px 3px 10px 4px #eee7e7",
    margin:"15px",
    padding:"10px",
    backgroundColor:"#fff",
    borderRadius:"10px",
  },
  mainPart:{
    display:"grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding:"20px",
    backgroundColor:"gray",
    width:"300px"
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
});

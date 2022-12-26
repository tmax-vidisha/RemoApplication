/* eslint-disable */
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
 
  MuiListItemIcon: {
    minWidth: "35px",
    "& img": {
      width: "12px",
    }
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
    padding:"0px",
    margin:"50px"
  },
  sideBar: {
    // marginLeft: "25px",
    height: "100%",
    backgroundColor: "#02354d",
    textAlign: "center",
    //width:"50px",
    borderRadius:" 20px 1px 1px 20px",

  },

  textListItem: {
    fontSize: "12px",
    textAlign:"center",
    "& span": {
      fontSize: "12px",
      textAlign:"center",
    },

    " & img": {

    }
  },

  ListItemPart:{
    //border:"1px solid #eee7e7",
    //width:"80px",
    margin:"auto",
    marginBottom:"15px",
    borderRadius:"10px",
    boxShadow:"5px 3px 10px 4px #eee7e7",
    width:"80%",
    "& MuiListItem":{
        width:"80%",
    }

  },

  boxContent:{
    width:"150px",
    border:"1px solid #eee7e7",
    boxShadow:"5px 3px 10px 4px #eee7e7",
    margin:"15px",
    padding:"15px",
    backgroundColor:"#fff",
    borderRadius:"10px",
  },

  mainPart:{
    display:"grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding:"15px",
    "& :hover":{
      backgroundColor:"#009BAD",
      color:"white",
    }

  },
  texts:{
    fontSize:"12px",
    marginTop:"10px",
    color: "#1BAAB5",
    // color: "#606C74",
    "& div":{
        fontSize:"12px",
        "& p":{
            fontSize:"12px",
            color: "#1BAAB5",
            "&:hover": {
              color: "white",
            },
           
        }
    }
  },
  link:{
    color:"#009BAD",
    textDecoration:"none",
  },

  headText:{
    margin:"0px",
     padding:"20px",
      fontSize:"15px",
       fontWeight:"500",
   color: "#02354d",
   // color: "#606C74",
    // "&:hover": {
    //   color: "#1BAAB5",
    // },
  }

});


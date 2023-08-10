import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
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
    "@media (max-width:768px)": {
      paddingRight: "0px",
    },
  },
  m30: {
    margin: "30px",
    "@media (max-width:768px)": {
      margin: "10px",
    },
  },
  sideBar: {
    // marginLeft: "25px",
    height: "100%",
    backgroundColor: "#02354d",
    textAlign: "center",
    //width:"50px",
    borderRadius: " 20px 1px 1px 20px",
  },
});

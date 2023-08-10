/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainDiv: {
    height: "auto",
    width: "100%",
    backgroundColor: "#d1eae33b",
    paddingRight: "55px",
    // marginRight: '50px',
    //  border: "1px solid red",
    borderTopRightRadius: "9px",
    paddingTop: "40px",
    ["@media (max-width:768px)"]: {
      paddingRight: "5px",
    },
  },
  subDiv: {
    height: 550,
    width: "95%",
    backgroundColor: "white",
    marginLeft: "20px",
    paddingRight: "10px",
    padding: "30px",
    position: "relative",
    borderTopRightRadius: "9px",
    // margin:"30px",
    // marginRight:"50px",
    // paddingRight: '10px',
    //  border: "1px solid red",
    ["@media (max-width:768px)"]: {
      paddingRight: "5px",
      height: "auto",
      marginLeft: "0px",
       padding: "0px",
    },
  },
  picture: {
    marginLeft: "50px",
    position: "absolute",
    ["@media (max-width:768px)"]: {
      marginLeft: "5px",
    },
  },
});

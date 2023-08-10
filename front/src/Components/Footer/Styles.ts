/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  footer: {
    backgroundColor: "White",
    boxShadow: "0 1px 10px 0 rgba(0, 0, 0, 0.12)",
    boxSizing: "border-box",
    width: "100%",
    textAlign: "center",
    padding: "30px 50px",
    ["@media (max-width:768px)"]: {
      marginTop: "85px",
    },
  },

  footerLeft: {
    "& p": {
      color: "#009BAD ",
      fontSize: "16px",
      margin: "0",
      fontFamily: "roboto",
    },
  },
});

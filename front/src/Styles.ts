/* eslint-disable */
import { makeStyles  } from "@mui/styles";
import Image from "../src/Assets/Images/remoBanner.png";

export const useStyles = makeStyles ({
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  logo: {
    marginBottom: "20px",
    maxWidth: "173px",
    height: "45px",
  },
  paperContainer: {
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundImage: `linear-gradient(to right, #ffffff, rgba(117, 19, 93, 0%)), url(${Image})`,
    backgroundSize: "cover",
    color: "white",
    padding: "20px",
  },
  buttonColor: {
    backgroundColor: "#f87a1e",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: "white",
    marginTop: "25px",
    "& :hover": {
      //  backgroundColor:'#f87a1e',
    },
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: 600,
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    maxWidth: "400px",
    margin: "10px 0 0",
    marginTop: "20px",
    color: "#333333",
    marginBottom: "30px",
    fontSize: "15px",
    opacity: "0.9",
    lineHeight: "26px",
    fontWeight: 400,
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: 3,
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  welcomeItem: {
    position: "absolute",
    width: "auto",
    top: "40%",
    marginTop: "-80px",
    paddingLeft:"80px"
  },
  signInButton:{
    backgroundColor: '#f77a00!important',
    color:' #ffffff',
    padding: '6px 15px',
  }
});

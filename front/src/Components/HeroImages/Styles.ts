/* eslint-disable */
import background from "../../Assets/Images/inner-banner.png";

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  image: {
    //width:'350%',
    height: "305px",
    borderRadius: "8px",
    width: "100%",
  },
  text: {
    color: "white",
    //display:'flex',
    //marginTop:'100px',
    position: "relative",
    // fontWeight: "bold",
    margin: "0 2rem",
    bottom: "40px",
    //  left: "25px",
    //transform: "translate(-50%,-50%)",
    //marginRight:'0 2rem',
    //fontSize: "1em",
    //padding:'2px',
  },
  indicators: {
    marginTop: "-50px",
  },
  // heroStepper: {
  //   background: "none",
  //   padding: 0,
  //   position: "absolute",
  //   bottom: "28%",
  //   width: "60%",
  // },
  root: {
    maxWidth: "100%",
  },
  contentEditorWidth: {
    width: "100%",
    
  },
  cardHeight: {
    paddingTop: "20px",
    background: "transparent !important",
    boxShadow: "none",
    borderRadius:"10px"
  },
  contentHeader: {
    position: "relative",
    backgroundColor: "unset !important",
    paddingTop: "15px",
  },
  contentArea: {
    pl: "0px!important",
    pr: "0px !important",
    display: "flex",
    justifyContent: "space-between",
  },
  innerBackground: {
    background: `url(${background})`,
    height: "100px",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
    borderRadius: "8px",
    position: "relative",
  },
  innerBannerOverlay: {
    position: "absolute",
    width: "100%",
    backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0), rgb(2 53 77))`,
    height: "90%",
    color: "#ffffff",
    bottom: 0,
    borderRadius: "8px",
  },
  breadcrumbsHeader: {
    fontSize: "20px",
    lineHeight: "20px",
    paddingTop: "10px",
  },
  breadcrumbsLinks: {
    background: "#009BAD !important",
    height: "30px",
    textTransform: "capitalize",
  },
  breadcrumbs: {
    color: "#ffffff!important",
    display: "inline-flex",
    opacity: 0.8,
  },
  breadLinks: {
    color: "#ffffff !important",
    opacity: 0.8,
    textDecoration: "none !important",
  },
  ceoContent: {
    width: "100%",
    display: "block",
    marginTop: "7px",
    opacity: 0.6,
    paddingRight: "10px",
  },

  videoContent:{
    // position:"relative",
    // border:"1px solid red"
     
  },
  video:{
    height: '253px',
    display: "block",
    overflow: "hidden",
    width: "100%",
    borderRadius: "5px",
    // position: "relative",
    paddingBottom: "0px !important"
  },
  displayImg:{
    height: '253px',
    display: "block",
    overflow: "hidden",
    width: "100%",
    borderRadius: "5px",
    position: "relative",
    paddingBottom: "0px !important"
  },
  videoTitle:{
    position: "absolute", 
    color: "white",
    top: '70%',
    left: '34%',
    transform: "translateX(-50%)",
    textAlign:"left",
    cursor:"pointer",
  },
  exploreBtn:{
    position:"absolute",
    color:"white",
    backgroundColor: "#009BAD",
    bottom:"3%",
    left:"25%",
    cursor:"pointer",
    border:"none",
    borderRadius:"5px",
    textAlign:"center",
    display:"flex",
    justifyContent:"space-between",

 },
 bannerTitle:{

 }
  
});

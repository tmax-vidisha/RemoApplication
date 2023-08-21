/* eslint-disable */
import { makeStyles } from "@mui/styles";
import background from "../../Assets/Images/inner-banner.png";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  contentEditorWidth: {
    width: "95%",
  },
  nationHeader: {
    width: "350px",
    textAlign: "left",
    marginLeft: "10px",
    fontWeight: "600",
    ["@media (max-width:768px)"]: {
      width: "100%",
      marginLeft: "0px",
    },
  },
  nationalMainImg: {
    minWidth: "450px",
    height: "280px",
    borderRadius: "10px",
    ["@media (max-width:768px)"]: {
      minWidth: "100%",
      width: "100%",
      height: "100%",
    },
  },
  description: {
    width: "500px",
    fontSize: "12px",
    textAlign: "left",
    margin: "20px",
    ["@media (max-width:768px)"]: {
      width: "100%",
      margin: "5px",
    },
  },
  mainSubDiv: {
    borderRight: "1px solid #e6e6e6",
    paddingRight: "20px",
    marginRight: "50px",
    ["@media (max-width:768px)"]: {
      marginRight: "5px",
    },
  },
  naNewsImage: {
    width: "100%",
    height: "280px",
    borderRadius: "10px",
    ["@media (max-width:768px)"]: {
      width: "max-content",
      maxWidth: "280px",
      padding: "0px",
      marginRight: "58px",
    },
  },
  cardHeight: {
    paddingTop: "20px",
    background: "transparent !important",
    boxShadow: "none",
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
  createdDateNews: {
    alignItems: "center",
    display: "flex !important",
    color: " #333333!important",
    paddingTop: 0,
    marginBottom: "0 !important",
    opacity: 0.7,
    fontSize: " 12px!important",
    "& svg": {
      paddingRight: "7px",
      opacity: 0.6,
    },
  },
  contentRoot: {
    display: "flex",
    width: "100%",
    marginTop: "20px",
    borderRadius: "8px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  newsImg: {
    paddingTop: "56.25%",
    borderRadius: "8px",
  },
  createdDate: {
    paddingTop: "5px",
  },
  link: {
    display: "flex",
  },
  icon: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  moreNews: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  },
  moreNewsItem: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  moreNewsTag: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center !important",
    "& span": {
      "& a": {
        textDecoration: "none",
        color: "#009BAD",
      },
    },
  },
  newsTag: {
    flexGrow: 1,
  },
  moreNewsIcon: {
    width: "120px",
    height: "80px",
  },
  moreNewsText: {
    width: "calc(100% - 120px)",
    float: "left",
    paddingLeft: "12px",
  },
  newsRightBorder: {
    borderRight: " 1px solid #F1F1F1 !important",
  },

  textPart: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    height: "30px",
    fontSize: "12px",
    margin: "10px",
  },
  MultiCarousel: {
    float: "left",
    overflow: "hidden",
    padding: "15px",
    width: "100%",
    position: "relative",
  },

  upperContent: {
    backgroundColor: "white",
    borderTopLeftRadius: "7px",
  },
  firstContent: {
    borderRight: "1px solid #e6e6e6",
    paddingRight: "20px",
    // marginRight: "50px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    ["@media (max-width:768px)"]: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  },
  bigText: {
    width: "310px",
    textAlign: "left",
    marginLeft: "10px",
    fontWeight: "600",
    ["@media (max-width:768px)"]: {
      width: "100%",
    },
  },
  refText: {
    fontSize: "10px",
    width: "150px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    ["@media (max-width:768px)"]: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  },
  fieldImage: {
    width: "230px",
    height: "120px",
    borderRadius: "8px",
  },
  imgBox: {
    width: "230px",
    height: "120px",
  },
  imgDetails: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    ["@media (max-width:768px)"]: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
});

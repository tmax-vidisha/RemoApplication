import { makeStyles } from "@mui/styles";
import background from "../../Assets/Images/inner-banner.png";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  contentEditorWidth: {
    width: "95%",
  },
  cardHeight: {
    paddingBottom: "20px",
    background: "transparent !important",
    boxShadow: "none",
    position: "relative",
  },
  contentHeader: {
    position: "relative",
    backgroundColor: "unset !important",
    paddingTop: "25px",
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

  outerImage: {
    width: "100%",
    backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0), rgb(2 53 77))`,
  },
  breadcrumbsHeader: {
    fontSize: "20px",
    lineHeight: "30px",
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
  mainDepart: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    "@media (max-width:768px)": {
      display: "flex",
      flexDirection: "row",
    },
  },
  imgPart: {
    width: "30%",
    float: "left",
    paddingTop: "30px",
    "@media (max-width:768px)": {
      width: "100%",
    },
  },
  imgFlag: {
    width: "290px",
    height: "200px",
    borderRadius: "10px",
  },
  contentPart: {
    width: "70%",
    float: "right",
    textAlign: "left",
    paddingLeft: "15px",
    paddingRight: "15px",
    "@media (max-width:768px)": {
      width: "100%",
    },
  },
  PContent: {
    color: "#a09e9e",
  },
  PaperContent: {
    padding: "15px",
    borderRadius: "8px",
    background: "#ffffff",
  },
  headText: {
    margin: "0px",
    padding: "20px",
    fontSize: "15px",
    fontWeight: "500",
    color: "#009BAD",
    // color: "#606C74",
    // "&:hover": {
    //   color: "#1BAAB5",
    // },
  },
  Listlink: {
    color: "#606C74",

    textDecoration: "none",
    "& hover": {
      color: "#009BAD",
    },
    "& .topImg": {
      margin: "auto",
      display: "block !important",
    },
    "& .topImgH": {
      margin: "auto",
      display: "none !important",
    },
  },
  textListItem: {
    fontSize: "12px",
    textAlign: "left",
    "& span": {
      fontSize: "12px",
      textAlign: "center",
    },

    " & img": {},
  },

  ListItemPart: {
    //border:"1px solid #eee7e7",
    //width:"80px",
    margin: "auto",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow: "5px 3px 10px 4px #eee7e7",
    width: "80%",
    "& MuiListItem": {
      width: "80%",
    },
  },
});

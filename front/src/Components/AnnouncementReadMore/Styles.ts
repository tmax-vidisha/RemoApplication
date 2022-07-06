/* eslint-disable */
import { makeStyles } from "@mui/styles";
import background from "../../Assets/Images/inner-banner.png";

export const useStyles = makeStyles({
  contentEditorWidth: {
    width: "95%",
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
  ceoCreatedDate: {
    color: "#009BAD !important",
    paddingBottom: "20px",
  },
  root: {
    maxWidth: "100%",
  },

  topWidth: {
    width: "95%",
    marginTop: "15px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    // transition: theme.transitions.create("transform", {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {},

  annHeader: {
    width: "auto-fit",
    fontSize: "1.5rem !important",
    lineHeight: "1.35 !important",
    "& h6": {
      fontSize: "1.5rem !important",
    },
  },
  annContents: {
    width: "100%",
    display: "block",
    marginTop: "7px",
    opacity: 0.6,
    paddingRight: "10px",
  },
});

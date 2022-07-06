/* eslint-disable */
import { makeStyles  } from "@mui/styles";
import background from "../../Assets/Images/inner-banner.png";

export const useStyles = makeStyles ({
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
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  evenLeft: {
    width: "72px",
    height: "72px",
    background: "#F0F9FA",
    color: "#009bad",
    borderRadius: "50%",
    textAlign: "center",
    float: "left",
    paddingTop: "11px",
    "& h2": {
      fontSize: "28px",
      marginBottom: 0,
      fontWeight: 400,
    },
    "& p": {
      marginBottom: 0,
    },
  },
  evenRight: {
    width: "calc(100% - 72px)",
    float: "left",
    paddingLeft: "15px",
    paddingTop: "7px",
  },
  itemStyle: {
    listStyle: "none",
  },
  eventTitle: {
    height: "29px",
    overflow: "hidden",
  },
});

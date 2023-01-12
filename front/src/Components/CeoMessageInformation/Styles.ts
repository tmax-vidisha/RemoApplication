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
    paddingBottom: "10px",
    textAlign:"left"
  },
  contentRoot: {
    display: "flex",
    width: "100%",
    marginTop: "20px",
    borderRadius: "8px",
  },
 
  ceoImg: {
    paddingTop: "20px",
    width: " 30%",
    float: "left",
    paddingRight: "15px",
    marginRight: "15px",
    borderRight: "1px solid #f1f1f1",
  },
  ceoContent: {
    width: "100%",
    display: "block",
    marginTop: "7px",
    opacity: 0.6,
    paddingRight: "10px",
    marginBottom:"10px"
  },
  ceoContentHeader: {
    width: "auto-fit",
    "& h6": {
      fontSize: "1.5rem !important",
      textAlign:"left"
    },
  },
});

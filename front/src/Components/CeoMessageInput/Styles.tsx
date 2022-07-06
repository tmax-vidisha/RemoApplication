/* eslint-disable */
import { red } from "@mui/material/colors";
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
    paddingTop: "21px",
  },
  contentArea: {
    paddingLeft: "0px!important",
    paddingRight: "0px !important",
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
  richEditor: {
    border: "1px solid silver",
    padding: "2px",
    minHeight: "unset",
    borderRadius: "4px",
    height: "220px",
    overflow: "auto",
  },
  toolbarClass: {
    visibility: "visible",
    border: "none",
    borderBottom: "1px solid #d7d7d7",
  },
  rootButton: {
    textAlign: "center",
    "& > *": {},
  },
  tableCell: {
    "& tr": {
      fontSize: "12px !important",
      padding: "10px!important",
      color: "rgb(51 51 51 / 80%) !important",
    },
  },
  tableDesc: {
    overflow: "hidden",
    height: "35px",
    display: "block !important",
    margin: 0,
  },
  tableHeader: {
    "& th": {
      color: "#02354d !important",
      borderBottom: "none !important",
      background: "rgb(2 53 77 / 5%)",
      padding: "10px!important",
    },
  },
  tableStatusNo: {
    background: "#c9c9c9",
    color: "#ffffff",
    width: "40px",
    display: "inline-block",
    height: "20px",
    lineHeight: "20px",
    textAlign: "center",
    borderRadius: "30px",
  },
  tableStatusYes: {
    background: "#4caf50",
    color: "#ffffff",
    width: "40px",
    display: "inline-block",
    height: "20px",
    lineHeight: "20px",
    textAlign: "center",
    borderRadius: "30px",
  },
  buttonSubmit: {
    background: "#009BAD !important",
    height: "30px",
    textTransform: "capitalize",
  },
  buttonClear: {
    color: "#555555",
    marginLeft: "20px !important",
  },
});

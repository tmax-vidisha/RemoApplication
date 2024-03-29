import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  ".css-46bh2p-MuiCardContent-root:last-child": {
    paddingBottom: "16px",
  },
  ".css-46bh2p-MuiCardContent-root": {
    padding: "16px",
  },
  contentRoot: {
    display: "flex",
    width: "100%",
    fontSize: "1rem !important",
    marginBottom: "0px !important",
    textAlign: "left",
    "@media (max-width:768px)": {
      // eslint-disable-line no-useless-computed-key
      width: "100%",
    },
  },
  ceoImg: {
    //   paddingTop: "50px",
  },
  ceoTopTitle: {
    //padding: "10px 16px",
  },
  ceoContentTop: {
    width: "60%",
    //  padding: "12px 16px 16px 16px",
  },
  headRow: {
    fontSize: "0.87rem !important",
    marginBottom: "10px!important",
    lineHeight: "18px!important",
    marginTop: " 12px !important",
  },
  ceoContent: {
    display: "block",
    overflow: "hidden",
    height: "117px",
    width: "100%",
    marginTop: "7px",
    opacity: 0.6,
    paddingRight: "10px",
    "@media (max-width:768px)": {
      width: "100%",
    },
  },
  readMore: {
    fontSize: " 12px",
    color: "#089DE3",
    "& span": {
      display: " inline-block",
      verticalAlign: " middle",
    },
    "& svg": {
      display: "inline-block",
      verticalAlign: "middle",
      fontSize: "18px",
    },
  },
  ceoHeader: {
    /// paddingLeft: "16px",
    // paddingTop: "15px",
    fontSize: "1rem !important",
    color: "#009BAD !important",
  },
  empContent: {
    display: "flex",
  },
  empRightContentArea: {
    marginLeft: "10%",
  },
});

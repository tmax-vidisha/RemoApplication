/* eslint-disable */
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  galleryWidth: {
    overflow: "hidden",
    height: "300px",
    "& div": {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  },
  galleryContainer: {
    float: "left",
    width: "calc(50% - 5px)",
    padding: "0px",
    paddingBottom: "10px",
    height: "141px",
    overflow: "hidden",
  },
  galleryImageWidth: {
    width: "auto",
    height: "auto",
    borderRadius: "4px",
    minHeight: "100%",
    minWidth: "100%",
  },
  rectHeader: {
    paddingLeft: "16px",
    paddingTop: "15px",
    fontSize: "1rem !important",
    color: "#009BAD !important",
  },
  galleryHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
});

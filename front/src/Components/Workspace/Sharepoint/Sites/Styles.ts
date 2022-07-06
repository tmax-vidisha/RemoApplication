/* eslint-disable */
import { createStyles, makeStyles, useTheme } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: "20px",
    },
    bannerTop: {
      marginTop: 5,
    },
    workspaceHeader: {
      display: "flex",
      marginBottom: "7px",
      padding: "16px",
      paddingBottom: 0,
    },
    workspaceTopHeader: {
      fontSize: "1.1rem !important",
      color: "#02354d !important",
      "& span": {
        paddingLeft: "8px",
        opacity: 0.8,
        verticalAlign: "middle",
      },
    },
    tableRow: {
      "& td .contextMenuItems": {
        display: "none",
      },
      "&:hover .contextMenuItems": {
        display: "block !important",
      },
    },
    folderSize: {
      width: "22px",
      margin: "auto",
     
    },
    folderDesign:{
      display: "inline-block",
      "& i": {
        verticalAlign: "middle",
        width:"auto",
        height:"auto",
      },
    },
    tableHeader: {
      "& th": {
        color: "#02354d !important",
        borderBottom: "none !important",
        background: "rgb(2 53 77 / 5%)",
        padding: "10px!important",
      },
    },
    tableCell: {
      padding: "6px 10px !important",
      lineHeight: "40px !important",
      "& img": {
        display: "inline-block",
        verticalAlign: "middle",
      },
      "& span": {
        // display: "inline-block",
        verticalAlign: "middle",
        paddingLeft: "7px",
      },
    },
  })
);

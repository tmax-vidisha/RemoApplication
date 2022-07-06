/* eslint-disable */
import { createStyles, makeStyles, useTheme } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: "20px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    bannerTop: {
      marginTop: 5,
    },
    containerWidth: {
      width: "95%",
    },
    drive: {
      "& span": {
        fontSize: "1.2rem !important",
        padding: "6px 15px",
      },
    },
    folderIcons: {
      minWidth: "unset !important",
      "& .myFilesHover": {
        display: "none",
      },
      "& .myFiles": {
        display: "block",
      },
    },
    driveIcons: {
      display: "inline-block !important",
      width: "100%",
    
      "& div span": {
        fontSize: "11px !important",
        color:"#333333",
      },
      "&:hover .myFiles": {
        display: "none !important",
      },
      "&:hover .myFilesHover": {
        display: "block !important",
        color: "red",
      },
    },
    folderText: {
      "& span": {
        fontSize: "0.8rem",
        opacity: 0.8,
      },
    },
    folderContentArea: {
      display: "inline-block!important",
    },
    folderSize: {
      width: "60px",
      margin: "auto",
    },
    folderName: {
      marginTop: "0 !important",
      "& span": {
        fontSize: "11px",
        opacity: 0.9,
        height: "33px",
        overflow: "hidden",
      },
    },
    folderSubIcons: {
      minWidth: "unset !important",
    },
    fileArea: {
      padding: "8px !important",
    },
    contextMenuItem: {
      position: "absolute",
      display: "none",
      borderRadius: "8px",
      width: "127px",
      top: "13px",
      left: "94%",
      background: "#ffffff",
      zIndex: 99,
      boxShadow: "0px 0px 10px #dadada",
    },
    contextMenuUl: {
      paddingLeft: 0,
      listStyle: "none",
      margin: 0,
    },
    contextMenuLi: {
      fontSize: "14px",
      padding: "10px",
      borderBottom: "1px solid #e4e4e4",
    },
    workspaceHeader: {
      display: "flex",
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
  })
);

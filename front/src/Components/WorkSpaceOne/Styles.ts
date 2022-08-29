/* eslint-disable */
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  topItems: {
    display: "flex",
    justifyContent: "space-around",

  },
  button: {
    borderRadius: 14,
    width: 80,
    height: 50,
  },

  topClear: {
    justifyContent: "end !important",
    padding: "0 !important",
    right: "15px",
  },
  topClearLink: {
    display: "flex",
    background: "#f3f3f3",
    padding: "5px 9px",
    borderRadius: "30px",
    color: "#333333!important",
    fontSize: "14px",
    textDecoration: "none!important",
    alignItems: "end",
    "& svg": {
      fontSize: "14px !important",
      paddingLeft: "6px !important",
    },
  },
  topLink: {
    fontSize: "12px",
    color: "#333333 !important",
    textDecoration: "none !important",
    "& .topImg": {
      margin: "auto",
      display: "block",
    },
    "& .topImgH": {
      margin: "auto",
      display: "none",
    },
  },
  topMenu: {
    "&:hover a .topImg": {
      display: "none !important",
    },
    "&:hover a .topImgH": {
      display: "block !important"
    },

    "&:hover a p": {
      color: "#009BAD"
    },
  },
  topText: {
    margin: 0,
    marginTop: "16px",
    fontSize: "13px",
    color: "#acacac",
  },

  linkPart: {
    backgroundColor:"#33adff", 
    color:"white",
     textTransform:"capitalize"
  },
  plus:{
    textAlign:"center",
    marginTop:"5px",
  },

  quick:{
    marginTop:"5px",
    marginRight:"5px"

  }

});

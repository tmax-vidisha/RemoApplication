import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    bgcolor: "background.paper",
    paddingTop: "16px!important",
    paddingBottom: "16px!important",
    "& react-calendar__month-view__weekdays": {
      textTransform: "capitalize",
      fontWeight: "200",
    },
  },
  Calendar: {
    border: "1px solid white",
    // paddingLeft:"12px",
    borderBottom: "1px solid #F1F1F1",
    paddingBottom: "20px",
    margin: "auto",
  },
  calContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@media (max-width:768px)": {
      marginRight: "70px",
    },
  },
  calendar: {
    fontSize: "12px",
    width: "260px !important",
    margin: "5px",
    border: "1px solid gray",
    height: "275px",
    "& .react-calendar": {
      fontSize: "12px",
      maxWidth: "200px !important",
      width: "240px !important",
      "& .react-calendar__navigation": {
        display: "flex",
        height: "35px !important",
        marginBottom: " 1em",
      },
      "& .react-calendar__month-view__weekdays": {
        textTransform: "capitalize",
      },
      "& .react-calendar__month-view__days": {
        "& .react-calendar__tile ": {
          fontSize: "9px",
        },
      },
      "& .react-calendar button": {
        fontSize: "9px",
      },
    },
  },
  calenderHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  calenderHeader2: {
    fontSize: "0.8rem !important",
    color: "#009BAD !important",
    marginBottom: "8px !important",
    textDecoration: "none !important",
  },
  border: {
    border: "1px solid #837c7c17",
    "& react-calendar__month-view__weekdays": {
      textTransform: "capitalize",
    },
    "& .react-calendar": {
      width: "240px !important",
      maxWidth: "100%",
    },
    "@media (max-width:768px)": {
      "& .react-calendar": {
        width: "240px !important",
        maxWidth: "100%",
      },
    },
  },
  "& .react-calendar": {
    width: "350px",
    maxWidth: "100%",
    "@media (max-width:768px)": {
      width: "240px !important",
      maxWidth: "100%",
    },
  },
  calenderinfo: {
    paddingLeft: "15px",
    paddingBottom: "20px",
  },

  // bullet: {
  //   "::maker": {
  //     color: "red",
  //     fontWeight: "bold",
  //     display: "inline-block",

  //   },
  // },
  list: {
    listStyle: "none",
    paddingLeft: "23px",
    fontSize: "13px",
    opacity: "60%",
  },
  // weather: {
  //   display: "inline-block !important",
  //   paddingTop: "0px!important",
  //   paddingBottom: "0!important",
  //   "& > h4": {
  //     fontSize: "12px",
  //     marginBottom: "10px",
  //   },
  //   "& > h1": {
  //     fontSize: "26px",
  //     color: "#009BAD",
  //     marginBottom: "5px",
  //     lineHeight: "26px",
  //   },
  //   "& > div": {

  //     lineHeight: "13px",
  //     paddingTop: "3px",
  //   },
  // },
  // currency: {
  //   display: "inline-block !important",
  //   paddingTop: "0px!important",
  //   paddingBottom: "0!important",
  //   "& > h4": {
  //     fontSize: "12px",
  //     marginBottom: "10px",
  //   },
  //   "& > h1": {
  //     fontSize: "26px",
  //     color: "#009BAD",
  //     marginBottom: "5px",
  //     lineHeight: "26px",
  //   },
  //   "& > div": {
  //     lineHeight: "13px",
  //     paddingTop: "3px",

  //   },
  // },
});

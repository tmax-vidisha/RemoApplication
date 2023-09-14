/* eslint-disable */
/* eslint-disable */
import background from "../../Assets/Images/inner-banner.png";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  image: {
    //width:'350%',
    height: "305px",
    borderRadius: "8px",
    width: "100%",
  },
  text: {
    color: "white",
    //display:'flex',
    //marginTop:'100px',
    position: "relative",
    // fontWeight: "bold",
    margin: "0 2rem",
    bottom: "40px",
    //  left: "25px",
    //transform: "translate(-50%,-50%)",
    //marginRight:'0 2rem',
    //fontSize: "1em",
    //padding:'2px',
  },
  indicators: {
    marginTop: "-50px",
  },
  // heroStepper: {
  //   background: "none",
  //   padding: 0,
  //   position: "absolute",
  //   bottom: "28%",
  //   width: "60%",
  // },
  root: {
    maxWidth: "100%",
  },
  contentEditorWidth: {
    width: "100%",
  },
  cardHeight: {
    paddingTop: "20px",
    background: "transparent !important",
    boxShadow: "none",
    borderRadius: "10px",
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
  ceoContent: {
    width: "100%",
    display: "block",
    marginTop: "7px",
    opacity: 0.6,
    paddingRight: "10px",
  },

  menuName: {
    color: "#333333",
    fontSize: "14px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    padding: "0",
    "& > a svg": {
      marginRight: "15px",
    },
  },
  linkHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  linkItem: {
    paddingBottom: "0px!important",
    padding: "5px !important",
  },
  iconApp: {
    fontSize: "25px",
    minWidth: "35px",
  },
  listItems: {
    margin: "15px",
    "& > :nth-child(odd)": { background: "#f4f4f6" },
  },
  quickLinksItem: {
    padding: "18px 15px",
    "& > :hover div": {
      color: "#009BAD !important",
    },
  },
  boxContent: {
    width: "80px",
    height: "80px",
    border: "1px solid #eee7e7",
    boxShadow: "5px 3px 10px 4px #eee7e7",
    margin: "10px",
    padding: "10px",
    backgroundColor: "#e6ffe6",
    borderRadius: "10px",
    marginLeft: "5px",
  },
  mainDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    ["@media (max-width:768px)"]: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    },
  },
  mainPart: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "20px",
    backgroundColor: "white",
    width: "250px",
    paddingTop: "5px",
  },
  texts: {
    fontSize: "12px",
    marginTop: "10px",
    color: "#1BAAB5",
    // color: "#606C74",
    // "&:hover": {
    //   color: "#1BAAB5",
    // },

    "& div": {
      fontSize: "12px",
      "& p": {
        fontSize: "12px",
      },
    },
  },
  linkText: {
    color: "#009BAD !important",
    textDecoration: "none",
  },

  linkPart: {
    backgroundColor: "#33adff",
    color: "white",
    textTransform: "capitalize",
  },
  plus: {
    textAlign: "center",
    marginTop: "5px",
    marginRight: "10px",
    // backgroundColor:" white !important",
    color: "white !important",
  },

  quick: {
    // marginTop: "5px",
    // marginRight: "10px"
    display: "flex",
    justifyContent: "space-between",
  },

  linkBtn: {
    backgroundColor: "rgb(50 168 189) !important",
    color: "white !important",
    marginRight: "30px !important",
    padding: "5px 10px !important",
  },
  quickLinkDiv: {
    paddingTop: "20px",
    backgroundColor: "white",
    width: "260px",
    borderRadius: "10px",
    ["@media (max-width:768px)"]: {
      marginTop: "15px",
    },
  },
  OrgBox: {
    width: "150px",
    height: "auto",
    border: "1px solid #eee7e7",
    boxShadow: "5px 3px 10px 4px #eee7e7",
    margin: "15px",
    padding: "10px",
    backgroundColor: "#f0f6f094",
    borderRadius: "10px",
    marginLeft: "5px",
    position: "relative",
  },
  orgImg: {
    width: "50px",
    borderRadius: "50%",
    position: "absolute",
    //  margin:"-40px",
    marginTop: "-35px",
    marginLeft: "-23px",
  },
  pTextOrg: {
    color: "#009BAD",
    margin: "0px",
    paddingTop: "30px",
    fontSize: "12px",
  },
  TextOrg: {
    color: "#606C74",
    margin: "0px",
    paddingTop: "10px",
    fontSize: "12px",
  },
  plusMinus: {
    width: "20px",
    height: "20px",
    backgroundColor: "#009BAD",
    position: "absolute",
    cursor: "pointer",
    borderRadius: "50%",
    marginLeft: "-15px",
  },

  ListItemText: {
    "& span": {
      fontSize: "12px",
    },
    " & p": {
      fontSize: "12px",
    },
  },
  meeting: {
    "& MuiButtonBase": {
      color: "gray !important",
      textTransform: "capitalize !important",
      backgroundColor: " #e6ffe6 !important",
      border: "5px solid white !important",
      maxHeight: "55px !important",
      width: "auto !important",
    },
    "& css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
      color: "gray ",
      textTransform: "capitalize ",
      backgroundColor: " #e6ffe6 ",
      border: "5px solid white ",
      maxHeight: "55px ",
      width: "auto ",
    },
  },

  calendar: {
    fontSize: "12px",
    width: "240px !important",
    margin: "5px",
    border: "none",
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
  todo: {
    border: "none",
    height: "30px",
    textAlign: "center",
    fontSize: "12px",
    width: "70px",
    color: "gray",
    "& : hover": {
      color: "blue",
    },
    backgroundColor: "white",
    "& :hover": {
      backgroundColor: "#e1f5f3",
      height: "30px",
    },
  },
});

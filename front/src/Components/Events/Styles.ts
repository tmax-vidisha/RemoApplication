/* eslint-disable */
// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles({
//   rootTitle: {
//     // display: "flex",
//     // padding:"10px!important",
//     "& :last-child": {
//       borderBottom: "none!important",
//       marginBottom: 0,
//       paddingBottom: 0,
//     },
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
//   evenLeft: {
//     width: "70px",
//     height: "70px",
//     background: "#F0F9FA",
//     color: "#009bad",
//     borderRadius: "50%",
//     textAlign: "center",
//     float: "left",
//     fontSize: "26px",
//     "& h2": {
//       fontSize: "26px",
//       fontWeight: 400,
//       marginTop: "10px",
//       marginBottom: 0,
//     },
//     "& p": {
//       fontSize: "13px",
//       opacity: 0.8,
//       marginTop: "4px !important",
//     },
//   },
//   evenRight: {
//     width: "calc(100% - 85px)",
//     float: "left",
//     paddingLeft: "15px",
//     paddingTop: "0px",
//     paddingBottom: "12px",
//   },
//   itemStyle: {
//     listStyle: "none",
//   },
//   eventTitle: {
//     height: "29px",
//     overflow: "hidden",
//   },
//   eventHeader: {
//     fontSize: "1rem !important",
//     color: "#009BAD !important",
//     marginBottom: "12px !important",
//   },
//   eventContents: {
//     height: "25px",
//     overflow: "hidden",
//     whiteSpace: "nowrap",
//     textOverflow: "ellipsis",
//     marginBottom: "5px",
//     "& a": {
//       color: "#333333",
//       textDecoration: "none",
//     },
//     "& a:focus": {
//       color: "#23527c",
//     },
//     "& a:hover": {
//       color: "#23527c",
//     },
//   },
//   eventTop: {
//     //  "& > div ": { borderBottom: "1px solid gray"},
//     marginBottom: "8px",
//     paddingBottom: "8px",
//     borderBottom: "1px solid #f1f1f1",
//   },
//   eventDesc: {
//     height: "38px",
//     overflow: "hidden",
//     display: "block",
//     opacity: 0.6,

//     color: "#333333 !important",
//   },
//   eventClear: {
//     display: "table",
//     content: "",
//     clear: "both",
//   },
//   headRow: {
//     fontSize: "0.87rem !important",
//     // marginBottom: "10px!important",
//     lineHeight: "20px!important",

//     textDecoration: "none",
//     height: "20px",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: " ellipsis",
//   },
//   eventLink: {
//     textDecoration: "none",
//   },
// });
// <AuthenticatedTemplate>
    //   <Paper elevation={0}>
    //     {isLoading ? (
    //       <SkeletonAnimation />
    //     ) : (
    //       <>
    //         <CardContent sx={{ pb: "16px!important" }} className={classes.rootTitle}>
    //           <Typography
    //             variant="h6"
    //             component="h6"
    //             color="secondary"
    //             className={classes.eventHeader}
    //           >
    //             Latest Events
    //           </Typography>

    //           {data?.response &&
    //             data?.response?.map((item: any, index: any) => {
    //               const { fields = {} } = item;
    //             //   console.log(fields);
    //               let eventTitle = fields.Title;
    //               let evenDesc = fields?.Description;
    //               let eventMonth = moment(fields?.EventDate).format("MMM");
    //               let eventDate = moment(fields?.EventDate).format("DD");

    //               return (
    //                 <div key={index} className={classes.eventTop}>
    //                   <Box className={classes.evenLeft}>
    //                     <h2>{eventDate}</h2>
    //                     <p>{eventMonth}</p>
    //                   </Box>
    //                   <Box className={classes.evenRight}>
    //                     <RouterNavLink className={classes.eventLink} to={{ pathname: '/EventReadMore' }} state={fields?.id }> 
    //                       <Typography
    //                         variant="subtitle1"
    //                         component="div"
    //                         color="black"
    //                         className={classes.headRow}
    //                       >
    //                         {eventTitle}
    //                       </Typography>

    //                       <Typography
    //                         variant="caption"
    //                         color="textSecondary"
    //                         component="span"
    //                         className={classes.eventDesc}
    //                       >
    //                         <div
    //                           dangerouslySetInnerHTML={{
    //                             __html: `${evenDesc}`,
    //                           }}
    //                         />
    //                       </Typography>
    //                     </RouterNavLink>
    //                   </Box>
    //                   <Box className={classes.eventClear}></Box>
    //                 </div>
    //               );
    //             })}
    //         </CardContent>
    //       </>
    //      )} 
    //   </Paper>
    // </AuthenticatedTemplate>
    //  <>dfgdfggfdffgtrghthgt</>

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    bgcolor: "background.paper",
    paddingTop: "16px!important",
    paddingBottom: "16px!important",
    // "& > li": {
    //   width: "33.3%",
    //   float: "left",
    //   textAlign: "center",
    // },
  },
  Calendar: {
    border: "1px solid white",
    // paddingLeft:"12px",
    borderBottom: "1px solid #F1F1F1",
    paddingBottom: "20px",
    margin: "auto",
  },
  calenderHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  calenderHeader2: {
    fontSize: "0.8rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  border: {
    border: "none",
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

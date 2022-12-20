/* eslint-disable */
// import { makeStyles } from "@mui/styles";

// export const useStyles = makeStyles({
//   root: {
//     maxWidth: "100%",
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   newsImg: {
//     paddingTop: "56.25%",
//     borderRadius: "8px",
//     width:"100%",
//   },
//   createdDate: {
//     paddingTop: "7px",
//     alignItems: "center",
//     display: "flex !important",
//     color: " #333333!important",
//     opacity: 0.7,
//     fontSize: " 12px!important",
//     "& svg": {
//       paddingRight: "7px",
//       opacity: 0.6,
//     },
//   },
//   newsHeader: {
//     fontSize: "1rem !important",
//     color: "#009BAD !important",
//     marginBottom: "12px !important",
//   },
//   newsContents: {
//     height: "38px",
//     overflow: "hidden",
//     display: "block",
//     marginBottom: "7px !important",
//     marginTop: "15px!important",
//     "& a": {
//       color: "#333333",
//       textDecoration: "none",
//     },
//     "& a:focus": {
//       color: "#009BAD",
//     },
//     "& a:hover": {
//       color: "#009BAD",
//     },
//   },
// });
// <div>News</div>

// <AuthenticatedTemplate>
//   <Paper style={{ maxWidth: "100%" }} elevation={0}>
//     {isLoading ? (
//       <SkeletonAnimation />
//     ) : (
//       <>
//         <CardContent sx={{ pb: "16px!important" }}>
//           <Typography
//             variant="h6"
//             component="h6"
//             color="secondary"
//             className={classes.newsHeader}
//           >

//             News

//           </Typography>
//           <Grid
//             container
//             item
//             xs={12}
//             spacing={0}
//             sx={{ justifyContent: "space-between" }}
//           >
//           {data?.response && 
//            <Grid item xs={12}  sx={{ maxWidth: " 100%",display:"flex", justifyContent: "space-between", marginRight:"15px" }}  >

//                     <CardMedia
//                       className={classes.newsImg}
//                       image={data?.response.image}
//                       title="Test"
//                     />
//                     <CardMedia
//                       className={classes.newsImg}
//                       image={data?.response.image1}
//                       title="Test"
//                     />
//                     <CardMedia
//                       className={classes.newsImg}
//                       image={data?.response.image2}
//                       title="Test"
//                     />

//                     {/* <Typography
//                       variant="body2"
//                       color="textSecondary"
//                       component="span"
//                       className={classes.newsContents}
//                     >
//                       <RouterNavLink to='/NewsInfo' >

//                       <div
//                           dangerouslySetInnerHTML={{
//                             __html: `${data?.response.value[2].fields?.Title}`,
//                           }}
//                         />
//                         <div
//                           dangerouslySetInnerHTML={{
//                             __html: `${data?.response.value[1].fields?.Title}`,
//                           }}
//                         />
//                          <div
//                           dangerouslySetInnerHTML={{
//                             __html: `${data?.response.value[2].fields?.Title}`,
//                           }}
//                         />
//                          </RouterNavLink>
//                     </Typography> */}

//           </Grid>
//           }
//           </Grid>


//         </CardContent>
//       </>
//      )} 
//   </Paper>
// </AuthenticatedTemplate>

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 0,
    // paddingTop: "56.25%", // 16:9
  },
  typo: {
    color: "red",
  },
  newsImg: {
    // paddingTop: "56.25%",
    borderRadius: "3px",
    width: "100%",
    height: "100px",
    marginBottom: "140px",
    // marginRight:"10px",
  },
  createdDate: {
    paddingTop: "7px",
    alignItems: "center",
    display: "flex !important",
    color: " #333333!important",
    opacity: 0.7,
    fontSize: " 12px!important",
    "& svg": {
      paddingRight: "7px",
      opacity: 0.6,
    },
  },
  newsHeader: {
    fontSize: "1rem !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  newsHeader1: {
    fontSize: "12px !important",
    color: "#009BAD !important",
    marginBottom: "12px !important",
  },
  row: {
    paddingTop: "15px",
    width: "125%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  block: {
    width: "100px",
  },
  newsHeader2: {
    fontSize: "11px !important",
    color: "black !important",
  },
  newsContents: {
    height: "38px",
    overflow: "hidden",
    display: "block",
    marginBottom: "7px !important",
    marginTop: "15px!important",
    "& a": {
      color: "#333333",
      textDecoration: "none",
    },
    "& a:focus": {
      color: "#009BAD",
    },
    "& a:hover": {
      color: "#009BAD",
    },
  },
  cardNewTitle: {
    position: "absolute",
    marginTop: "-85px",
    color: "white",
    fontSize: "12px",
    textAlign: "center",
    marginLeft:"10px"
  }


});

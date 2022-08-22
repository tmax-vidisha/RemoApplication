import React, { useEffect,useState } from 'react'
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  Stack,
  CardActionArea
} from "@mui/material";
import {
  NavLink as RouterNavLink,
} from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import AccessTimeIcon from "@mui/icons-material/Event";
import { useGetNewsQuery ,useUpdateNewsTokenMutation,useGetAllNewsQuery} from '../../services/APIs';
import { useStyles } from "./Styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import like from "../../Assets/Images/like.svg";
import share from "../../Assets/Images/share.svg";
import pin from "../../Assets/Images/pin.svg";
import internet from "../../Assets/Images/internet.svg";
import SkeletonAnimation from "../../Containers/Skeleton";
var moment = require("moment-timezone");
interface IFolderProps {
  data:any, 
  error:any,
  isLoading:any
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}

//  const News = () => {
const News: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  // const pca = new PublicClientApplication(configuration);
  // const [token, setToken] = useState<string>();
  //   // const [updateToken,{data,isLoading} ] = useUpdateNewsTokenMutation();
  //   // console.log(data?.response,'jyjtyddvdvfdvfdvdfvggfgdhhtjytjytjytjty')
  //   const accounts = pca.getAllAccounts();
  //    useEffect(() => {
  //     async function getAccessToken() {
  //       if (accounts.length > 0) {
  //         const request = {
  //           scopes: ['user.read'],
  //           account: accounts[0]
  //         }
  //         const accessToken = await pca.acquireTokenSilent(request).then((response) => {
           
  //           // updateToken(response.accessToken);
  //              setToken(response.accessToken)
  //           // console.log(token,'uuuuuu')
  //         }).catch(error => {
  //           // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
  //           console.log(error);
  //           return null;
  //         });
  
  
  //       }
  
  //       return null;
  //     }
  //     getAccessToken();
  
       
      
  //   }, [])
    const { data, error, isLoading } =  props
    console.log(data,'888ddd88ttuytuytu888')
  return (
      
    // <>
    //  <AuthenticatedTemplate>
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
    //              {data?.response &&
    //             data?.response?.value.map((item: any, index: any) => {
    //               const { fields = {} } = item;
    //               var newsTitle = fields?.Title;
    //               var newsMessageAsText = fields.Description;
    //               var newsIsActive = fields.IsActive;
    //               var createdDate = moment(
    //                 fields.Modified
    //               ).fromNow();
    //               var img = fields?.newsUrl
    //               // var completePath;
    //               // if (fields.NewsImage != null) {
    //               //   var profilePic = JSON.parse(fields.NewsImage);
    //               //   if (profilePic.serverUrl) {
    //               //     completePath = profilePic.serverUrl + (profilePic.serverRelativeUrl).replace(profilePic.serverUrl, "");
    //               //   } else {
    //               //     completePath = profilePic.serverRelativeUrl
    //               //   }
    //               // }
    //               // let RawImageTxt = fields.newsUrl;

    //               // var ImgObj = JSON.parse(RawImageTxt); 
    //               var newFullPath;
    //               var newsPath;
    //               console.log(fields?.NewsImage);
    //               if (fields?.NewsImage != null) {
    //                 newFullPath = JSON.parse(fields?.NewsImage);
    //                 newsPath = newFullPath?.serverUrl + newFullPath?.serverRelativeUrl;
    //               } 
    //               return (
    //                 <Grid item xs={6} key={index} sx={{ maxWidth: " 49%" }}>
    //                    <CardMedia
    //                       className={classes.newsImg}
    //                       // image={newsPath}
    //                       image ={img}
    //                       title="Test"
    //                     />
    //                      <Typography
    //                       variant="body2"
    //                       color="textSecondary"
    //                       component="span"
    //                       className={classes.newsContents}
    //                     >
    //                       <RouterNavLink to='/NewsInfo' state={fields?.id} >
    //                         <div
    //                           dangerouslySetInnerHTML={{
    //                             __html: `${fields?.Title}`,
    //                           }}
    //                         />
    //                       </RouterNavLink>
    //                     </Typography>
    //                     <Typography
    //                       className={classes.createdDate}
    //                       variant="caption"
    //                       color="textSecondary"
    //                       component="span"
    //                       display="block"
    //                       gutterBottom
    //                     >
    //                       <AccessTimeIcon fontSize="small" />
    //                       <span>{createdDate}</span>
    //                     </Typography>
    //                 </Grid>
    //               )
    //             })}
    //           </Grid>
    //         </CardContent>
    //       </>
    //     )}
    //   </Paper>
    // </AuthenticatedTemplate>
    
    //  </>
    <AuthenticatedTemplate>
      <Paper style={{ maxWidth: "100%" }} elevation={0}>
        {isLoading ? (
          <SkeletonAnimation />
        ) : (
          <>
            <CardContent sx={{ pb: "16px!important" }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  color="secondary"
                  className={classes.newsHeader}
                >
                  News
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  color="secondary"
                  className={classes.newsHeader1}
                >
                  View All
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                {/* <Card sx={{ maxWidth: 250, maxHeight: 240 }}>
                  <CardActionArea>
                    <CardMedia
                      // className={classes.newsImg}
                      component="img"
                      height="160"
                      image={data?.response.image}
                      // image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          className={classes.newsHeader2}
                          variant="body2"
                          color="text.primary"
                        >
                          David Siddiqa
                        </Typography>
                        <Typography
                          className={classes.newsHeader2}
                          variant="body2"
                          color="text.primary"
                        >
                          Thursday, June 05, 2022
                        </Typography>
                      </Stack>
                      <div className={classes.row}>
                        <div className={classes.block}>
                          <img src={like} alt="like" />
                        </div>
                        <div className={classes.block}>
                          <img src={share} alt="like" />
                        </div>
                        <div className={classes.block}>
                          <img src={pin} alt="like" />
                        </div>
                        <div className={classes.block}>
                          <img src={internet} alt="like" />
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 250, maxHeight: 240 }}>
                  <CardActionArea>
                    <CardMedia
                      //  className={classes.newsImg}
                      component="img"
                      height="160"
                      image={data?.response.image1}
                      // image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          className={classes.newsHeader2}
                          variant="body2"
                          color="text.primary"
                        >
                          David Siddiqa
                        </Typography>
                        <Typography
                          className={classes.newsHeader2}
                          variant="body2"
                          color="text.primary"
                        >
                          Thursday, June 05, 2022
                        </Typography>
                      </Stack>
                      <div className={classes.row}>
                        <div className={classes.block}>
                          <img src={like} alt="like" />
                        </div>
                        <div className={classes.block}>
                          <img src={share} alt="like" />
                        </div>
                        <div className={classes.block}>
                          <img src={pin} alt="like" />
                        </div>
                        <div className={classes.block}>
                          <img src={internet} alt="like" />
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 250, maxHeight: 240 }}>
                  <CardActionArea>
                    <CardMedia
                      // className={classes.newsImg}
                      component="img"
                      height="160"
                      image={data?.response.image2}
                      // image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          className={classes.newsHeader2}
                          variant="body2"
                          color="text.primary"
                        >
                          David Siddiqa
                        </Typography>
                        <Typography
                          className={classes.newsHeader2}
                          variant="body2"
                          color="text.primary"
                        >
                          Thursday, June 05, 2022
                        </Typography>
                      </Stack>
                      <div className={classes.row}>
                        <div className={classes.block}>
                          <img src={like} alt="like" />
                        </div>
                        <div className={classes.block}>
                          <img src={share} alt="like" />
                        </div>
                        <div className={classes.block}>
                          <img src={pin} alt="like" />
                        </div>
                        <div className={classes.block}>
                          <img src={internet} alt="like" />
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card> */}
                {data?.response &&
                data?.response?.value.map((item: any, index: any) => {
                  const { fields = {} } = item;
                  var newsTitle = fields?.Title;
                  var newsMessageAsText = fields.Description;
                  var newsIsActive = fields.IsActive;
                  var createdDate = moment(
                    fields.Modified
                  ).fromNow();
                  let newsMonth = moment(fields?.Modified).format("MMM");
            let newsYear  = moment(fields?.Modified).format("YYYY");
            let newsDate = moment(fields?.Modified).format("DD");
            let newsDay  = moment(fields?.Modified).format('dddd');
                  var img = fields?.newsUrl
                  // var completePath;
                  // if (fields.NewsImage != null) {
                  //   var profilePic = JSON.parse(fields.NewsImage);
                  //   if (profilePic.serverUrl) {
                  //     completePath = profilePic.serverUrl + (profilePic.serverRelativeUrl).replace(profilePic.serverUrl, "");
                  //   } else {
                  //     completePath = profilePic.serverRelativeUrl
                  //   }
                  // }
                  // let RawImageTxt = fields.newsUrl;

                  // var ImgObj = JSON.parse(RawImageTxt); 
                  var newFullPath;
                  var newsPath;
                  console.log(fields?.NewsImage);
                  if (fields?.NewsImage != null) {
                    newFullPath = JSON.parse(fields?.NewsImage);
                    newsPath = newFullPath?.serverUrl + newFullPath?.serverRelativeUrl;
                  } 
                  return (
                    <Card sx={{ maxWidth: 250, maxHeight: 240 }}>
                    <CardActionArea>
                      <CardMedia
                        // className={classes.newsImg}
                        component="img"
                        height="160"
                        image={img}
                        // image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                      />
                      <CardContent>
                        <Stack direction="row" justifyContent="space-between">
                          <Typography
                            className={classes.newsHeader2}
                            variant="body2"
                            color="text.primary"
                          >
                            David Siddiqa
                            {/* {newsTitle} */}
                          </Typography>
                          <Typography
                            className={classes.newsHeader2}
                            variant="body2"
                            color="text.primary"
                          >
                            {/* Thursday, June 05, 2022 */}
                            {newsDay} {newsDate} {newsMonth} {newsYear}
                          </Typography> 
                        </Stack>
                        <div className={classes.row}>
                          <div className={classes.block}>
                            <img src={like} alt="like" />
                          </div>
                          <div className={classes.block}>
                            <img src={share} alt="like" />
                          </div>
                          <div className={classes.block}>
                            <img src={pin} alt="like" />
                          </div>
                          <div className={classes.block}>
                            <img src={internet} alt="like" />
                          </div>
                        </div>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  )
                })}
              </Stack>
              {/* <Grid container item xs={12} spacing={0}>
                {data?.response && (
                  <Grid
                    item
                    xs={12}
                    sx={{
                      maxWidth: " 100%",
                      display: "flex",
                      justifyContent: "space-between",
                      // marginRight: "15px",
                      gap: "20px",
                    }}
                  >
                    <CardMedia
                      className={classes.newsImg}
                      image={data?.response.image}
                      title="Test"
                    />

                    <CardMedia
                      className={classes.newsImg}
                      image={data?.response.image1}
                      title="Test"
                    />
                    <CardMedia
                      className={classes.newsImg}
                      image={data?.response.image2}
                      title="Test"
                    />

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="span"
                      className={classes.newsContents}
                    >
                      <RouterNavLink to="/NewsInfo">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${data?.response.value[2].fields?.Title}`,
                          }}
                        />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${data?.response.value[1].fields?.Title}`,
                          }}
                        />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `${data?.response.value[2].fields?.Title}`,
                          }}
                        />
                      </RouterNavLink>
                    </Typography>
                  </Grid>
                )}
              </Grid> */}
              <div>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  paddingTop={5}
                >
                  <div>
                    <ArrowBackIosIcon />
                  </div>
                  <div>
                    <MoreHorizIcon />
                  </div>
                  <div>
                    <ArrowForwardIosIcon />
                  </div>
                </Stack>
              </div>
            </CardContent>
          </>
        )}
      </Paper>
    </AuthenticatedTemplate>
  )
}

export default News
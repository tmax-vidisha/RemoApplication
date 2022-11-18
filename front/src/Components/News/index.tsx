// @ts-nocheck

import React, { useEffect, useState, useRef } from 'react'
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
import { useGetNewsQuery, useUpdateNewsTokenMutation, useGetAllNewsQuery } from '../../services/APIs';
import { useStyles } from "./Styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import like from "../../Assets/Images/like.svg";
import share from "../../Assets/Images/share.svg";
import pin from "../../Assets/Images/pin.svg";
import internet from "../../Assets/Images/internet.svg";
import SkeletonAnimation from "../../Containers/Skeleton";
import Slider from 'react-slick'
// import {FaChevronLeft, FaChevronRight} from 'react-icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

var moment = require("moment-timezone");
interface IFolderProps {
  data: any,
  error: any,
  isLoading: any
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
  const { data, error, isLoading } = props
  console.log(data?.response, 'NewsDary')

  return (

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


  const [slideLeft, setSlideLeft] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const sliderWidth = 1900;

  //on arrow click
  const moveRight = () => {

    const el = document.getElementById(`hscroll`);
    //@ts-ignore
    setSlideLeft((el.scrollLeft += 200));
  };

  const moveLeft = () => {
    const el = document.getElementById(`hscroll`);
    //@ts-ignore
    setSlideLeft((el.scrollLeft -= 200));
  };

  if (isScrolling) {
    setTimeout(() => setIsScrolling(false), 3000);
  }
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const customeSlider = useRef();
  //i dont seem to need this
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settingCarousel = {
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosIcon />,
  };

  const settingsSliderNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: true,
  }
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  }



  return (
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

              <Slider
                asNavFor={nav1}
                ref={slider2}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
              >

                {data?.response &&
                  data?.response?.map((card, index) => (
                    <div key={index}>
                      <Card sx={{ maxWidth: 250, maxHeight: 240 }}>
                        <CardActionArea>
                          <CardMedia
                            // className={classes.newsImg}
                            component="img"
                            height="160"
                            image={card.fields?.NewsImage}
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
                                {moment(card.fields?.Modified).format('dddd')} {moment(card.fields?.Modified).format("DD")} {moment(card.fields?.Modified).format("MMM")} {moment(card.fields?.Modified).format("YYYY")}
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
                    </div>
                  ))}

              </Slider>
            </CardContent>
          </>
        )}
      </Paper>

    </AuthenticatedTemplate>

  )
}

export default News

import React, { useEffect, useState } from 'react'
import { AuthenticatedTemplate } from "@azure/msal-react";
import { useGetHeroImageQuery, useUpdateHeroTokenMutation, useGetAllHeroQuery } from '../../services/APIs'
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import SkeletonAnimation from "../../Containers/Skeleton";
import { useNavigate } from 'react-router-dom';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useStyles } from "./Styles";
import { useTheme } from "@mui/material/styles";
import Carousel from 'react-material-ui-carousel'
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';


// import { height } from 'react-material-ui-carousel/node_modules/@mui/system';
interface IFolderProps {
  // hero: any;
  data: any,
  error: any,
  isLoading: any
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

//  const HeroImages = () => {
const HeroImages: React.FC<IFolderProps> = (props: IFolderProps) => {
  // const { data, error, isLoading } =   useGetHeroImageQuery('')
  // console.log(data,'qwwwww')
  const classes = useStyles();
  const navigate = useNavigate();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  //  const pca = new PublicClientApplication(configuration);
  //  const [token, setToken] = useState<string>();
  //   // const [updateToken,{data,isLoading} ] = useUpdateHeroTokenMutation();
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
  //             setToken(response.accessToken)
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
  //    var maxSteps= data;
  // const {hero} = props;
  //   const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   };

  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const { data, error, isLoading } = props
  console.log(data, '888ddd88txccccccccccccccctuytuytu888')

  const handleClick = (Url: any) => {
    navigate('/heroThumbnail', { state: { folderData: Url } })
  }

  const handleReadMoreVideo = (Url: any, Title: any, Description: any, Modified: any) => {
    navigate('/heroBannerMore', { state: { folderData: Url, Title, Description, Modified } })
  }
  const handleReadMoreImages = (Url: any, Title: any, Description: any, Modified: any) => {
    navigate('/heroBannerMoreImages', { state: { folderData: Url, Title, Description, Modified } })
  }
  return (
   
    <div>
      <AuthenticatedTemplate>
        {/* <Draggable> */}
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          {isLoading ? (
            <SkeletonAnimation />
          ) : (
            <>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}

                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {data?.response &&
                  data?.response?.map((item: any, index: any) => {
                    const { fields = {} } = item;
                    var HeroTitle = fields?.Title;
                    if (fields?.FileType == "mp4") {
                      return (
                        <div key={index} style={{ position: "relative" }}>
                          <p className={classes.videoTitle} onClick={() => handleReadMoreVideo(fields?.Url, HeroTitle, fields.Description, fields?.Modified)}>{HeroTitle}</p>
                          <video className={classes.video}>
                            <source src={fields?.Url} type="video/mp4" />
                          </video>
                          <button onClick={() => handleClick(fields?.Url)} className={classes.exploreBtn}><span><PlayArrowIcon  style={{width:"15px"}}/></span><span style={{fontSize:"12px", marginTop:"5px", marginLeft:"5px"}}>Start Explore</span></button>
                        </div>
                      );
                    }
                    else {
                      return (
                        //         <div key={index} className={classes.videoContent}>
                        //            <p className={classes.videoTitle} onClick={()=> handleReadMoreImages(fields?.Url,HeroTitle,fields.Description,fields?.Modified)}>{HeroTitle}</p>
                        //          <img src={fields?.Url} className={classes.video} />
                        //  </div>
                        <Card>
                          <div style={{ position: "relative" }}>
                            <CardMedia className={classes.displayImg} component="img" image={fields?.Url} title={HeroTitle} alt="Pancakes" />
                            <div className={classes.videoTitle} onClick={() => handleReadMoreImages(fields?.Url, HeroTitle, fields.Description, fields?.Modified)}> {HeroTitle}</div>
                          </div>
                        </Card>
                      );
                    }
                  })}
              </AutoPlaySwipeableViews>

            </>
          )}
        </Box>
        {/* </Draggable> */}
      </AuthenticatedTemplate>
    </div>
  )
}

export default HeroImages;
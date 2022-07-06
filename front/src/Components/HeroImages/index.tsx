import React from 'react'
import { AuthenticatedTemplate } from "@azure/msal-react";
import { useGetHeroImageQuery } from '../../services/APIs'
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import SkeletonAnimation from "../../Containers/Skeleton";
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

import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
// import { height } from 'react-material-ui-carousel/node_modules/@mui/system';
interface IFolderProps {
  hero: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}
 const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const HeroImages = () => {
  const HeroImages: React.FC<IFolderProps> = (props: IFolderProps) => {
  // const { data, error, isLoading } =   useGetHeroImageQuery('')
  // console.log(data,'qwwwww')
//  const classes = useStyles();

  const theme = useTheme();
   const [activeStep, setActiveStep] = React.useState(0);
//    var maxSteps= data;
const {hero} = props;
//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  }; 
  return (
    // <div>HeroImages</div>
<AuthenticatedTemplate>
  <Box sx={{ flexGrow: 1, position: "relative" }}>
      {/* {isLoading ?(
        <SkeletonAnimation/>
      )  :(    
               */}
              
            <Box   sx={{
              height: 252,
              display: "block",
              overflow: "hidden",
              width: "100%",
              borderRadius: "5px",
              position: "relative",
            }}>  
               <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
            >
                  {hero && <img  src ={hero.image}  height='252' width="100%"/> }
                  
                  {hero && <img  src ={hero.image1}   height='252' width="100%"/> }
                  {hero && <img  src ={hero.image2}  height='252' width="100%"/> }
                </AutoPlaySwipeableViews>
             </Box>   
                
             
             
      {/* )}     */}
     </Box> 
    </AuthenticatedTemplate>
  )
}

export default HeroImages
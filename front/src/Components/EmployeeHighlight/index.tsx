import React from 'react'
import { useGetEmployeeHighLightQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from "@azure/msal-react";
import { Card, CardContent, Paper, Typography,Avatar } from "@mui/material";
import { useStyles } from "./Styles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Carousel from 'react-material-ui-carousel'
import SkeletonAnimation from "../../Containers/Skeleton";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
//@ts-ignore
interface IFolderProps {
  employee: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
}
// const EmployeeHighlight = () => {
  const EmployeeHighlight: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const theme = useTheme();

  // const { data, error, isLoading } = useGetEmployeeHighLightQuery('');
  // console.log(data,'88888888')
  const {employee} = props;
   const [activeStep, setActiveStep] = React.useState(0);
   
          const handleStepChange = (step: number) => {
          setActiveStep(step);
  

}
  return (
    

    // <div>
    //     <Paper>
    //     { data && <img  src ={data[0].fields.SASURL.Description}  height="120"/> }
    //     </Paper>
    // </div>
    //  <div>
          
    //           {/* {data && data.map((i:any)=>(
    //             <>
    //               <Avatar src ={i.image} />
                  
    //               </>
    //           ))} */}
    //           ggggg
    <AuthenticatedTemplate>
      
      {/* {isLoading ?(
        <SkeletonAnimation/>
      )  :(     */}
              <Paper>
              
               <Card>
               <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
            >
                  {employee && <img  src ={employee.image}  height="120"/> 
                  
                  
                  }
                  
                  {employee && <img  src ={employee.image1}  height="120"/> }
                  {employee && <img  src ={employee.image2}  height="120"/> }
                </AutoPlaySwipeableViews>
                
              </Card>
             
              </Paper>
      {/* )}     */}
      
    </AuthenticatedTemplate> 
    // <div>tttt</div>
  )
}

export default EmployeeHighlight
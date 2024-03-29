import React, { useEffect,useState } from 'react'
import { useGetEmployeeHighLightQuery,useUpdateEmpTokenMutation,useGetAllEmpQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from "@azure/msal-react";
import { Card, CardContent, Paper, Typography,Avatar, Link } from "@mui/material";
import { useStyles } from "./Styles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Carousel from 'react-material-ui-carousel'
import SkeletonAnimation from "../../Containers/Skeleton";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import { useNavigate } from 'react-router-dom';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
//@ts-ignore
interface IFolderProps {
  // employee: any;
  // onClick: any;
  // onDownload?: (id: string) => void;
  // onDelete?: (id: string) => void;
  // onRename?: (id: string, name: string) => void;
  // onShare?: (id: string) => void;
  data:any, 
  error:any,
  isLoading:any,
  // onGetItem?:(id:string) =>void,
  // ItemData:any
}
//  const EmployeeHighlight = () => {
const EmployeeHighlight: React.FC<IFolderProps> = (props: IFolderProps) => {
  const classes = useStyles();
  const theme = useTheme();

  // const { data, error, isLoading } = useGetEmployeeHighLightQuery('');
  // console.log(data,'88888888')
  // const {employee} = props;
   const [activeStep, setActiveStep] = React.useState(0);
   
          const handleStepChange = (step: number) => {
          setActiveStep(step);

}

const navigate = useNavigate()

// const pca = new PublicClientApplication(configuration);
//     // const [updateToken,{data,isLoading} ] = useUpdateEmpTokenMutation();
//     // console.log(data?.response,'jyjtyddvdvfdvfdvdfvggfgdhhtjytjytjytjty')
//     const [tokens, setTokens] = useState<string>();
//     const accounts = pca.getAllAccounts();
//      useEffect(() => {
//       async function getAccessToken() {
//         if (accounts.length > 0) {
//           const request = {
//             scopes: ['user.read'],
//             account: accounts[0]
//           }
//           const accessToken = await pca.acquireTokenSilent(request).then((response) => {
           
//             // updateToken(response.accessToken);
//               setTokens(response.accessToken)
//             // console.log(token,'uuuuuu')
//           }).catch(error => {
//             // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
//             console.log(error);
//             return null;
//           });
  
  
//         }
  
//         return null;
//       }
//       getAccessToken();
  
       
      
//     }, [])

    const { data, error, isLoading} =  props
  //  console.log(data,'Empployeedata')
  // console.log(ItemData,'juyuykuku')
  const handleItem = (Title:any,Dept:any,img:any,description:any,Name:any) =>{
    //  console.log(itemid,'Idss')
    // onGetItem?.(itemid)
    navigate('/birthday', { state: {  Title,Dept,img,description,Name } })
    // if(ItemData !==undefined){
    //   navigate('/birthday', { state: { folderData: ItemData } })
    // }
  }
 
  return (
    
    <AuthenticatedTemplate>
      <Paper elevation={0}>
        {isLoading ? (
          <SkeletonAnimation />
        ) : (
          <CardContent sx={{ pb: "27px!important" }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
             {data?.response &&
                data?.response.map((item: any, index: any) => {
                  const { fields = {} } = item;
                var EmpTitle = fields?.Title;
                var empName = fields?.Name;
                var DeptVal = fields?.Dept;
                var img =  fields?.EmpImg;
                var desc = fields?.Description;

                // var completePath;

                // if (fields?.EmpImage != null) {
                //   var profilePic = JSON.parse(fields?.EmpImage);
                //   if (profilePic.serverUrl) {
                //     completePath = profilePic.serverUrl + (profilePic.serverRelativeUrl).replace(profilePic.serverUrl, "");
                //   } else {
                //     completePath = profilePic.serverRelativeUrl
                //   }
                // }

                return (
                  <div className={classes.emp} key={index}>
                    {Math.abs(activeStep - index) <= 1 ? (
                      <>
                        <Typography
                          variant="h6"
                          component="h6"
                          className={classes.empTop}
                          color="secondary"
                        >
                          {EmpTitle}
                        </Typography>
                        <Paper sx={{ display: "flex" }} elevation={0}>
                       
                          <Box
                            className={classes.profile}
                            component="img"
                            // src={completePath}
                            src ={img}
                            alt={empName}
                            onClick={ () =>{
                             
                              handleItem(EmpTitle,DeptVal,img,desc,empName)
                              //  if(ItemData !==undefined){
                              //     navigate('/birthday', { state: { folderData: ItemData } })
                              //   }
                            }
                            }
                          />
                         
                          <Box className={classes.desc}>
                         
                            <Typography
                              variant="subtitle2"
                              component="div"
                            >
                             {empName}
                            </Typography>
                            
                            <Typography
                              variant="caption"
                              gutterBottom
                              component="div"
                              sx={{ opacity: 0.6 }}
                            >
                              {DeptVal}
                            </Typography>
                          </Box>
                        </Paper>
                      </>
                    ) : null}
                  </div>
                );
              })}
            </AutoPlaySwipeableViews>
          </CardContent>
        )}
      </Paper>
    </AuthenticatedTemplate>
  )
}

export default EmployeeHighlight
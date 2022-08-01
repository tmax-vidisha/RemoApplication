import React, { useEffect,useState } from 'react'
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,

} from "@mui/material";
import {
  NavLink as RouterNavLink,
} from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import AccessTimeIcon from "@mui/icons-material/Event";
import { useGetNewsQuery ,useUpdateNewsTokenMutation,useGetAllNewsQuery} from '../../services/APIs';
import { useStyles } from "./Styles";
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
      // <div>News</div>

    <AuthenticatedTemplate>
      <Paper style={{ maxWidth: "100%" }} elevation={0}>
        {isLoading ? (
          <SkeletonAnimation />
        ) : (
          <>
            <CardContent sx={{ pb: "16px!important" }}>
              <Typography
                variant="h6"
                component="h6"
                color="secondary"
                className={classes.newsHeader}
              >

                News

              </Typography>
              <Grid
                container
                item
                xs={12}
                spacing={0}
                sx={{ justifyContent: "space-between" }}
              >
              {data?.response && 
               <Grid item xs={6}  sx={{ maxWidth: " 49%" }}  >
                     
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
                          <RouterNavLink to='/NewsInfo' >
                        
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
              }
              </Grid>


            </CardContent>
          </>
         )} 
      </Paper>
    </AuthenticatedTemplate>
  )
}

export default News
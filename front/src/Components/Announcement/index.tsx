import React, { useEffect,useState } from 'react'
import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { useGetAnnouncementInfoQuery,useUpdateAnnouncementTokenMutation,useGetAllAnnoncementsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from "@azure/msal-react";
import {NavLink as RouterNavLink,} from "react-router-dom";
import { useStyles } from "./Styles";
import SkeletonAnimation from "../../Containers/Skeleton";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
interface IFolderProps {
  data:any, 
  error:any,
  isLoading:any
}

//  const Announcement = () => {
 const Announcement: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    // const { data, error, isLoading } =   useGetAnnouncementInfoQuery('')
  //   const pca = new PublicClientApplication(configuration);
  //   // const [updateToken,{data,isLoading} ] = useUpdateAnnouncementTokenMutation();
  //   // console.log(data?.response,'ytjyjyjytgrhthtjyjyjyjyj')
  //   const [token, setToken] = useState<string>();
  //   const accounts = pca.getAllAccounts();
  //   useEffect(() => {
  //    async function getAccessToken() {
  //      if (accounts.length > 0) {
  //        const request = {
  //          scopes: ['user.read'],
  //          account: accounts[0]
  //        }
  //        const accessToken = await pca.acquireTokenSilent(request).then((response) => {
          
  //         //  updateToken(response.accessToken);
  //            setToken(response.accessToken)
  //          // console.log(token,'uuuuuu')
  //        }).catch(error => {
  //          // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
  //          console.log(error);
  //          return null;
  //        });
 
 
  //      }
 
  //      return null;
  //    }
  //    getAccessToken();
  //    // async function aaaa(){
  //    //   // console.log(token)
  //    //   await updateToken(token)
  //    // }
  //    // aaaa();
  //    // setDatas(data.Event)
  //    // console.log(datas.Event)
  //    // function send (){
  //    //       if (token) {
       
       
  //    //         const requestOptions = {
  //    //           method: 'POST',
  //    //           headers: { 'Content-Type': 'application/json' },
  //    //           body: JSON.stringify({ token })
  //    //         };
  //    //         // fetch('http://localhost:4000/user/post', requestOptions)
  //    //         fetch(`http://localhost:4000/api/v1/token/folder`, requestOptions)
  //    //         // .then(response => console.log(response))
  //    //          .then(response => response.json())
  //    //          .then(data =>setData1(data));
       
  //    //       }
       
  //    //     }
  //    //     send();
      
     
  //  }, [])


   const { data, error, isLoading } =   props
   console.log(data,'9809090')
//  console.log(data[1].fields)
// const { fields = {} } = data[0];
// var annTitle  = data[0].fields?.Title;
// var descVal = data[0].fields?.Desc;
// const {announcement} = props;

// if (data.length > 0) {
//     if (data[0] != null) {
//       const { fields = {} } = data[0];
//        annTitle = fields?.Title;
//        descVal = fields?.Desc;
//     }
//     console.log(annTitle)
//   }

  return (
    //  <div>Announcement</div>
    <AuthenticatedTemplate>
      <Paper className={classes.root} elevation={0}>
      {isLoading ? (
          <SkeletonAnimation />
        ) : (
          <>
            <Typography
              variant="h6"
              component="h6"
              color="secondary"
              className={classes.annHeader}
            >
              Announcements
            </Typography>
            {/* {data &&
              <>
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    component="h6"
                    className={classes.annTitle}
                  >
                    <RouterNavLink
                      to={SiteAPI.ANNOUNCEMENT_READ_MORE}
                   
                    >
                      { data[0].fields?.Title}
                    </RouterNavLink>
                  </Typography>
                </CardContent>

                <CardContent sx={{ pb: "19px!important" }}>
                  <Typography
                    variant="caption"
                    component="span"
                    className={classes.annContents}
                  >
                    <div
                      className={classes.annDesc}
                      dangerouslySetInnerHTML={{
                        __html: `${data[0].fields?.Desc}`,
                      }}
                    />
                  </Typography>
                </CardContent>
              </>
            } */}
            {data?.response &&
                data?.response?.map((item: any, index: any) => {
                  const { fields = {} } = item;
                  var annTitle = fields?.Title;
                  var descVal = fields.Desc;
                  return (
                   <>
                        <CardContent>
                  <Typography
                    variant="subtitle1"
                    component="h6"
                    className={classes.annTitle}
                  >
                    <RouterNavLink
                      to="/AnnouncementReadMore"
                      className={classes.readMore}
                    >
                    <span>{ annTitle}</span>  
                    </RouterNavLink>
                  </Typography>
                </CardContent>

                <CardContent sx={{ pb: "19px!important" }}>
                  <Typography
                    variant="caption"
                    component="span"
                    className={classes.annContents}
                  >
                    <div
                      className={classes.annDesc}
                      dangerouslySetInnerHTML={{
                        __html: `${descVal}`,
                      }}
                    />
                  </Typography>
                </CardContent>
                   </>
                  )
                })}
          </>
        )} 
      </Paper>
    </AuthenticatedTemplate>
  )
}

export default Announcement
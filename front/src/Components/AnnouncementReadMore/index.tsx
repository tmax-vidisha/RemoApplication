import React from 'react'
import { Fragment, useEffect, useState } from "react";
import { AuthenticatedTemplate } from "@azure/msal-react";
import {NavLink as RouterNavLink,} from "react-router-dom";
import {
  Breadcrumbs,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useStyles } from "./Styles";
import { useGetAnnouncementInfoQuery,useUpdateAnnouncementTokenMutation,useGetAllAnnoncementsQuery } from '../../services/APIs';
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
interface IFolderProps {
  data:any, 
  error:any,
  isLoading:any
}
 const AnnouncementReadMore: React.FC<IFolderProps> = (props: IFolderProps) => {
// const AnnouncementReadMore = () => {

    const classes = useStyles();
    // const { data, error, isLoading } =   useGetAnnouncementInfoQuery('')
    // const {announcement} = props;
    // const pca = new PublicClientApplication(configuration);
    // const [token, setToken] = useState<string>();
    // // const [updateToken,{data,isLoading} ] = useUpdateAnnouncementTokenMutation();
    // // console.log(data?.response,'jyjtyddvdvfdvfdvdfvggfgdhhtjytjytjytjty')
    // const accounts = pca.getAllAccounts();
    //  useEffect(() => {
    //   async function getAccessToken() {
    //     if (accounts.length > 0) {
    //       const request = {
    //         scopes: ['user.read'],
    //         account: accounts[0]
    //       }
    //       const accessToken = await pca.acquireTokenSilent(request).then((response) => {
           
    //         // updateToken(response.accessToken);
    //          setToken(response.accessToken)
    //         // console.log(token,'uuuuuu')
    //       }).catch(error => {
    //         // Do not fallback to interaction when running outside the context of MsalProvider. Interaction should always be done inside context.
    //         console.log(error);
    //         return null;
    //       });
  
  
    //     }
  
    //     return null;
    //   }
    //   getAccessToken();
  
       
      
    // }, [])
    const { data, error, isLoading } =   props
      console.log(data,'980ccccccc9090')
  return (
    <AuthenticatedTemplate>
    <Container className={classes.contentEditorWidth}>
      <Card className={classes.cardHeight} elevation={0}>
        <Paper className={classes.innerBackground}>
          <div className={classes.innerBannerOverlay}></div>
          <Paper className={classes.contentHeader} elevation={0}>
            <Typography className={classes.breadcrumbs} variant="h6">
              Announcements
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              <Breadcrumbs
                className={classes.breadcrumbs}
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                <Link className={classes.breadLinks} color="inherit" href="/">
                  Home
                </Link>
                <Typography>Announcements</Typography>
              </Breadcrumbs>
            </Typography>
          </Paper>
        </Paper>
      </Card>

      {/* {data &&
        <Paper className={classes.cardHeight} elevation={0}>
          <Grid xs={12} item>
            <Card sx={{ mb: 3 }} elevation={0}>
              <CardContent sx={{ pb: "0px!important" }}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  component="h6"
                  className={classes.annHeader}
                >
                  {annTitle}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className={classes.ceoCreatedDate}
                >
                  10 June 2021
                </Typography>

                <Typography
                  className={classes.annContents}
                  variant="caption"
                  component="span"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${descVal}`,
                    }}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Paper>
      } */}
      {data?.response &&
                data?.response?.map((item: any, index: any) => {
                  const { fields = {} } = item;
                  var annTitle = fields?.Title;
                  var descVal = fields.Desc;
                  return (
                    <Paper className={classes.cardHeight} elevation={0}>
                    <Grid xs={12} item>
                      <Card sx={{ mb: 3 }} elevation={0}>
                        <CardContent sx={{ pb: "0px!important" }}>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="h6"
                            className={classes.annHeader}
                          >
                            {annTitle}
                          </Typography>
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                            className={classes.ceoCreatedDate}
                          >
                            10 June 2021
                          </Typography>
          
                          <Typography
                            className={classes.annContents}
                            variant="caption"
                            component="span"
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: `${descVal}`,
                              }}
                            />
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Paper>
                  )
                })}
    </Container>
  </AuthenticatedTemplate>
  )
}

export default AnnouncementReadMore
import React from 'react'
import { Fragment, useEffect, useState } from "react";
import {
    NavLink as RouterNavLink,

} from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useStyles } from "./Styles";

import {
    Breadcrumbs,
    Card,
    CardContent,
    CardMedia,
    Container,
    Link,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import { useGetNewsQuery,useUpdateNewsTokenMutation,useGetAllNewsQuery } from '../../services/APIs';
import { useLocation } from 'react-router-dom'
import NationalNews from './NationalNews';
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

// const NewsReadMore = () => {
 const NewsReadMore: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    // const pca = new PublicClientApplication(configuration);
    // const [tokens, setTokens] = useState<string>();
    // // const [updateToken,{data,isLoading} ] = useUpdateNewsTokenMutation();
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
    //           setTokens(response.accessToken)
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
    // const {news} = props;
    // console.log(news, 'uuuuuc')
    const { data, error, isLoading } =  props
    console.log(data,'888ddd88ttuytuytu888')
    return (
        <AuthenticatedTemplate>
            <Container className={classes.contentEditorWidth}>
                <Card className={classes.cardHeight} elevation={0}>
                    <Paper className={classes.innerBackground}>
                        <div className={classes.innerBannerOverlay}></div>
                        <Paper className={classes.contentHeader} elevation={0}>
                            <Typography className={classes.breadcrumbs} variant="h6">
                                News
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
                                    <Typography>News</Typography>
                                </Breadcrumbs>
                            </Typography>
                        </Paper>
                    </Paper>
                </Card>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
                 <NationalNews/>
                </Paper>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }}>
                    <Card elevation={0}>
                        <Grid container item xs={12} spacing={0}>
                            <Card
                                className={classes.moreNews}
                                sx={{ mb: 3 }}
                                elevation={0}
                            >
                                {data?.response.value &&
                                    data?.response?.value.map((item: any, index: any) => {
                                        const { fields = {} } = item;
                                        var Title = fields?.Title;
                                        //   console.log()
                                        //   var name = fields?.Title;
                                        var desc = fields?.Description;
                                        var isActive = fields?.IsActive;
                                        var createdDate = moment(fields?.Created).format(
                                            "MMM DD YYYY"
                                        );
                                        var img = fields?.newsUrl;
                                        //   var profilePic = JSON.parse(fields.EmpImage);
                                        //   var completePath;
                                        //   if (profilePic.serverUrl) {
                                        //     completePath = profilePic.serverUrl + (profilePic.serverRelativeUrl).replace(profilePic.serverUrl, "");
                                        //   } else {
                                        //     completePath = profilePic.serverRelativeUrl
                                        //   }
                                        if (fields?.NewsImage != null) {
                                            var newsPic = JSON.parse(fields?.NewsImage);
                                            var newsPath = newsPic?.serverUrl + newsPic?.serverRelativeUrl;
                                        }
                                        return (
                                            <Grid key={index} item xs={8} className={classes.newsRightBorder}>
                                                <CardContent sx={{ pb: "0!important" }}>
                                                    <Typography variant="subtitle1" gutterBottom>
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: `${Title}`,
                                                            }} />
                                                    </Typography>
                                                    <Typography className={classes.moreNewsTag}>
                                                        <Typography
                                                            className={classes.newsTag}
                                                            variant="caption"
                                                            display="block"
                                                        >
                                                            <RouterNavLink to="#">
                                                                {fields?.Reference}
                                                            </RouterNavLink>
                                                        </Typography>
                                                        <Typography
                                                            className={classes.createdDateNews}
                                                            variant="caption"
                                                            color="textSecondary"
                                                            component="span"
                                                            display="block"
                                                            gutterBottom
                                                        >
                                                            <AccessTimeIcon fontSize="small" />
                                                            <span>{createdDate}</span>
                                                        </Typography>
                                                    </Typography>
                                                </CardContent>
                                                <CardContent>
                                                    <CardMedia
                                                        className={classes.newsImg}
                                                        image={img}
                                                        title="Test"
                                                    />
                                                </CardContent>
                                                <CardContent>
                                                    <Typography
                                                        className={classes.ceoContent}
                                                        variant="caption"
                                                        component="span"
                                                    >
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: `${desc}`,
                                                            }}
                                                        />
                                                    </Typography>
                                                </CardContent>
                                            </Grid>
                                        )

                                    })}
                            </Card>
                        </Grid>
                    </Card>
                </Paper>
            </Container>
        </AuthenticatedTemplate>
    )
}

export default NewsReadMore
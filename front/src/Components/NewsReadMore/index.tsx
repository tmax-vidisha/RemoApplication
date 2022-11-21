import React from 'react'
import { Fragment, useEffect, useState } from "react";
import {
    NavLink as RouterNavLink,

} from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useStyles } from "./Styles";
// import Carousel from 'react-grid-carousel';
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
    CardActionArea,
    Stack
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PublicClientApplication } from "@azure/msal-browser";
import { configuration } from "../../index";
import { useGetNewsQuery, useUpdateNewsTokenMutation, useGetAllNewsQuery } from '../../services/APIs';
import { useLocation } from 'react-router-dom'
import NationalNews from './NationalNews';
import IconText from '../Header/IconText';
// import { Carousel } from '@trendyol-js/react-carousel';
//import Carousel from 'react-material-ui-carousel';


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

// const NewsReadMore = () => {
const NewsReadMore: React.FC<IFolderProps> = (props: IFolderProps) => {
    const classes = useStyles();
    const { data, error, isLoading } = props;
    console.log(data, '888ddd88ttuytuytu888');


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

    return (
        <AuthenticatedTemplate>
            <Container className={classes.contentEditorWidth}>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }}>
                    <IconText />
                </Paper>
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
                    <NationalNews

                        data={data}

                        isLoading={isLoading}

                        error={error}

                    />
                </Paper>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }}>
                    <Card elevation={0} >
                        <Grid container item xs={12} spacing={0} style={{ overflowX: "scroll", width: "800px" }}>

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
                                            <Grid key={index} item xs={8} className={classes.newsRightBorder} >

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
                <Paper>
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
                            //   className={classes.newsHeader}
                            >
                                World News
                            </Typography>
                            {/* <Typography
                  variant="h6"
                  component="h6"
                  color="secondary"
                //   className={classes.newsHeader1}
                >
                  View All
                </Typography> */}
                        </Stack>
                        <Stack direction="row" spacing={2}>

                            {data?.response &&
                                data?.response?.slice(5, 10).map((item: any, index: any) => {
                                    const { fields = {} } = item;
                                    var newsTitle = fields?.Title;
                                    var newsMessageAsText = fields.Description;
                                    var newsIsActive = fields.IsActive;
                                    var createdDate = moment(
                                        fields.Modified
                                    ).fromNow();
                                    let newsMonth = moment(fields?.Modified).format("MMM");
                                    let newsYear = moment(fields?.Modified).format("YYYY");
                                    let newsDate = moment(fields?.Modified).format("DD");
                                    let newsDay = moment(fields?.Modified).format('dddd');
                                    // var img = fields?.newsUrl
                                    var img = fields?.NewsImage
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
                                    // console.log(fields?.NewsImage);
                                    // if (fields?.NewsImage != null) {
                                    //   newFullPath = JSON.parse(fields?.NewsImage);
                                    //   newsPath = newFullPath?.serverUrl + newFullPath?.serverRelativeUrl;
                                    // } 
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
                                                            // className={classes.newsHeader2}
                                                            variant="body2"
                                                            color="text.primary"
                                                        >

                                                            {newsTitle}
                                                        </Typography>
                                                        <Typography
                                                            // className={classes.newsHeader2}
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            {/* Thursday, June 05, 2022 */}
                                                            {/* {newsDay} {newsDate} {newsMonth} {newsYear} */}
                                                            {fields?.Reference}
                                                        </Typography>
                                                    </Stack>
                                                    {/* <div className={classes.row}>
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
                            </div> */}
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
                                {/* <div>
                    <ArrowBackIosIcon />
                  </div>
                  <div>
                    <MoreHorizIcon />
                  </div>
                  <div>
                    <ArrowForwardIosIcon />
                  </div> */}
                            </Stack>
                        </div>
                    </CardContent>
                </Paper>
            </Container>
        </AuthenticatedTemplate>
    )
}

export default NewsReadMore;


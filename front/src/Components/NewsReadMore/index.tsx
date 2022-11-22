// @ts-nocheck
import React, { useRef } from 'react'
import { Fragment, useEffect, useState } from "react";
import {
    NavLink as RouterNavLink,

} from "react-router-dom";
import { AuthenticatedTemplate } from "@azure/msal-react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useStyles } from "./Styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SkeletonAnimation from "../../Containers/Skeleton";
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
import Slider from 'react-slick'
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
    const slider = useRef();
    const slider1 = useRef();
    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };
    const next1 = () => {
        slider1.current.slickNext();
    };
    const previous1 = () => {
        slider1.current.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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
                                        
                                        className={classes.newsHeader}
                                        style={{color:"#39c8cf"}}
                                    >
                                        Top News
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        component="h6"
                                        color="secondary"
                                        className={classes.newsHeader1}
                                    >
                                        {/* View All */}
                                        <div>

                                            <ArrowBackIosIcon onClick={previous} style={{ cursor: "pointer",color:"#39c8cf" }} />
                                            <ArrowForwardIosIcon onClick={next} style={{ cursor: "pointer",color:"#39c8cf" }} />


                                        </div>
                                    </Typography>
                                </Stack>

                                <Slider
                                    ref={(c) => (slider.current = c)} {...settings}
                                >

                                    {data?.response &&
                                        data?.response?.map((card, index) => (
                                            <div key={index}>
                                                <Card sx={{ maxWidth: 250, maxHeight: 260 }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            // className={classes.newsImg}
                                                            style={{ margin: '7px', borderRadius:"8px" }}
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

                                                        </CardContent>

                                                    </CardActionArea>
                                                </Card>
                                            </div>
                                        ))}

                                </Slider>
                                <div>

                                    <Stack

                                        direction="row"

                                        justifyContent="space-between"

                                        alignItems="center"

                                        paddingTop={1}

                                    >
                                    </Stack>

                                </div>

                            </CardContent>
                        </>
                    )}
                </Paper>
                <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }}>
                    <Card elevation={0}>
                        <Grid container item xs={12} spacing={0}>
                            <Card
                                className={classes.moreNews}
                                sx={{ mb: 3 }}
                                elevation={0}
                            >
                                {data?.response &&
                                    data?.response?.slice(0,4).map((newsItem: any, index: any) => {
                                        const { fields = {} } = newsItem;
                                        //   const selectItemId = locationProps?.state;

                                        //    var ref = fields?.Reference;
                                        let createdDate = moment(fields?.Created).format(
                                            "MMM DD YYYY"
                                        );
                                        // if (fields?.NewsImage != null) {
                                        //   var newsPic = JSON.parse(fields?.NewsImage);
                                        //   var newsPath = newsPic?.serverUrl + newsPic?.serverRelativeUrl;
                                        // }
                                        return (
                                            <>
                                                <Grid key={index} item xs={12} className={classes.newsRightBorder}>
                                                    <CardContent sx={{ pb: "0!important" }}>
                                                        {/* <Typography variant="subtitle1" gutterBottom>
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: `${fields?.Title}`,
                                                                }}
                                                            />
                                                        </Typography> */}
                                                        <Typography className={classes.moreNewsTag}>
                                                            <Typography
                                                                className={classes.newsTag}
                                                                variant="caption"
                                                                display="block"
                                                            >
                                                                {/* <RouterNavLink to="#"> */}
                                                                    {fields?.Reference}
                                                                   
                                                                {/* </RouterNavLink> */}
                                                            </Typography>

                                                            {/* <Typography
                                                                className={classes.createdDateNews}
                                                                variant="caption"
                                                                color="textSecondary"
                                                                component="span"
                                                                display="block"
                                                                gutterBottom
                                                            >
                                                                <AccessTimeIcon fontSize="small" />
                                                                <span>{createdDate}</span>
                                                            </Typography> */}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardContent>
                                                        <CardMedia
                                                            className={classes.newsImg}
                                                            image={fields?.NewsImage}
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
                                                                    __html: `${fields?.Description}`,
                                                                }}
                                                            />
                                                        </Typography>
                                                    </CardContent>
                                                </Grid>
                                                
                                            </>
                                        );

                                    })}

                            </Card>
                        </Grid>
                    </Card>
                </Paper>
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
                                        
                                        className={classes.newsHeader}
                                        style={{color:"#39c8cf"}}
                                    >
                                        World News
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        component="h6"
                                        color="secondary"
                                        className={classes.newsHeader1}
                                    >
                                        {/* View All */}
                                        <div>

                                            <ArrowBackIosIcon onClick={previous1} style={{ cursor: "pointer",color:"#39c8cf" }} />
                                            <ArrowForwardIosIcon onClick={next1} style={{ cursor: "pointer" , color:"#39c8cf"}} />


                                        </div>
                                    </Typography>
                                </Stack>

                                <Slider
                                    ref={(c) => (slider1.current = c)} {...settings}
                                >

                                    {data?.response &&
                                        data?.response?.map((card, index) => (
                                            <div key={index}>
                                                <Card sx={{ maxWidth: 250, maxHeight: 260 }}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            // className={classes.newsImg}
                                                            style={{ margin: '7px', borderRadius:"8px" }}
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

                                                        </CardContent>

                                                    </CardActionArea>
                                                </Card>
                                            </div>
                                        ))}

                                </Slider>
                                <div>

                                    <Stack

                                        direction="row"

                                        justifyContent="space-between"

                                        alignItems="center"

                                        paddingTop={1}

                                    >
                                    </Stack>

                                </div>

                            </CardContent>
                        </>
                    )}
                </Paper>
            </Container>
        </AuthenticatedTemplate>
    )
}

export default NewsReadMore;
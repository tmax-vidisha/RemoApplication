// @ts-nocheck

import React, { useEffect, useState, useRef } from "react";
import { AuthenticatedTemplate } from "@azure/msal-react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  Stack,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  useGetNewsQuery,
  useUpdateNewsTokenMutation,
  useGetAllNewsQuery,
} from "../../services/APIs";
import { useStyles } from "./Styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import like from "../../Assets/Images/like.svg";
import enableLike from "../../Assets/Images/enableLike.svg";
import share from "../../Assets/Images/share.svg";
import pin from "../../Assets/Images/pin.svg";
import pinActive from "../../Assets/Images/pinActive.svg";
import internet from "../../Assets/Images/internet.svg";
import SkeletonAnimation from "../../Containers/Skeleton";
import Slider from "react-slick";
// import {FaChevronLeft, FaChevronRight} from 'react-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var moment = require("moment-timezone");
interface IFolderProps {
  data: any;
  error: any;
  isLoading: any;
  //onClick: any;
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
  const { data, error, isLoading } = props;
  console.log(data?.response, "NewsDary");

  // const [slideLeft, setSlideLeft] = React.useState(0);
  // const [isScrolling, setIsScrolling] = React.useState(false);
  // const sliderWidth = 1900;

  // //on arrow click
  // const moveRight = () => {

  //   const el = document.getElementById(`hscroll`);
  //   //@ts-ignore
  //   setSlideLeft((el.scrollLeft += 200));
  // };

  // const moveLeft = () => {
  //   const el = document.getElementById(`hscroll`);
  //   //@ts-ignore
  //   setSlideLeft((el.scrollLeft -= 200));
  // };

  // if (isScrolling) {
  //   setTimeout(() => setIsScrolling(false), 3000);
  // }
  // const [nav1, setNav1] = useState();
  // const [nav2, setNav2] = useState();
  // const slider1 = useRef(null);
  // const slider2 = useRef(null);
  // const customeSlider = useRef();
  // //i dont seem to need this
  // useEffect(() => {
  //   setNav1(slider1.current);
  //   setNav2(slider2.current);
  // }, []);

  // const settingCarousel = {
  //   nextArrow: <ArrowForwardIosIcon />,
  //   prevArrow: <ArrowBackIosIcon />,
  // };

  // const settingsSliderNav = {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   dots: false,
  //   arrows: true,
  //   focusOnSelect: true,
  // }

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   arrows: true,
  // }
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoPlay: false,
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

  const [likes, setLikes] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [clickCount, setClickCount] = useState({});
  const [likeImages, setLikeImages] = useState({});

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
      setIsActive(isActive);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
    setIsActive(!isActive);
  };

  const hide = () => {
    setIsActive(!isActive);
    setIsClicked(!isClicked);
  };

  // const [tempData, setTempData] = useState([]);

  // useEffect(() => {
  //   let temp = data.response.map((item) => {
  //     return {
  //       ...item,
  //       likeActive: true,
  //       likeCount: 0,
  //     };
  //     setTempData(temp);
  //   });
  // }, [data]);

  // const handleBlue = () => {
  //   let temp = data.response.map((item) => {
  //     return {
  //       ...item,
  //       likeActive: false,
  //       likeCount: setTempData(temp),
  //     };
  //   });
  // };
  const handleClick1 = (cardId: any) => {
    if (!cardId) {
      setIsActive(!isActive);
      console.error("Invalid card ID:", cardId);
      return;
    }
    console.log("Card ID:", cardId);
    setLikeImages((prevImages) => ({
      ...prevImages,
      [cardId]: !likeImages[cardId] ? like : enableLike,
    }));

    setClickCount((prevClickCount) => {
      const currentCount = prevClickCount[cardId] || 0;
      const updatedCount = currentCount + (currentCount >= 0 ? 1 : -1);

      const updatedClickCount = {
        ...prevClickCount,
        [cardId]: updatedCount,
      };
      // Store the updated click counts in localStorage
      localStorage.setItem("clickCount", JSON.stringify(updatedClickCount));

      return updatedClickCount;
    });
    setLikes((prevLikes) => ({
      ...prevLikes,
      [cardId]: isClicked
        ? (prevLikes[cardId] || 0) - 1
        : (prevLikes[cardId] || 0) + 1,
    }));
    setIsClicked(!isClicked);
    setIsActive(!isActive);
  };
  useEffect(() => {
    const storedClickCount = localStorage.getItem("clickCount");
    if (storedClickCount) {
      setClickCount(JSON.parse(storedClickCount));
    }
  }, []);

  const [isCardPinned, setIsCardPinned] = useState({});

  const handlePinClick = (cardId) => {
    if (!cardId) {
      console.error("Invalid card ID:", cardId);
      return;
    }

    setIsCardPinned((prevPinnedState) => ({
      ...prevPinnedState,
      [cardId]: !prevPinnedState[cardId],
    }));

    // Store the updated pinned state in localStorage
    localStorage.setItem("pinnedState", JSON.stringify(isCardPinned));
  };
  useEffect(() => {
    const storedPinnedState = localStorage.getItem("pinnedState");
    if (storedPinnedState) {
      setIsCardPinned(JSON.parse(storedPinnedState));
    }
  }, []);
  return (
    <AuthenticatedTemplate>
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
                  color="secondary"
                  className={classes.newsHeader}
                >
                  News
                </Typography>
                <Typography variant="h6" component="h6" color="secondary">
                  <Link to="/NewsInfo" className={classes.newsHeader1}>
                    {" "}
                    View All{" "}
                  </Link>
                </Typography>
              </Stack>
              <Slider ref={(c) => (slider.current = c)} {...settings}>
                {data?.response &&
                  data?.response?.map((card, index, id) => (
                    <div key={index}>
                      <Card className={classes.singleCard}>
                        <CardActionArea>
                          <CardMedia
                            // className={classes.newsImg}
                            style={{
                              margin: "7px",
                              borderRadius: "4px",
                              width: "97%",
                              position: "relative",
                            }}
                            component="img"
                            height="160"
                            // title={card.fields?.LinkTitle}
                            image={card.fields?.NewsImage}
                            alt="green iguana"
                          />
                          <Grid className={classes.cardNewTitle}>
                            {card.fields?.LinkTitle}
                            {card.fields?.id}
                          </Grid>
                          <CardContent>
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                            >
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
                                {moment(card.fields?.Modified).format(
                                  "dddd"
                                )}{" "}
                                {moment(card.fields?.Modified).format("DD")}{" "}
                                {moment(card.fields?.Modified).format("MMM")}{" "}
                                {moment(card.fields?.Modified).format("YYYY")}
                              </Typography>
                            </Stack>
                            <div className={classes.row}>
                              <div className={classes.block}>
                                <div
                                  style={{
                                    width: "40px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  {/* {isActive ? (
                                    <img
                                      src={enableLike}
                                      alt="like"
                                      onClick={() => hide(card.fields?.id)}
                                      style={{ width: "15px" }}
                                    />
                                  ) : (
                                    <img
                                      src={like}
                                      alt="like"
                                      className={`like-button ${
                                        isClicked && "liked"
                                      }`}
                                      onClick={() =>
                                        handleClick1(card?.fields?.id)
                                      }
                                      style={{ width: "15px" }}
                                    />
                                  )} */}

                                  <img
                                    src={likeImages[card.fields?.id] || like}
                                    alt="like"
                                    className={`like-button ${
                                      isClicked && "liked"
                                    }`}
                                    onClick={() =>
                                      handleClick1(card?.fields?.id)
                                    }
                                    style={{ width: "15px" }}
                                  />
                                  {/* <span className="likes-counter">{ `Like | ${likes}` }</span> */}
                                  <span
                                    className="likes-counter"
                                    style={{ fontSize: "12px" }}
                                  >
                                    {clickCount[card.fields?.id] || 0}
                                    {/* {`${likes[card.fields?.id] || 0}`} */}
                                    {/* {`${likes}`} */}
                                  </span>
                                </div>
                              </div>
                              <div className={classes.block}>
                                <a href="mailto:https://outlook.office.com/mail/">
                                  <img src={share} alt="like" />
                                </a>
                              </div>
                              <div className={classes.block}>
                                {isCardPinned[card.fields?.id] ? (
                                  <img
                                    src={pinActive}
                                    alt="like"
                                    onClick={() =>
                                      handlePinClick(card.fields?.id)
                                    }
                                  />
                                ) : (
                                  <img
                                    src={pin}
                                    alt="like"
                                    onClick={() =>
                                      handlePinClick(card.fields?.id)
                                    }
                                  />
                                )}
                              </div>
                              <div className={classes.block}>
                                <a
                                  rel="noreferrer"
                                  href="https://www.google.com/search?q=globalnews"
                                  target="_blank"
                                >
                                  <img src={internet} alt="like" />
                                </a>
                              </div>
                            </div>
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
                  <div>
                    <ArrowBackIosIcon
                      onClick={previous}
                      style={{ cursor: "pointer", color: "#009BAD" }}
                    />
                  </div>
                  <div>
                    <MoreHorizIcon style={{ color: "#009BAD" }} />
                  </div>
                  <div>
                    <ArrowForwardIosIcon
                      onClick={next}
                      style={{ cursor: "pointer", color: "#009BAD" }}
                    />
                  </div>
                </Stack>
              </div>
            </CardContent>
          </>
        )}
      </Paper>
      {/* <Slider ref={(c) => (slider.current = c)} {...settings}>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
            <div>Slide 5</div>
        </Slider> */}
    </AuthenticatedTemplate>
  );
};

export default News;

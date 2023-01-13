// @ts-nocheck
import { Grid, Typography, Paper, Container, Link, Breadcrumbs, Box, Card } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconText from '../Header/IconText';
import { useStyles } from './Styles';
import { SRLWrapper } from "simple-react-lightbox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IFolderProps {
  data: any,
  error: any,
  isLoading: any,
  // onClick?: (id: string, name: string) => void;
  // dataItem:any,
  // dataItemError:any,
  // dataItemIsLoading:any
}
// const FolderItems: React.FC<IFolderProps> = (props: IFolderProps) => {
const FolderItems = () => {
  const classes = useStyles();
  // const { data, error, isLoading} =props
  let location = useLocation();
  console.log(location.state);
  //@ts-ignore
  const { folderData = [] } = location.state;
  // console.log(tokens,sitesId,drivesId,'yjytjtyjtj')
  // console.log(folderData,'yyjyjyjyjyyj')

  const filterdImagesData = folderData?.filter((person: any) => person.file.mimeType == "image/jpeg")
  console.log(filterdImagesData, 'Images')

  const filterdVideoData = folderData?.filter((person: any) => person.file.mimeType == 'video/mp4')
  console.log(filterdVideoData, 'Videos')

  const [showResults, setShowResults] = React.useState(true)
  const onClick = () => setShowResults(false)
  const HandleClick = () => setShowResults(true);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px'
  };

  const slidesData = [
    {
      id: 1,
      title: 'repellendus id ullam',
      label: 'Dolorem officiis temporibus.'
    }, {
      id: 2,
      title: 'excepturi consequatur est',
      label: 'Officia non provident dolor esse et neque.'
    }, {
      id: 3,
      title: 'eius doloribus blanditiis',
      label: 'Ut recusandae vel vitae molestiae id soluta.'
    }, {
      id: 4,
      title: 'nihil voluptates delectus',
      label: 'Qui vel consequatur recusandae illo repellendus.'
    }, {
      id: 5,
      title: 'nemo dolorem necessitatibus',
      label: 'Placeat odit velit itaque voluptatem.'
    }, {
      id: 6,
      title: 'dolorem quibusdam quasi',
      label: 'Adipisci officiis repudiandae.'
    },
  ];


  return (
    <div>
      <IconText />
      <Container className={classes.contentEditorWidth}>
        <Card className={classes.cardHeight} elevation={0}>
          <Paper className={classes.innerBackground}>
            <div className={classes.innerBannerOverlay}></div>
            <Paper className={classes.contentHeader} elevation={0}>
              <Typography className={classes.breadcrumbs} variant="h6">

                <Link className={classes.breadLinks} color="inherit" href="/NewsInfo">
                  News
                </Link>
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
                  <Link className={classes.breadLinks} color="inherit" href="/GalleryFolder">
                    <Typography>Gallery Folders </Typography>
                  </Link>
                  <Typography>Images </Typography>
                  <Typography>Videos </Typography>

                </Breadcrumbs>
              </Typography>
            </Paper>
          </Paper>
        </Card>
        <Paper className={classes.cardHeight} elevation={0} sx={{ mb: 3 }} >
          <Grid item xs={12} style={{ backgroundColor: "white" }}>
            <Box style={{ margin: "10px", width: "150px", display: "flex", justifyContent: "space-between" }}>
              <p style={{ color: "#39c8cf", }} onClick={onClick}>Images</p>
              <p style={{ color: "#39c8cf", }} onClick={HandleClick}>Videos</p>
            </Box>
            {showResults ? (
              
              <Box style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", }}>
                  {
                    filterdVideoData.map((item: any) => (

                      <Grid>
                        <video width="200" height="150" >
                          <source src={item.webUrl} type="video/mp4" />
                        </video>
                      </Grid>
                    ))
                  }
              </Box>
             
            ) : (
              <SRLWrapper>
                <Box style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
                  {
                    filterdImagesData.map((item: any) => (
                      <Grid  >
                        <img src={item.webUrl} style={{ width: "167px", height: "170px", margin: "20px", borderRadius: "10px" }} />
                      </Grid>
                    ))
                  }

                </Box>
              </SRLWrapper>
            )}
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

export default FolderItems;


 // <div>
              //   <div>
              //     <Slider
              //       {...settingsMain}
              //       asNavFor={nav2}
              //       ref={slider => (setSlider1(slider))}
              //     >

              //       {
              //         filterdVideoData.map((item: any) => (
              //           <Grid  >

              //             <video width="200" height="150"
              //             >
              //               <source src={item.webUrl} type="video/mp4" />
              //             </video>

              //           </Grid>
              //         ))
              //       }

              //     </Slider>
              //   </div>
              //   <div >
              //     <Slider

              //       asNavFor={nav1}
              //       ref={slider => (setSlider2(slider))}
              //       slidesToShow={4}
              //       swipeToSlide={true}
              //       focusOnSelect={true}
              //       infinite={false}
              //       autoplay={false}
              //       arrows={false}
              //       centerMode={false}
              //       responsive={[
              //         {
              //           breakpoint: 768,
              //           settings: {
              //             slidesToShow: 3,
              //             slidesToScroll: 1,
              //             infinite: false,
              //             dots: false,
              //             arrows: false,
              //             autoplay: false,
              //             centerMode: false
              //           }
              //         }
              //       ]
              //       }
              //     >

              //       {
              //         filterdVideoData.map((item: any) => (
              //           <li><a href="#" data-interception="off">

              //             <video width="200" height="150" >
              //               <source src={item.webUrl} type="video/mp4" />
              //             </video>

              //           </a></li>
              //         ))
              //       }

              //     </Slider>
              //   </div>



              // </div>
import React, { useMemo, useRef } from 'react';
import { useState } from 'react';
// import ImageGallery from 'react-image-gallery';
// import { createStyles, makeStyles } from '@mui/styles';
// import { Theme } from '@mui/material';
// import "react-image-gallery/styles/css/image-gallery.css";
import { SRLWrapper } from "simple-react-lightbox";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1
//     },
//     thubmnail: {
//       backgroundColor: "red",
//       '&.image-gallery-thumbnail.active': {
//         borderColor: 'green',
//       },
//       '&.image-gallery-thumbnail:hover': {
//         borderColor: 'lightgreen',
//       },
//     }
//   })
// );

const images = [
    {
        original: "https://picsum.photos/id/1018/400/200/",
        thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
        original: "https://picsum.photos/id/1015/800/400/",
        thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
        original: "https://picsum.photos/id/1019/800/400/",
        thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
    // {
    //     original: <img src="https://picsum.photos" alt=""  style={{width:"400px"}}/>,
    //     thumbnail:<img src="https://picsum.photos" alt="" style={{width:"100px"}} />
    //   },
];



const PluginImgVideo = () => {

    // const classes = useStyles();

    // const items = useMemo(() => {
    //     return images.map((item) => {
    //         const newItem = { ...item };
    //         newItem.thumbnail = classes.thubmnail;
    //         return newItem;
    //     });
    // }, [classes.thubmnail]);

    // const playRef = useRef<ImageGallery | null>(null);
    // const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // const playOrPause = () => {
    //     setIsPlaying((prev) => {
    //         playRef?.current?.[prev ? "pause" : "play"]();
    //         return !prev;
    //     });
    // };

    return (
       
      <SRLWrapper>
      <div>
        <a href="https://picsum.photos/1024/768?image=2">
          <img src="https://picsum.photos/200/300?image=2" alt="lightbox" />
        </a>
        <a href="https://picsum.photos/1024/768?image=3">
          <img src="https://picsum.photos/200/300?image=3" alt="lightbox1" />
        </a>
        <a href="https://picsum.photos/1024/768?image=4">
          <img src="https://picsum.photos/200/300?image=4" alt="lightbox2" />
        </a>
        <a href="https://picsum.photos/1024/768?image=5">
          <img src="https://picsum.photos/200/300?image=5" alt="lightbox3" />
        </a>
      </div>
    </SRLWrapper>
       

    );
};

export default PluginImgVideo;
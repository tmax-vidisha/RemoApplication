import React, { useMemo, useRef } from 'react';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import "react-image-gallery/styles/css/image-gallery.css";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    thubmnail: {
      backgroundColor: "red",
      '&.image-gallery-thumbnail.active': {
        borderColor: 'green',
      },
      '&.image-gallery-thumbnail:hover': {
        borderColor: 'lightgreen',
      },
    }
  })
);

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

    const classes = useStyles();

    const items = useMemo(() => {
        return images.map((item) => {
            const newItem = { ...item };
            newItem.thumbnail = classes.thubmnail;
            return newItem;
        });
    }, [classes.thubmnail]);

    // const playRef = useRef<ImageGallery | null>(null);
    // const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // const playOrPause = () => {
    //     setIsPlaying((prev) => {
    //         playRef?.current?.[prev ? "pause" : "play"]();
    //         return !prev;
    //     });
    // };

    return (
        <div>
            {/* <ImageGallery ref={playRef} items={images} />
      <button onClick={playOrPause}>{isPlaying ? "Pause" : "Play"}</button> */}

            <div className={classes.root}>
                <ImageGallery
                    items={items}
                    showFullscreenButton={true}
                    showThumbnails
                />
            </div>
        </div>

    );
};

export default PluginImgVideo;
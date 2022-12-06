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

import "react-image-gallery/styles/css/image-gallery.css";
import { useStyles } from './Styles';
import { Box } from '@mui/material';

const data=[
	{
		"id":  1,
		"image":  "https://picsum.photos/200/800",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	},
	{
		"id":  2,
		"image":  "https://picsum.photos/300/200",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	},
	{
		"id":  3,
		"image":  "https://picsum.photos/800/200",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	},
	{
		"id":  4,
		"image":  "https://picsum.photos/500/800",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	},
	{
		"id":  4,
		"image":  "https://picsum.photos/500",
		"title":  "Lorem Ipsum",
		"description":
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!"
	}
]


const PluginImgVideo = () => {

    // const classes = useStyles();


   

    return (

        <div>
        <Box>
       {data.map((item, index) => (
			<>
				<img
					key={item.id}
					src={item.image}
					alt={item.title}
					style={{ maxHeight:  "80vh", maxWidth:  "50vw" }}
					onClick={() => {
					lightBoxHandler(true, index);
					}}
				/>
			</>
			))}
       </Box>
		</div>

       
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
import React, { useMemo, useRef } from 'react';

import "react-lightbox-pack/dist/index.css";

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

    const classes = useStyles();

    const [toggle, setToggle] =  React.useState(false);
    const [sIndex, setSIndex] =  React.useState(0);
  
    // Handler
    const  lightBoxHandler  = (state:any, sIndex:any) => {
      setToggle(state);
      setSIndex(sIndex);
    };

   

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

    );
};

export default PluginImgVideo;
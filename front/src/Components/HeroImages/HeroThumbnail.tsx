import React from 'react';
import { Container } from '@mui/material';
import IconText from '../Header/IconText';
import { useStyles } from './Styles';
import Header from '../Header';
// import  poster from "../../Assets/videos/poster.mp4"
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';



const HeroThumbnail = () => {
    const classes = useStyles();
    return (
        <div>
            <IconText />      
            <Container className={classes.contentEditorWidth}>
                {/* <video poster="../../Assets/videos/poster.mp4" onClick={e => e.currentTarget.play()} /> */}
                <Card
                    raised
                    sx={{
                        maxWidth: 800,
                        margin: "0 auto",
                        padding: "0.1em",
                    }}
                >
                    <CardMedia
                        component="video"
                        autoPlay
                        controls
                       src="../../Assets/videos/poster.mp4"
                        // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        width="840"
                        height="300"
                    />
                </Card>

            </Container>
          
        </div>
    );
};

export default HeroThumbnail;
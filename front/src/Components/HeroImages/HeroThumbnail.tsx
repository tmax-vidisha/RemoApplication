import React from 'react';
import { Container} from '@mui/material';
import IconText from '../Header/IconText';
import { useStyles } from './Styles';
import Header from '../Header';
// import  poster from "../../Assets/videos/poster.mp4"
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import {useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const HeroThumbnail = () => {
    const classes = useStyles();
    let location = useLocation();
    console.log(location.state);
    //@ts-ignore
    const { folderData } = location.state;

    console.log(folderData,'hththfhfz')
    return (
        <div>
            <IconText />      
            <Container className={classes.contentEditorWidth} style={{margin:"20px"}}>
                {/* <video poster="../../Assets/videos/poster.mp4" onClick={e => e.currentTarget.play()} /> */}
                <Card
                    raised
                    sx={{
                        width: '100%',
                        margin: "0 auto",
                        padding: "0.1em",
                        
                    }}
                >
                    <CardMedia
                        component="video"
                        autoPlay
                        controls
                        src={folderData}
                        // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                        style={{width:'100%', height:"200px",position:"relative"  }}
                    />
                    <button style={{position:"absolute",bottom: "22%"}}><Link to="/">Back</Link></button>
                </Card>

            </Container>
          
        </div>
    );
};

export default HeroThumbnail;
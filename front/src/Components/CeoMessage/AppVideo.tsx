import React, { useRef } from 'react';


const AppVideo = () => {
 
    const videoPlayerFullScreen = (e:any,screenWidth:any ) => {
        //let orientation = screen.orientation
        if (screenWidth < 768) {
          // alert("clicked")
          console.log(orientation)
          //orientation.unlock()
          // screen.orientation.angle = 90
          // screen.orientation.angle(90)
         // screen.orientation.lock("landscape-primary")
          // document.getElementById("live_videoPlayer").requestFullscreen()
          console.log(orientation)
        } else {
        //   document.getElementById("live_videoPlayer").requestFullscreen()  
        }
    }
    return (
        <video muted autoPlay loop controls id="live_videoPlayer" onClick={() =>videoPlayerFullScreen} style={{width:"200px"}}>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
    );
};

export default AppVideo;
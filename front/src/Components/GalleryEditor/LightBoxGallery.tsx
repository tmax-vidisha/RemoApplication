import React from 'react';
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import { useState } from 'react';
// import {Lightbox} from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    "love",
    "view",
   
  ];

const LightBoxGallery = () => {
    const [isOpen, setIsOpen]  = useState(false);
    const [photoIndex, setPhotoIndex]  = useState(0);
    return (
        <div>
        <button type="button" onClick={() => setIsOpen(true)}>
          Open Lightbox
        </button>

        {isOpen && (
        //   <Lightbox
        //     mainSrc={images[photoIndex]}
        //     nextSrc={images[(photoIndex + 1) % images.length]}
        //     prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        //     onCloseRequest={() => setIsOpen(false)}
        //     onMovePrevRequest={() =>
        //         setPhotoIndex({
        //         photoIndex: (photoIndex + images.length - 1) % images.length,
        //       })
        //     }
        //     onMoveNextRequest={() =>
        //         setPhotoIndex({
        //         photoIndex: (photoIndex + 1) % images.length,
        //       })
        //     }
        //   />
        )}
      </div>
    );
};

export default LightBoxGallery;
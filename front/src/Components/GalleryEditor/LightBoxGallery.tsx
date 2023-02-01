import React from 'react';
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import gIcon from "../../Assets/Images/gsort1.png";
import gIcon2 from "../../Assets/Images/gsort2.png";
import gSortIcon from "../../Assets/Images/smallgsort.png";
import { useState } from 'react';

// @ts-ignore
import ReactImageVideoLightbox from "react-image-video-lightbox";

const data = [
  {
    index: 0,
    // url: "https://placekitten.com/450/300",
    url: gIcon,
    // thumbnail: "https://placekitten.com/450/300",
    thumbnail: gSortIcon,
    type: "photo"
  },
  {
    index: 1,
    url: gIcon,
    thumbnail: gSortIcon,
    type: "video"
  },
  {
    index: 2,
    url: gIcon,
    type: "photo"
  },
  {
    index: 3,
    url: gIcon,
    thumbnail: gSortIcon,
    type: "video"
  }
];


const LightBoxGallery = () => {

  const [open, setopen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openlightbox = (index: any) => {
    console.log(index);
    setCurrentIndex(index);
    setopen(true);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        {data.map((item, index) => {
          return <div>
            <img src={item.thumbnail} onClick={() => openlightbox(index)} />
          </div>
        })}
      </div>
      {open && (
        <ReactImageVideoLightbox
          data={data}
          startIndex={currentIndex}
          showResourceCount={true}
          onCloseCallback={() => setopen(false)}
          onNavigationCallback={(currentIndex: any) =>
            console.log(`Current index: ${currentIndex}`)
          }
        />
      )}
    </div>
  );
};

export default LightBoxGallery;
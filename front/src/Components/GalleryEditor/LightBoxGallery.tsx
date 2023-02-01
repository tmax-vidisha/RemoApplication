import React from 'react';
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import { useState } from 'react';
// @ts-ignore
import ReactImageVideoLightbox from "react-image-video-lightbox";

const data = [
  {
    index: 0,
    url: "https://placekitten.com/450/300",
    thumbnail: "https://placekitten.com/450/300",
    type: "photo"
  },
  {
    index: 1,
    url: "https://dev-api.wegolightly.com/upload/644fadb6e4f3c3c9207e1cae39e53efa.webm",
    thumbnail: "https://www.youtube.com/embed/ScMzIvxBSi4",
    type: "video"
  },
  {
    index: 2,
    url: "https://placekitten.com/550/500",
    thumbnail: "https://placekitten.com/550/500",
    type: "photo"
  },
  {
    index: 3,
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    type: "video"
  }
];

const LightBoxGallery = () => {



  const [open, setopen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openlightbox = (index :any) => {
    console.log(index);
    setCurrentIndex(index);
    setopen(true);
  };
  return (
    <div>
      {data.map((item, index) => {
        return <img src={item.thumbnail} onClick={() => openlightbox(index)} />;
      })}
      <div>kdkdk</div>
      {open && (
        <ReactImageVideoLightbox
          data={data}
          startIndex={currentIndex}
          showResourceCount={true}
          onCloseCallback={() => setopen(false)}
          onNavigationCallback={(currentIndex :any) =>
            console.log(`Current index: ${currentIndex}`)
          }
        />
      )}
    </div>
  );

        {/* {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
                setPhotoIndex({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
                setPhotoIndex({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )} */}
      </div>
    );

};

export default LightBoxGallery;
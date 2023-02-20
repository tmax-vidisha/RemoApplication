import React from 'react';
import love from "../../Assets/Images/love.svg";
import view from "../../Assets/Images/viewNew.svg";
import gIcon from "../../Assets/Images/gsort1.png";
import gIcon2 from "../../Assets/Images/gsort2.png";
import gSortIcon from "../../Assets/Images/smallgsort.png";
import { useState } from 'react';

// @ts-ignore
import ReactImageVideoLightbox from "react-image-video-lightbox";

// const data = [
//   {
//     index: 0,
//     // url: "https://placekitten.com/450/300",
//     url: gIcon,
//     // thumbnail: "https://placekitten.com/450/300",
//     thumbnail: gSortIcon,
//     type: "photo"
//   },
//   {
//     index: 1,
//     url: gIcon,
//     thumbnail: gSortIcon,
//     type: "video"
//   },
//   {
//     index: 2,
//     url: gIcon,
//     type: "photo"
//   },
//   {
//     index: 3,
//     url: gIcon,
//     thumbnail: gSortIcon,
//     type: "video"
//   }
// ];
interface IFolderProps {

  // onClick?: (obj: any) => void;
  data:any,
  // isLoading:any,
  // isSuccess:any,
}

// const LightBoxGallery = () => {
  const LightBoxGallery: React.FC<IFolderProps> = (props: IFolderProps) => {

  const [open, setopen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
   const {data } =props
  //  console.log(data,'khtyjtytttttttttttttttttttttt')
  //  const yuy = [data]
  //  console.log(yuy,'kkk')
  const openlightbox = (index:any) => {
    console.log(index);
    setCurrentIndex(index);
    setopen(true);
  };
  return (
    <div>
       
      {data && data?.map((item:any, index:any) => {
        return <img src={item.webUrl} onClick={() => openlightbox(index)} />;
      })}
      
      {open && (
        <ReactImageVideoLightbox
          data={data}
          startIndex={currentIndex}
          showResourceCount={true}
          onCloseCallback={() => setopen(false)}
          // onNavigationCallback={(currentIndex:any) =>
          //   console.log(`Current index: ${currentIndex}`)
          // }
        />
      )}
    </div>
   
    // <>ddth</>
  );
};

export default LightBoxGallery;
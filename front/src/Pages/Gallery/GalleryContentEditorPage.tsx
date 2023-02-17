import React from 'react'
import NewsEditor from '../../Components/NewsEditor/NewsEditor'
import {useGetGalleryRootQuery,useGetItemInGalleryMutation } from '../../services/contentEditor'
// import { useG } from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
import GalleryEditor from '../../Components/GalleryEditor/GalleryEditor';
const GalleryContentEditorPage = () => {
  
    
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetGalleryRootQuery(token)
    const [sendItem, { data: ItemChildren, error: itemChildrenError, isLoading: itemChildrenIsLoading }] = useGetItemInGalleryMutation();
    console.log(ItemChildren,'kkkytryr')
    const folderClickHandler = async (
      // obj:any
      id: string,
      name: string,
      folder: any,
      // webUrl: any
  ): Promise<void> => {

      // await getFolderChildrenAction(id);
      // await setBreadCrumbAction(id, name);
      console.log(id,'hthyhythyhyhrthtrh')
      console.log(folder)
      // console.log(webUrl)
      if (folder === undefined) {
          // setUrl(webUrl)

          console.log('Not folder')
      } else {
          console.log('Its  folder')
          // setShow(!show)
          const Data = {
              // name:id,
              ItemId: id,
              Name: name
          }
          //  console.log(fd)
          await sendItem(Data)
          // await setBreadCrumbAction(id, name);
      }


      // setShow(!show)
  };
    
  return (
    <div>
    <GalleryEditor
       data={data}
       isLoading={isLoading}
       isSuccess={isSuccess}
      onClick={folderClickHandler}
    
    />
    </div>
  )
}

export default GalleryContentEditorPage
import React, { useReducer } from 'react'
import NewsEditor from '../../Components/NewsEditor/NewsEditor'
import { ActionType } from '../../Store copy/Actions/actionTypes';
import {useGetGalleryRootQuery,useGetItemInGalleryMutation,useUploadFolderRemoGalleryMutation } from '../../services/contentEditor'
// import { useG } from '../../services/APIs';
import useCustom from '../../hooks/useCustom';
import Breadcrumb from '../../hooks/Breadcrumb';
import {breadcrumbsReducer}  from '../../Store copy/Reducer/foldersReducer'
import GalleryEditor from '../../Components/GalleryEditor/GalleryEditor';
const GalleryContentEditorPage = () => {
  
    
    const {token} = useCustom();
    const { data,isLoading,isSuccess } = useGetGalleryRootQuery(token)
    const [sendItem, { data: ItemChildren,isSuccess : isSuccessItem, isLoading: itemChildrenIsLoading }] = useGetItemInGalleryMutation();
    const [sendData, {isSuccess : createdNewFolderSucessfull}] = useUploadFolderRemoGalleryMutation();
    console.log(ItemChildren,'kkkytryr')
    const [breadcrumbsState, breadcrumbsDispatch] = useReducer(breadcrumbsReducer, {
      breadcrumbs: [{
          id: '',
          name: 'Picture Gallery'
      }]
  });
  console.log('breadcrumbsState', breadcrumbsState)
  const setBreadCrumbAction = async (id: string, name: string) => {
      return breadcrumbsDispatch({ type: ActionType.SET_BREADCRUMBS, payload: { id, name } });
  };

  const updateBreadCrumbAction = async (id: string) => {
      return breadcrumbsDispatch({ type: ActionType.UPDATE_BREADCRUMBS, payload: { id } });
  };
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
          await setBreadCrumbAction(id, name);
      }
     

      // setShow(!show)
  };
  const breadcrumbClickHandler = async (id: string) => {
    await updateBreadCrumbAction(id);
    // await getFolderChildrenAction(id);
    const Data = {
        // name:id,
        ItemId: id,
        //    Name:name
    }
    //  console.log(fd)
    await sendItem(Data)
};
const  createNewFolder= async(obj:any) =>{

  console.log(obj,'hgfhgfhfgjtjyj')
    // console.log(name,'uuuuu')
  //   const {name ,lastModified,lastModifiedDate,size,type,webkitRelativePath } = data

  //   const see ={
  //       name,
  //       lastModified,
  //       lastModifiedDate,
  //       size,
  //       type,
  //       webkitRelativePath
  //   }
  //   const Data = {
  //       names:name,
  //      fileSelected:data
  //  }
  await sendData(obj)
}



  return (
    <div>
       <Breadcrumb breadcrumb={breadcrumbsState.breadcrumbs} 
                    getChildHandler={breadcrumbClickHandler}  />
    <GalleryEditor
       data={data}
       isLoading={isLoading}
       isSuccess={isSuccess}
       onClick={folderClickHandler}
      ItemChildren={ItemChildren}
      isSuccessItem={isSuccessItem}
      itemChildrenIsLoading={itemChildrenIsLoading}
      createNewFolder={createNewFolder}
      createdNewFolderSucessfull={createdNewFolderSucessfull}
    />
    </div>
  )
}

export default GalleryContentEditorPage
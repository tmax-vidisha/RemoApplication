import React from 'react'
import useCustom from '../../hooks/useCustom';
import ImagesVideos from '../../Components/ImagesVideos'
import { useGetAllRootItemSharePointQuery,useGetPictureItemsSharePointMutation } from '../../services/gallery';
const ImagesAndVideosPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllRootItemSharePointQuery(token)
    const [sendItem,{data:copyResponse,error: itemChildrenError,isLoading: itemChildrenIsLoading}] = useGetPictureItemsSharePointMutation();
  console.log(data,"foldersharepoint ")
  console.log(copyResponse,'rgrgtrgththththyjyjsgass')
  const  getFolderItems = async(id:string,name:string) =>{
    console.log(id,name)
    const Data = {
       // name:id,
       ItemId: id,
       Name:name
   }
   await sendItem(Data)
}

  return (
    <div>
        <ImagesVideos
           data = {data}
           isLoading={isLoading}
           error= {error}
           onClick={getFolderItems}
           dataItem={copyResponse}
           dataItemError={itemChildrenError}
           dataItemIsLoading={itemChildrenIsLoading}
        /> 
    </div>
  )
}


export default ImagesAndVideosPage;


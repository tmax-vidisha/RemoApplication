import { AuthenticatedTemplate } from '@azure/msal-react';
import React from 'react'
import RecentFile from '../../../Components/WorkSpaceOne/RecentFiles/RecentFile'
import useCustom from '../../../hooks/useCustom'
import { useGetAllRecentItemsQuery,useCopylinkOneDriveMutation, useDownloadUrlItemOneDriveMutation, useDeleteItemOneDriveMutation } from '../../../services/graph';

const MyRecent = () => {
    const { token } = useCustom();
    const { data, error, isLoading } = useGetAllRecentItemsQuery(token);
    console.log(data,'ttuuuyyyjsg')
    const [sendCopyItem,{data:copyResponse}] = useCopylinkOneDriveMutation();
    const [sendItem, { data: ItemDownloadUrl, error: itemChildrenError, isLoading: itemChildrenIsLoading }] = useDownloadUrlItemOneDriveMutation();
     console.log(ItemDownloadUrl,'grdrhtrh')
    const [sendDeleteItem,{data:deleteResponse}] =  useDeleteItemOneDriveMutation();

    const  copylinkDriveItem = async(id:string,name:string) =>{
      console.log(id,name)
      const Data = {
         // name:id,
         ItemId: id,
         Name:name
     }
     await sendCopyItem(Data)
 }

 const  getDownloadDriveItem = async(id:string,name:string) =>{
  console.log(id,name)
  const Data = {
     // name:id,
     ItemId: id,
     Name:name
 }
 await sendItem(Data)
}
const  deleteDriveItem = async(id:string,name:string) =>{
  console.log(id,name)
  const Data = {
     // name:id,
     ItemId: id,
     Name:name
 }
 await sendDeleteItem(Data)
}


  return (
    <AuthenticatedTemplate>
    <RecentFile
        data={data}
        isLoading={isLoading}
        error={error}
        onCopy={copylinkDriveItem}
        copyResponse={copyResponse}
        onClick={getDownloadDriveItem}
        downloadUrl={ItemDownloadUrl}
        onDelete={deleteDriveItem}
         deleteResponse={deleteResponse}
        />
    </AuthenticatedTemplate>
  )
}

export default MyRecent
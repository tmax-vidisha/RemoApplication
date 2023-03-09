import { AuthenticatedTemplate } from '@azure/msal-react'
import React from 'react'
import FileSharedPage from '../../../Components/WorkSpaceOne/SharedwithMe/FileSharedPage'
import useCustom from '../../../hooks/useCustom'
import { useGetAllSharedItemsQuery,useCopylinkOneDriveMutation,useDownloadUrlItemOneDriveMutation } from '../../../services/graph'
const SharedFilePage = () => {
    const { token } = useCustom();
    const { data, isSuccess, isLoading } = useGetAllSharedItemsQuery(token);
    const [sendCopyItem, { data: copyResponse,isSuccess:copySuccess,isLoading:copyLoading  }] = useCopylinkOneDriveMutation();
    // const [sendItem, { data: ItemDownloadUrlResponse, isSuccess: itemDownloadSuccess, isLoading: itemDownloadIsLoading }] = useDownloadUrlItemOneDriveMutation();
    console.log(data,'Shared ')
    // const copylinkDriveItem = async (id: string, name: string) => {
    //   console.log(id, name)
    //   const Data = {
    //     // name:id,
    //     ItemId: id,
    //     Name: name
    //   }
    //   await sendCopyItem(Data)
    // }
  
    // const getDownloadDriveItem = async (id: string, name: string) => {
    //   console.log(id, name)
    //   const Data = {
    //     // name:id,
    //     ItemId: id,
    //     Name: name
    //   }
    //   await sendItem(Data)
    // }
  return (
    <AuthenticatedTemplate>
        <FileSharedPage
        data={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
        // onCopy={copylinkDriveItem}
        // copyLoading={copyLoading}
        // copySuccess={copySuccess}
        // copyResponse={copyResponse}
        // onClick={getDownloadDriveItem}
        // downloadUrl={ItemDownloadUrlResponse}
        // itemDownloadSuccess={itemDownloadSuccess}
        // itemDownloadIsLoading={itemDownloadIsLoading}

        />
    </AuthenticatedTemplate>
  )
}

export default SharedFilePage
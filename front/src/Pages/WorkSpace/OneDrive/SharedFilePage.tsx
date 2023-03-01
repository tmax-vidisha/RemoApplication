import { AuthenticatedTemplate } from '@azure/msal-react'
import React from 'react'
import FileSharedPage from '../../../Components/WorkSpaceOne/SharedwithMe/FileSharedPage'
import useCustom from '../../../hooks/useCustom'
import { useGetAllSharedItemsQuery } from '../../../services/graph'
const SharedFilePage = () => {
    const { token } = useCustom();
    const { data, isSuccess, isLoading } = useGetAllSharedItemsQuery(token);
    console.log(data,'Shared ')

  return (
    <AuthenticatedTemplate>
        <FileSharedPage
        data={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
        />
    </AuthenticatedTemplate>
  )
}

export default SharedFilePage
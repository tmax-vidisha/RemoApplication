import { AuthenticatedTemplate } from '@azure/msal-react';
import React from 'react'
import RecentFile from '../../../Components/WorkSpaceOne/RecentFiles/RecentFile'
import useCustom from '../../../hooks/useCustom'
import { useGetAllRecentItemsQuery } from '../../../services/graph';

const MyRecent = () => {
    const { token } = useCustom();
    const { data, error, isLoading } = useGetAllRecentItemsQuery(token);
    console.log(data,'ttuuuyyyjsg')
  return (
    <AuthenticatedTemplate>
    <RecentFile
        data={data}
        isLoading={isLoading}
        error={error}
        />
    </AuthenticatedTemplate>
  )
}

export default MyRecent
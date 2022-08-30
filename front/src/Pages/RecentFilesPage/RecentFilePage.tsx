import React from 'react'
import useCustom from '../../hooks/useCustom'
import {  useGetAllRecentFilesQuery} from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import RecentFiles from '../../Components/RecentFiles';
const RecentFilePage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllRecentFilesQuery(token)
  return (
    <AuthenticatedTemplate>
        <RecentFiles
         data = {data}
         isLoading={isLoading}
         error= {error}
        />
    </AuthenticatedTemplate>
  )
}

export default RecentFilePage
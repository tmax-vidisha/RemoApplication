import React from 'react'
import useCustom from '../../useCustom'
import { useGetAllAnnoncementsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';

import Announcement from '../../Components/Announcement';
const AnnouncementPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllAnnoncementsQuery(token)
  return (
    <AuthenticatedTemplate>
        <Announcement
           data = {data}
           isLoading={isLoading}
           error={error}
        />
    </AuthenticatedTemplate>
  )
}

export default AnnouncementPage
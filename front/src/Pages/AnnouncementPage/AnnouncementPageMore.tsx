import React from 'react'
import useCustom from '../../hooks/useCustom'
import { useGetAllAnnoncementsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import AnnouncementReadMore from '../../Components/AnnouncementReadMore';
const AnnouncementPageMore = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllAnnoncementsQuery(token)
  return (
    <AuthenticatedTemplate>
         <AnnouncementReadMore
           data = {data}
           isLoading={isLoading}
           error={error}
        />
    </AuthenticatedTemplate>
  )
}

export default AnnouncementPageMore
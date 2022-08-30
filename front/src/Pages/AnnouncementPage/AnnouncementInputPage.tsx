import React from 'react'
import useCustom from '../../hooks/useCustom'
import { useGetAllAnnoncementsQuery,useCreateTokenwithDataMutation } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import AnnoncementInput from '../../Components/AnnouncementInput';
const AnnouncementInputPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllAnnoncementsQuery(token)
    const [sendItem] = useCreateTokenwithDataMutation();


    const createAnnouncementHandler = (obj: any) => {
      console.log('clicked')

      sendItem(obj)
  }
  return (
    <AuthenticatedTemplate>
        <AnnoncementInput
           data = {data}
           isLoading={isLoading}
           error={error}
           onSubmit={createAnnouncementHandler}
        />
    </AuthenticatedTemplate>
  )
}

export default AnnouncementInputPage
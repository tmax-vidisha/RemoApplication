import React from 'react'
import {useGetAllQuickLinkQuery,useCreateTokenwithUserQuickDataMutation } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import useCustom from '../../hooks/useCustom'
import UserQuickLinks from '../../Components/UserQuickLinks';
const UserQuickLinkPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllQuickLinkQuery(token)
    const [sendItem] = useCreateTokenwithUserQuickDataMutation();
    const createUserQuickLinkHandler = (obj: any) => {
      console.log('clicked')

      sendItem(obj)
  }
  return (
    <AuthenticatedTemplate>
        <UserQuickLinks
           data = {data}
           isLoading={isLoading}
           error= {error}
           onSubmiting={createUserQuickLinkHandler}
        />
    </AuthenticatedTemplate>
  )
}

export default UserQuickLinkPage
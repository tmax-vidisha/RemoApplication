import React from 'react'
import {useGetAllQuickLinkQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import useCustom from '../../useCustom'
import QuickLinks from '../../Components/Quicklinks';
const QuicklinkPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllQuickLinkQuery(token)

  return (
    <AuthenticatedTemplate>
        <QuickLinks
           data = {data}
           isLoading={isLoading}
           error= {error}
        />
    </AuthenticatedTemplate>
  )
}

export default QuicklinkPage
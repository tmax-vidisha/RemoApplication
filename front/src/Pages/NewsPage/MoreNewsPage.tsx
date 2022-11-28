import React from 'react'
import useCustom from '../../hooks/useCustom'
import {useGetAllNewsQuery } from '../../services/APIs';
import { AuthenticatedTemplate } from '@azure/msal-react';
import MoreNews from '../../Components/NewsReadMore/MoreNews';
const MoreNewsPage = () => {
    const {token} = useCustom();
    const { data, error, isLoading } = useGetAllNewsQuery(token)
  return (
    <AuthenticatedTemplate>
        <MoreNews
         data = {data}
         isLoading={isLoading}
         error= {error}
      
      />
    </AuthenticatedTemplate>
  )
}

export default MoreNewsPage